(function () {
  const data = window.VIEWER_DEMO_DATA || { technicians: [], assets: [], months: {} }
  const isPrivacySafeSnapshot = data.privacyMode === 'aggregated' && data.schemaVersion === 2
  const ADHERENCE_EVOLUTION_MIN = 50
  const ADHERENCE_NEAR_TARGET_MIN = 75
  const ADHERENCE_TARGET_MIN = 90
  const ADHERENCE_EXCELLENT_MIN = 100
  const PREVENTIVE_TARGET = 70
  const TECHNICIAN_RANKING_WEIGHTS = {
    adherence: 40,
    hours: 25,
    orders: 20,
    preventive: 15,
  }
  const TECHNICIAN_TEAM_AVERAGE_SCORE = 80
  const TECHNICIAN_PREVENTIVE_TARGET = 70
  const SCALE_BLOCK_SIZE = 3
  const SCALE_CYCLE_BLOCKS = 2
  const SCALE_ACTIVE_BLOCK_INDEX = 1
  const SCALE_BASE_UTC = Date.UTC(2025, 11, 29)
  const THEME = 'industrial'
  const WORK_RHYTHM_STATUS_GIFS = {
    'Em andamento': './work-rhythm/in-progress-critical.gif',
    'Crítico': './work-rhythm/in-progress-critical.gif',
    'Em evolução': './work-rhythm/evolution.gif',
    'Próximo da meta': './work-rhythm/near-target.gif',
    'Meta atingida': './work-rhythm/target-achieved.gif',
    'Excelente': './work-rhythm/excellent.gif',
  }

  function getAdherenceClassification(value) {
    const numericValue = Number(value)
    const adherence = Number.isFinite(numericValue) ? Number(numericValue.toFixed(1)) : 0

    if (adherence <= 0) {
      return { status: 'Sem apontamento', tone: 'neutral' }
    }
    if (adherence < ADHERENCE_EVOLUTION_MIN) {
      return { status: 'Crítico', tone: 'critical' }
    }
    if (adherence < ADHERENCE_NEAR_TARGET_MIN) {
      return { status: 'Em evolução', tone: 'progress' }
    }
    if (adherence < ADHERENCE_TARGET_MIN) {
      return { status: 'Próximo da meta', tone: 'attention' }
    }
    if (adherence < ADHERENCE_EXCELLENT_MIN) {
      return { status: 'Meta atingida', tone: 'good' }
    }
    return { status: 'Excelente', tone: 'good' }
  }

  function getRankingScoreClassification(value) {
    const numericValue = Number(value)
    const score = Number.isFinite(numericValue) ? Number(numericValue.toFixed(1)) : 0

    if (score >= 100) {
      return { status: 'Excelente', tone: 'good', statusGifKey: 'Excelente' }
    }
    if (score >= 90) {
      return { status: 'Destaque', tone: 'good', statusGifKey: 'Meta atingida' }
    }
    if (score >= 80) {
      return { status: 'Forte desempenho', tone: 'attention', statusGifKey: 'Próximo da meta' }
    }
    if (score >= 70) {
      return { status: 'Em disputa', tone: 'progress', statusGifKey: 'Em evolução' }
    }
    return { status: 'Em evolução', tone: 'critical', statusGifKey: 'Em andamento' }
  }

  const monthSelect = document.getElementById('month-select')
  const technicianSelect = document.getElementById('technician-select')
  const technicianField = document.getElementById('technician-filter-field')
  const modeButtons = Array.from(document.querySelectorAll('.segment'))
  const monthFormatter = new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' })
  const shortDateFormatter = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit' })
  const numberFormatter = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })

  const monthKeys = Object.keys(data.months || {}).sort().reverse()
  let selectedMonth = monthKeys[0] || ''
  let selectedTechnicianId = data.technicians?.[0]?.id || ''
  let mode = 'general'
  let currentRanking = []
  let openRankingInfoIndex = -1
  let rankingModalReturnFocus = null

  document.body.dataset.theme = THEME
  document.querySelector('.themed-app')?.setAttribute('data-theme', THEME)

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
  }

  function text(id, value) {
    const element = document.getElementById(id)
    if (element) {
      element.textContent = value
    }
  }

  function html(id, value) {
    const element = document.getElementById(id)
    if (element) {
      element.innerHTML = value
    }
  }

  function setWidth(id, value) {
    const element = document.getElementById(id)
    if (element) {
      element.style.width = `${Math.max(0, Math.min(Number(value) || 0, 100))}%`
    }
  }

  function setTone(id, baseClass, tone, extraClass = '') {
    const element = document.getElementById(id)
    if (!element) {
      return
    }

    element.className = [baseClass, extraClass, `${baseClass}-${tone}`].filter(Boolean).join(' ')
  }

  function formatHours(value) {
    return `${numberFormatter.format(Number(value) || 0)} h`
  }

  function formatPercent(value) {
    return `${numberFormatter.format(Number(value) || 0)}%`
  }

  function formatWholePercent(value) {
    return `${Math.round(Number(value) || 0)}%`
  }

  function formatRankingMetric(value, suffix = '') {
    if (value === null || value === undefined || !Number.isFinite(Number(value))) {
      return '—'
    }

    return `${numberFormatter.format(Number(value))}${suffix}`
  }

  function formatMonth(monthKey) {
    if (!monthKey) {
      return '-'
    }

    return monthFormatter.format(new Date(`${monthKey}-01T00:00:00`))
  }

  function formatDateTime(date, time) {
    if (!date) {
      return time || '-'
    }

    return `${shortDateFormatter.format(new Date(`${date}T00:00:00`))} ${time || ''}`.trim()
  }

  function sum(list, field) {
    return list.reduce((acc, item) => acc + Number(item[field] || 0), 0)
  }

  function calculateRankingPercentage(value, target) {
    const numericValue = Number(value)
    const numericTarget = Number(target)

    if (!Number.isFinite(numericValue) || !Number.isFinite(numericTarget) || numericTarget <= 0) {
      return null
    }

    return Math.max(numericValue, 0) / numericTarget * 100
  }

  function normalizeRankingNote(value, reference) {
    const percentage = calculateRankingPercentage(value, reference)
    return percentage === null ? null : Number(Math.min(percentage, 100).toFixed(1))
  }

  function normalizeTeamAverageNote(value, teamAverage) {
    const percentageOfAverage = calculateRankingPercentage(value, teamAverage)
    return percentageOfAverage === null
      ? null
      : Number(Math.min(percentageOfAverage * (TECHNICIAN_TEAM_AVERAGE_SCORE / 100), 100).toFixed(1))
  }

  function calculateTechnicianRankingScore(technician, benchmarks) {
    const indicatorScores = {
      adherence: normalizeRankingNote(technician.adherence, 100),
      hours: normalizeTeamAverageNote(technician.executedHours, benchmarks.averageExecutedHours),
      orders: normalizeTeamAverageNote(technician.orderCount, benchmarks.averageOrderCount),
      preventive: normalizeRankingNote(technician.preventiveShare, TECHNICIAN_PREVENTIVE_TARGET),
    }
    const scoreComponents = Object.fromEntries(
      Object.entries(indicatorScores).map(([indicator, score]) => [
        indicator,
        score === null ? 0 : score * TECHNICIAN_RANKING_WEIGHTS[indicator] / 100,
      ]),
    )
    const rankingScore = Number(
      Object.values(scoreComponents)
        .reduce((total, value) => total + value, 0)
        .toFixed(1),
    )

    return { rankingScore, indicatorScores, scoreComponents }
  }

  function calculateEasterDate(year) {
    const a = year % 19
    const b = Math.floor(year / 100)
    const c = year % 100
    const d = Math.floor(b / 4)
    const e = b % 4
    const f = Math.floor((b + 8) / 25)
    const g = Math.floor((b - f + 1) / 3)
    const h = (19 * a + b - d - g + 15) % 30
    const i = Math.floor(c / 4)
    const k = c % 4
    const l = (32 + 2 * e + 2 * i - h - k) % 7
    const m = Math.floor((a + 11 * h + 22 * l) / 451)
    const month = Math.floor((h + l - 7 * m + 114) / 31)
    const day = ((h + l - 7 * m + 114) % 31) + 1

    return new Date(Date.UTC(year, month - 1, day))
  }

  function formatUtcDateKey(date) {
    return [
      date.getUTCFullYear(),
      String(date.getUTCMonth() + 1).padStart(2, '0'),
      String(date.getUTCDate()).padStart(2, '0'),
    ].join('-')
  }

  function getBrazilNationalHolidayKeys(year) {
    const easter = calculateEasterDate(year)
    const goodFriday = new Date(easter)
    goodFriday.setUTCDate(easter.getUTCDate() - 2)

    return new Set([
      `${year}-01-01`,
      formatUtcDateKey(goodFriday),
      `${year}-04-21`,
      `${year}-05-01`,
      `${year}-09-07`,
      `${year}-10-12`,
      `${year}-11-02`,
      `${year}-11-15`,
      `${year}-11-20`,
      `${year}-12-25`,
    ])
  }

  function isScaleWorkday(dateKey, scaleType) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey || '')) {
      return false
    }

    const [yearValue, monthValue, dayValue] = dateKey.split('-').map(Number)
    const currentDate = new Date(Date.UTC(yearValue, monthValue - 1, dayValue))
    const weekday = currentDate.getUTCDay()
    const nationalHolidays = getBrazilNationalHolidayKeys(yearValue)

    if (scaleType === '5x2') {
      return weekday >= 1 && weekday <= 5 && !nationalHolidays.has(dateKey)
    }

    if (scaleType === '6x1-night') {
      return weekday !== 6 && !nationalHolidays.has(dateKey)
    }

    if (scaleType === '3x3') {
      const diffDays = Math.floor((Date.UTC(yearValue, monthValue - 1, dayValue) - SCALE_BASE_UTC) / 86400000)
      const blockIndex = Math.floor(diffDays / SCALE_BLOCK_SIZE) % SCALE_CYCLE_BLOCKS
      return (blockIndex + SCALE_CYCLE_BLOCKS) % SCALE_CYCLE_BLOCKS === SCALE_ACTIVE_BLOCK_INDEX
    }

    return false
  }

  function listMonthDateKeys(monthKey) {
    if (!/^\d{4}-\d{2}$/.test(monthKey || '')) {
      return []
    }

    const [yearValue, monthValue] = monthKey.split('-').map(Number)
    const lastDay = new Date(Date.UTC(yearValue, monthValue, 0)).getUTCDate()
    return Array.from(
      { length: lastDay },
      (_, index) => `${monthKey}-${String(index + 1).padStart(2, '0')}`,
    )
  }

  function getLocalDateKey(date = new Date()) {
    return [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, '0'),
      String(date.getDate()).padStart(2, '0'),
    ].join('-')
  }

  function timeToMinutes(value) {
    if (!String(value || '').includes(':')) {
      return null
    }

    const [hours, minutes] = String(value).split(':').map(Number)
    return hours * 60 + minutes
  }

  function addDaysToIsoDate(value, days) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) {
      return ''
    }

    const [year, month, day] = value.split('-').map(Number)
    const date = new Date(year, month - 1, day + days)
    const nextYear = String(date.getFullYear())
    const nextMonth = String(date.getMonth() + 1).padStart(2, '0')
    const nextDay = String(date.getDate()).padStart(2, '0')

    return `${nextYear}-${nextMonth}-${nextDay}`
  }

  function buildDailyOrderSegments(order) {
    const date = order.date
    const start = timeToMinutes(order.startTime)
    const end = timeToMinutes(order.endTime)

    if (!date || start === null || end === null) {
      const durationMinutes = Math.max(Number(order.executedHours || 0) * 60, 0)
      return durationMinutes > 0 ? [{ date, startMinute: 0, endMinute: durationMinutes }] : []
    }

    if (end > start) {
      return [{ date, startMinute: start, endMinute: end }]
    }

    const nextDate = addDaysToIsoDate(date, 1)

    return [
      { date, startMinute: start, endMinute: 24 * 60 },
      { date: nextDate, startMinute: 0, endMinute: end },
    ].filter((segment) => segment.date && segment.endMinute > segment.startMinute)
  }

  function sumMergedIntervals(intervals) {
    const sortedIntervals = intervals
      .filter((interval) => interval.date && interval.endMinute > interval.startMinute)
      .sort((left, right) => left.startMinute - right.startMinute || left.endMinute - right.endMinute)

    let totalMinutes = 0
    let currentStart = null
    let currentEnd = null

    sortedIntervals.forEach((interval) => {
      if (currentStart === null) {
        currentStart = interval.startMinute
        currentEnd = interval.endMinute
        return
      }

      if (interval.startMinute <= currentEnd) {
        currentEnd = Math.max(currentEnd, interval.endMinute)
        return
      }

      totalMinutes += currentEnd - currentStart
      currentStart = interval.startMinute
      currentEnd = interval.endMinute
    })

    if (currentStart !== null) {
      totalMinutes += currentEnd - currentStart
    }

    return totalMinutes / 60
  }

  function calculateChronologicalHours(orders) {
    if (isPrivacySafeSnapshot) {
      return sum(orders, 'executedHours')
    }

    const groups = new Map()

    orders.forEach((order) => {
      const groupKey = `${order.technicianId || 'sem-tecnico'}:${order.date}`
      const intervals = groups.get(groupKey) || []
      const start = timeToMinutes(order.startTime)
      let end = timeToMinutes(order.endTime)

      if (start === null || end === null) {
        return
      }

      if (end <= start) {
        end += 1440
      }
      intervals.push({ date: order.date, startMinute: start, endMinute: end })
      groups.set(groupKey, intervals)
    })

    return Array.from(groups.values()).reduce(
      (total, intervals) => total + sumMergedIntervals(intervals),
      0,
    )
  }

  function calculateChronologicalMixHours(orders) {
    if (isPrivacySafeSnapshot) {
      return {
        preventiveHours: sum(orders.filter((order) => order.orderType === 'Preventiva'), 'executedHours'),
        correctiveHours: sum(orders.filter((order) => order.orderType !== 'Preventiva'), 'executedHours'),
      }
    }

    const timelines = new Map()

    orders.forEach((order) => {
      const groupKey = `${order.technicianId || 'sem-tecnico'}:${order.date}`
      const minuteTypes = timelines.get(groupKey) || new Map()
      const start = timeToMinutes(order.startTime)
      let end = timeToMinutes(order.endTime)

      if (start === null || end === null) {
        return
      }

      if (end <= start) {
        end += 1440
      }

      const typeMask = order.orderType === 'Preventiva' ? 1 : 2
      for (let minute = start; minute < end; minute += 1) {
        minuteTypes.set(minute, (minuteTypes.get(minute) || 0) | typeMask)
      }
      timelines.set(groupKey, minuteTypes)
    })

    let preventiveMinutes = 0
    let correctiveMinutes = 0

    timelines.forEach((minuteTypes) => {
      minuteTypes.forEach((typeMask) => {
        if (typeMask === 3) {
          preventiveMinutes += 0.5
          correctiveMinutes += 0.5
        } else if (typeMask === 1) {
          preventiveMinutes += 1
        } else {
          correctiveMinutes += 1
        }
      })
    })

    return {
      preventiveHours: preventiveMinutes / 60,
      correctiveHours: correctiveMinutes / 60,
    }
  }

  function getMonthData(monthKey) {
    return data.months?.[monthKey] || { monthlyTarget: 0, monthlyTargets: [], orders: [] }
  }

  function getTechnicianById(id) {
    return data.technicians.find((technician) => technician.id === id) || null
  }

  function getMonthlyTargetForTechnician(monthData, technicianId) {
    return (monthData.monthlyTargets || []).find((target) => target.technicianId === technicianId) || null
  }

  function getActiveTechnicians(monthData) {
    const monthTargets = Array.isArray(monthData.monthlyTargets) ? monthData.monthlyTargets : []

    if (!monthTargets.length) {
      return data.technicians
    }

    return data.technicians.filter((technician) => {
      const target = getMonthlyTargetForTechnician(monthData, technician.id)
      return target?.isActive !== 0
    })
  }

  function getActiveTechnicianIds(monthData) {
    return new Set(getActiveTechnicians(monthData).map((technician) => technician.id))
  }

  function ensureSelectedTechnician(monthData) {
    const activeTechnicians = getActiveTechnicians(monthData)
    if (!activeTechnicians.length) {
      selectedTechnicianId = ''
      return activeTechnicians
    }

    if (!activeTechnicians.some((technician) => technician.id === selectedTechnicianId)) {
      selectedTechnicianId = activeTechnicians[0].id
    }

    return activeTechnicians
  }

  function getTechnicianName(id) {
    return getTechnicianById(id)?.name || id || 'Tecnico nao informado'
  }

  function getAssetByTag(tag) {
    const normalizedTag = String(tag || '').trim().toLocaleLowerCase('pt-BR')
    if (!normalizedTag) {
      return null
    }

    return (data.assets || []).find((asset) => String(asset.tag || '').trim().toLocaleLowerCase('pt-BR') === normalizedTag) || null
  }

  function buildVisibleOrders(monthData) {
    const orders = Array.isArray(monthData.orders) ? monthData.orders : []
    const activeTechnicianIds = getActiveTechnicianIds(monthData)

    if (mode === 'technician' && selectedTechnicianId) {
      return orders.filter((order) => order.technicianId === selectedTechnicianId && activeTechnicianIds.has(order.technicianId))
    }

    return orders.filter((order) => activeTechnicianIds.has(order.technicianId))
  }

  function buildSeries(orders) {
    if (isPrivacySafeSnapshot) {
      const grouped = orders.reduce((acc, order) => {
        if (order.date) {
          acc[order.date] = (acc[order.date] || 0) + (Number(order.executedHours) || 0)
        }
        return acc
      }, {})

      return Object.entries(grouped)
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([date, value]) => ({
          date,
          value: Number(value.toFixed(2)),
          shortDate: shortDateFormatter.format(new Date(`${date}T00:00:00`)),
        }))
    }

    const grouped = orders.reduce((acc, order) => {
      const technicianKey = order.technicianId || 'sem-tecnico'

      buildDailyOrderSegments(order).forEach((segment) => {
        if (!segment.date) {
          return
        }

        if (!acc[segment.date]) {
          acc[segment.date] = {}
        }

        if (!acc[segment.date][technicianKey]) {
          acc[segment.date][technicianKey] = []
        }

        acc[segment.date][technicianKey].push(segment)
      })

      return acc
    }, {})

    return Object.entries(grouped)
      .sort(([left], [right]) => left.localeCompare(right))
      .map(([date, technicians]) => {
        const value = Object.values(technicians).reduce(
          (acc, intervals) => acc + sumMergedIntervals(intervals),
          0,
        )

        return {
          date,
          value: Number(value.toFixed(2)),
          shortDate: shortDateFormatter.format(new Date(`${date}T00:00:00`)),
        }
      })
  }

  function buildRanking(orders, monthData, technicians) {
    const isCurrentCompetence = selectedMonth === getLocalDateKey().slice(0, 7)
    const todayDateKey = getLocalDateKey()
    const monthDateKeys = listMonthDateKeys(selectedMonth)
    const elapsedDateKeys = isCurrentCompetence
      ? monthDateKeys.filter((dateKey) => dateKey < todayDateKey)
      : monthDateKeys
    const baseRows = technicians
      .map((technician) => {
        const technicianOrders = orders.filter((order) => order.technicianId === technician.id)
        const targetPlan = getMonthlyTargetForTechnician(monthData, technician.id)
        const targetHours = targetPlan?.isActive === 0 ? 0 : Number(targetPlan?.targetHours) || 0
        const scaleType = targetPlan?.scaleType || 'manual'
        const scheduledDays = monthDateKeys.filter((dateKey) => isScaleWorkday(dateKey, scaleType)).length
        const elapsedScheduledDays = elapsedDateKeys.filter((dateKey) => isScaleWorkday(dateKey, scaleType)).length
        const expectedTargetHours = isCurrentCompetence && scheduledDays > 0
          ? targetHours * (elapsedScheduledDays / scheduledDays)
          : targetHours
        const executedHours = calculateChronologicalHours(technicianOrders)
        const adherence = calculateRankingPercentage(executedHours, expectedTargetHours)
        const monthlyAdherence = calculateRankingPercentage(executedHours, targetHours)
        const balance = Math.max(targetHours - executedHours, 0)
        const { preventiveHours, correctiveHours } = calculateChronologicalMixHours(technicianOrders)
        const preventiveShare = calculateRankingPercentage(preventiveHours, executedHours)

        return {
          ...technician,
          orderCount: technicianOrders.length,
          executedHours,
          targetHours,
          expectedTargetHours,
          adherence,
          monthlyAdherence,
          balance,
          preventiveHours,
          correctiveHours,
          preventiveShare,
          averageOrderHours: technicianOrders.length > 0 ? executedHours / technicianOrders.length : 0,
        }
      })
      .filter((technician) => technician.targetHours > 0)

    const averageExecutedHours = baseRows.length
      ? baseRows.reduce((total, technician) => total + technician.executedHours, 0) / baseRows.length
      : 0
    const averageOrderCount = baseRows.length
      ? baseRows.reduce((total, technician) => total + technician.orderCount, 0) / baseRows.length
      : 0

    return baseRows
      .map((technician) => {
        const { rankingScore, indicatorScores, scoreComponents } = calculateTechnicianRankingScore(
          technician,
          { averageExecutedHours, averageOrderCount },
        )
        const { tone, status, statusGifKey } = getRankingScoreClassification(rankingScore)

        return {
          ...technician,
          rankingScore,
          indicatorScores,
          scoreComponents,
          teamAverageHours: averageExecutedHours,
          teamAverageOrders: averageOrderCount,
          tone,
          status,
          statusGifKey,
        }
      })
      .sort((left, right) =>
        right.rankingScore - left.rankingScore ||
        (right.adherence || 0) - (left.adherence || 0) ||
        right.executedHours - left.executedHours ||
        right.orderCount - left.orderCount)
  }

  function buildTechnicianMixRows(orders, technicians) {
    return technicians
      .map((technician) => {
        const technicianOrders = orders.filter((order) => order.technicianId === technician.id)
        const preventiveOrders = technicianOrders.filter((order) => order.orderType === 'Preventiva')
        const correctiveOrders = technicianOrders.filter((order) => order.orderType !== 'Preventiva')
        const preventiveHours = sum(preventiveOrders, 'executedHours')
        const correctiveHours = sum(correctiveOrders, 'executedHours')
        const totalHours = preventiveHours + correctiveHours
        const preventiveShare = totalHours > 0 ? (preventiveHours / totalHours) * 100 : 0
        const correctiveShare = totalHours > 0 ? (correctiveHours / totalHours) * 100 : 0
        const tone = correctiveShare >= 70 ? 'critical' : correctiveShare >= 50 ? 'attention' : 'good'

        return {
          ...technician,
          preventiveCount: preventiveOrders.length,
          correctiveCount: correctiveOrders.length,
          preventiveHours,
          correctiveHours,
          totalHours,
          preventiveShare,
          correctiveShare,
          tone,
        }
      })
      .filter((technician) => technician.totalHours > 0 || technician.id === selectedTechnicianId)
      .sort((left, right) => right.correctiveHours - left.correctiveHours || right.totalHours - left.totalHours)
  }

  function buildTopAssets(orders) {
    if (isPrivacySafeSnapshot) {
      return []
    }

    return Object.values(
      orders.reduce((acc, order) => {
        const key = `${order.tag || 'SEM-TAG'}|${order.equipment || 'Equipamento nao informado'}`
        if (!acc[key]) {
          acc[key] = {
            key,
            tag: order.tag || 'SEM-TAG',
            equipment: order.equipment || 'Equipamento nao informado',
            sector: order.sector || 'SEM SETOR',
            orderCount: 0,
            executedHours: 0,
          }
        }

        acc[key].orderCount += 1
        acc[key].executedHours += Number(order.executedHours || 0)
        return acc
      }, {}),
    )
      .sort((left, right) => right.executedHours - left.executedHours || right.orderCount - left.orderCount)
      .slice(0, 5)
  }

  function buildCriticalAssets(orders) {
    if (isPrivacySafeSnapshot) {
      return []
    }

    const correctiveOrders = orders.filter((order) => order.orderType !== 'Preventiva')
    const totalCorrectiveHours = sum(correctiveOrders, 'executedHours')

    return Object.values(
      correctiveOrders.reduce((acc, order) => {
        const tag = order.tag || 'SEM-TAG'
        const registeredAsset = getAssetByTag(tag)
        const equipment = registeredAsset?.equipment || order.equipment || 'Equipamento nao informado'
        const sector = registeredAsset?.sector || order.sector || 'SEM SETOR'
        const key = `${tag}|${equipment}`
        if (!acc[key]) {
          acc[key] = {
            key,
            tag,
            equipment,
            sector,
            orderCount: 0,
            executedHours: 0,
            concentration: 0,
          }
        }

        acc[key].orderCount += 1
        acc[key].executedHours += Number(order.executedHours || 0)
        return acc
      }, {}),
    )
      .map((asset) => ({
        ...asset,
        concentration: totalCorrectiveHours > 0 ? (asset.executedHours / totalCorrectiveHours) * 100 : 0,
      }))
      .sort((left, right) => right.executedHours - left.executedHours || right.orderCount - left.orderCount)
      .slice(0, 6)
  }

  function buildTopSectors(orders) {
    if (isPrivacySafeSnapshot) {
      return []
    }

    return Object.values(
      orders.reduce((acc, order) => {
        const key = order.sector || 'SEM SETOR'
        if (!acc[key]) {
          acc[key] = {
            sector: key,
            orderCount: 0,
            executedHours: 0,
          }
        }

        acc[key].orderCount += 1
        acc[key].executedHours += Number(order.executedHours || 0)
        return acc
      }, {}),
    )
      .sort((left, right) => right.executedHours - left.executedHours)
      .slice(0, 4)
  }

  function adherenceLevel(value) {
    return getAdherenceClassification(value).status
  }

  function buildContext() {
    const monthData = getMonthData(selectedMonth)
    const activeTechnicians = ensureSelectedTechnician(monthData)
    const activeTechnicianIds = new Set(activeTechnicians.map((technician) => technician.id))
    const allMonthOrders = Array.isArray(monthData.orders) ? monthData.orders : []
    const activeMonthOrders = allMonthOrders.filter((order) => activeTechnicianIds.has(order.technicianId))
    const visibleOrders = buildVisibleOrders(monthData)
    const effectiveMonthlyTarget = Number(monthData.monthlyTarget || 0)
    const selectedTargetHours = Number(getMonthlyTargetForTechnician(monthData, selectedTechnicianId)?.targetHours) || 0
    const targetHours = mode === 'general' ? effectiveMonthlyTarget : selectedTargetHours
    const executedHours = calculateChronologicalHours(visibleOrders)
    const adherence = targetHours > 0 ? (executedHours / targetHours) * 100 : 0
    const backlog = Math.max(targetHours - executedHours, 0)
    const averageOrderHours = visibleOrders.length ? executedHours / visibleOrders.length : 0
    const preventiveOrders = visibleOrders.filter((order) => order.orderType === 'Preventiva')
    const correctiveOrders = visibleOrders.filter((order) => order.orderType !== 'Preventiva')
    const preventiveHours = sum(preventiveOrders, 'executedHours')
    const correctiveHours = sum(correctiveOrders, 'executedHours')
    const mixHoursTotal = preventiveHours + correctiveHours
    const mixOrderTotal = preventiveOrders.length + correctiveOrders.length
    const preventiveHoursShare = mixHoursTotal > 0 ? (preventiveHours / mixHoursTotal) * 100 : 0
    const correctiveHoursShare = mixHoursTotal > 0 ? (correctiveHours / mixHoursTotal) * 100 : 0
    const preventiveOrderShare = mixOrderTotal > 0 ? (preventiveOrders.length / mixOrderTotal) * 100 : 0
    const correctiveOrderShare = mixOrderTotal > 0 ? (correctiveOrders.length / mixOrderTotal) * 100 : 0
    const ranking = buildRanking(mode === 'general' ? activeMonthOrders : visibleOrders, monthData, activeTechnicians)
    const visibleRanking = buildRanking(visibleOrders, monthData, mode === 'general' ? activeTechnicians : activeTechnicians.filter((technician) => technician.id === selectedTechnicianId))
    const activeTechniciansCount = activeTechnicians.length
    const visibleActiveTechnicians = visibleRanking.filter((technician) => technician.executedHours > 0).length
    const series = buildSeries(visibleOrders)
    const peakDay = [...series].sort((left, right) => right.value - left.value)[0] || null
    const topAssets = buildTopAssets(visibleOrders)
    const topSectors = buildTopSectors(visibleOrders)
    const criticalAssets = buildCriticalAssets(visibleOrders)
    const technicianMixRows = buildTechnicianMixRows(mode === 'general' ? activeMonthOrders : visibleOrders, activeTechnicians)
    const adherenceTone = getAdherenceClassification(adherence).tone
    const backlogTone = backlog <= 0 ? 'good' : targetHours > 0 && backlog / targetHours <= 0.15 ? 'attention' : 'critical'
    const totalOrdersTone = visibleOrders.length > 0 ? 'good' : 'critical'
    const mixTone = preventiveHoursShare >= PREVENTIVE_TARGET ? 'good' : preventiveHoursShare >= 50 ? 'attention' : 'critical'
    const activeTechniciansTone = visibleActiveTechnicians === 0
      ? 'critical'
      : visibleActiveTechnicians >= (mode === 'general' ? activeTechnicians.length : 1)
        ? 'good'
        : 'attention'

    return {
      monthData,
      allMonthOrders,
      activeMonthOrders,
      visibleOrders,
      activeTechnicianList: activeTechnicians,
      effectiveMonthlyTarget,
      targetHours,
      executedHours,
      adherence,
      backlog,
      averageOrderHours,
      preventiveOrders,
      correctiveOrders,
      preventiveHours,
      correctiveHours,
      preventiveHoursShare,
      correctiveHoursShare,
      preventiveOrderShare,
      correctiveOrderShare,
      ranking,
      visibleRanking,
      activeTechnicians: activeTechniciansCount,
      visibleActiveTechnicians,
      series,
      peakDay,
      topAssets,
      topSectors,
      criticalAssets,
      technicianMixRows,
      adherenceTone,
      backlogTone,
      totalOrdersTone,
      mixTone,
      activeTechniciansTone,
    }
  }

  function closeReportModal() {
    const modal = document.getElementById('report-modal')
    if (modal) {
      modal.hidden = true
    }
    document.body.classList.remove('modal-open')
  }

  function openReportModal(order) {
    const modal = document.getElementById('report-modal')
    if (!modal) {
      return
    }

    text('report-modal-title', `OS ${order.orderNumber || '-'}`)
    html(
      'report-modal-meta',
      [
        order.orderType,
        order.tag,
        getTechnicianName(order.technicianId),
        `${formatDateTime(order.date, order.startTime)} - ${order.endTime || '-'}`,
      ]
        .filter(Boolean)
        .map((item) => `<span>${escapeHtml(item)}</span>`)
        .join(''),
    )
    text('report-modal-text', order.observation || 'Sem relatorio complementar.')
    modal.hidden = false
    document.body.classList.add('modal-open')
  }

  function renderSelects() {
    if (monthSelect) {
      monthSelect.innerHTML = monthKeys
        .map((monthKey) => `<option value="${escapeHtml(monthKey)}">${escapeHtml(formatMonth(monthKey))}</option>`)
        .join('')
      monthSelect.value = selectedMonth
    }

    if (technicianSelect) {
      const monthData = getMonthData(selectedMonth)
      const activeTechnicians = ensureSelectedTechnician(monthData)
      technicianSelect.innerHTML = activeTechnicians
        .map((technician) => `<option value="${escapeHtml(technician.id)}">${escapeHtml(`${technician.id} - ${technician.name}`)}</option>`)
        .join('')
      technicianSelect.value = selectedTechnicianId
    }
  }

  function renderHero(context) {
    const selectedTechnician = getTechnicianById(selectedTechnicianId)
    const visibleTechnicians = mode === 'general' ? context.activeTechnicianList.length : (selectedTechnician ? 1 : 0)

    text('selected-month-label', formatMonth(selectedMonth))
    text('hero-summary-month', formatMonth(selectedMonth))
    text(
      'hero-summary-mode',
      mode === 'general'
        ? 'Visao consolidada da equipe'
        : `Recorte de ${selectedTechnician?.name || 'tecnico selecionado'}`,
    )
    text('hero-summary-orders', String(context.visibleOrders.length))
    text('hero-summary-hours', `${formatHours(context.executedHours)} executadas`)
    text('hero-summary-techs', String(visibleTechnicians))
    text(
      'hero-summary-active',
      mode === 'general'
        ? `${context.activeTechnicians} tecnicos ativos`
        : `${selectedTechnician?.id || 'sem tecnico'}`,
    )
    text(
      'hero-description',
      mode === 'general'
        ? 'Monitore aderencia, carga mensal, mix de OS e desempenho da equipe com leitura industrial orientada a PCM.'
        : 'Recorte individual em modo somente leitura com a mesma base publicada do painel PCM.',
    )
  }

  function renderMetricCards(context) {
    const preventiveStatus = context.preventiveHoursShare < 50
      ? 'Excesso de corretiva'
      : context.preventiveHoursShare < PREVENTIVE_TARGET
        ? 'Atencao ao equilibrio'
        : 'OK - Preventiva dentro do esperado'

    setTone('metric-executed-card', 'metric-card', context.executedHours > 0 ? 'good' : 'critical', 'panel accent')
    setTone('metric-adherence-card', 'metric-card', context.adherenceTone, 'panel')
    setTone('metric-backlog-card', 'metric-card', context.backlogTone, 'panel')
    setTone('metric-orders-card', 'metric-card', context.totalOrdersTone, 'panel')
    setTone('metric-mix-card', 'metric-card', context.mixTone, 'panel')
    setTone('metric-active-techs-card', 'metric-card', context.activeTechniciansTone, 'panel')

    text('metric-executed', formatHours(context.executedHours))
    text('metric-executed-meta', `${context.visibleOrders.length} OS no periodo`)
    text('metric-adherence', formatPercent(context.adherence))
    text('metric-adherence-meta', adherenceLevel(context.adherence))
    text('metric-backlog', formatHours(context.backlog))
    text('metric-backlog-meta', `Meta: ${formatHours(context.targetHours)}`)
    text('metric-orders', String(context.visibleOrders.length))
    text('metric-orders-meta', `${formatHours(context.averageOrderHours)} ticket medio`)
    text('metric-preventive-share', formatWholePercent(context.preventiveHoursShare))
    text('metric-corrective-share', formatWholePercent(context.correctiveHoursShare))
    text('metric-preventive-count', `${context.preventiveOrders.length} prev.`)
    text('metric-corrective-count', `${context.correctiveOrders.length} corr.`)
    text('metric-mix-alert', context.visibleOrders.length ? preventiveStatus : 'Sem carga no periodo')
    text(
      'metric-active-techs',
      mode === 'general'
        ? `${context.activeTechnicians}/${context.activeTechnicianList.length || 0}`
        : `${context.visibleActiveTechnicians ? 1 : 0}/1`,
    )
    text('metric-active-techs-meta', mode === 'general' ? 'Equipe com apontamento' : 'Recorte individual')
  }

  function renderProgress(context) {
    const metaProgress = context.targetHours > 0 ? Math.min((context.executedHours / context.targetHours) * 100, 120) : 0
    const metaProgressWidth = Math.min(metaProgress, 100)
    const bulletProgressTone = metaProgress < ADHERENCE_EVOLUTION_MIN
      ? 'critical'
      : metaProgress < ADHERENCE_NEAR_TARGET_MIN
        ? 'evolution'
        : metaProgress < ADHERENCE_TARGET_MIN
          ? 'near-target'
          : metaProgress < ADHERENCE_EXCELLENT_MIN
            ? 'target'
            : 'excellent'
    const adherenceClassification = getAdherenceClassification(metaProgress)
    const targetProgressGif = WORK_RHYTHM_STATUS_GIFS[adherenceClassification.status]
      || WORK_RHYTHM_STATUS_GIFS['Em andamento']
    const achievementTargetHours = context.targetHours * (ADHERENCE_TARGET_MIN / 100)
    const remainingToTarget = Math.max(achievementTargetHours - context.executedHours, 0)
    const progressCard = document.getElementById('target-progress-card')
    const progressFill = document.getElementById('target-progress-fill')
    const progressCurrent = document.getElementById('target-progress-current')
    const progressMotion = document.getElementById('target-progress-motion')
    const progressGif = document.getElementById('target-progress-gif')

    if (progressCard) {
      progressCard.className = `pcm-target-progress pcm-target-progress-${context.adherenceTone}`
    }
    if (progressFill) {
      progressFill.className = `pcm-bullet-fill pcm-bullet-fill-${bulletProgressTone}`
      progressFill.style.width = `${metaProgressWidth}%`
    }
    if (progressCurrent) {
      const edgeClass = metaProgressWidth <= 8
        ? ' pcm-bullet-current-start'
        : metaProgressWidth >= 92
          ? ' pcm-bullet-current-end'
          : ''
      progressCurrent.className = `pcm-bullet-current pcm-bullet-current-${bulletProgressTone}${edgeClass}`
      progressCurrent.style.left = `${metaProgressWidth}%`
    }
    if (progressMotion && progressGif) {
      progressMotion.setAttribute('aria-label', `Animação de ritmo: ${adherenceClassification.status}`)
      progressGif.src = targetProgressGif
    }

    text('progress-kicker', mode === 'general' ? 'Cockpit PCM' : 'Painel operacional')
    text('progress-title', mode === 'general' ? 'Meta consolidada, realizado e saldo' : 'Meta individual, realizado e saldo')
    text('target-progress-percent', formatPercent(metaProgress))
    text('target-progress-realized', `${formatHours(context.executedHours)} realizadas de ${formatHours(context.targetHours)}`)
    text('target-progress-current', formatPercent(metaProgress))
    text(
      'target-progress-copy',
      remainingToTarget > 0
        ? `Faltam ${formatHours(remainingToTarget)} para o mínimo de 90% (${formatHours(achievementTargetHours)}).`
        : `Mínimo de 90% atingido (${formatHours(achievementTargetHours)}).`,
    )
    text('mini-orders', String(context.visibleOrders.length))
    text('mini-order-average', `Média de ${formatHours(context.averageOrderHours)} por OS`)
    text('mini-target', formatHours(context.targetHours))
    text('mini-backlog', formatHours(context.backlog))
  }

  function renderDailyChart(context) {
    const chart = document.getElementById('daily-chart')
    if (!chart) {
      return
    }

    if (!context.series.length) {
      chart.innerHTML = '<p class="empty-state">Sem apontamentos recentes para este recorte.</p>'
      return
    }

    const maxSeries = Math.max(...context.series.map((item) => item.value), 1)
    chart.innerHTML = context.series
      .map((item) => {
        const height = Math.max((item.value / maxSeries) * 100, 8)
        return `
          <article class="trend-column">
            <strong>${escapeHtml(formatHours(item.value))}</strong>
            <div class="trend-bar-wrap">
              <div class="trend-bar" style="height:${height}%"></div>
            </div>
            <span>${escapeHtml(item.shortDate)}</span>
          </article>
        `
      })
      .join('')
  }

  function renderWorkRhythm(context) {
    const snapshot = context.monthData.workRhythm || {}
    const rhythm = mode === 'general'
      ? snapshot.general
      : snapshot.technicians?.[selectedTechnicianId]
    const grid = document.getElementById('work-rhythm-grid')
    const empty = document.getElementById('work-rhythm-empty')

    if (!rhythm?.available) {
      if (grid) {
        grid.innerHTML = ''
        grid.hidden = true
      }
      if (empty) {
        empty.hidden = false
      }
      text('work-rhythm-scope', rhythm?.scopeLabel || (mode === 'general' ? 'Meta diária da equipe' : 'Técnico selecionado'))
      text('work-rhythm-daily-hours', 'Escala sem distribuição diária')
      return
    }

    if (grid) {
      grid.hidden = false
    }
    if (empty) {
      empty.hidden = true
    }
    text('work-rhythm-scope', rhythm.scopeLabel || (mode === 'general' ? 'Meta diária da equipe' : getTechnicianName(selectedTechnicianId)))
    text('work-rhythm-daily-hours', `${formatHours(rhythm.formalDailyHours)} produtivas/dia`)

    html(
      'work-rhythm-grid',
      (rhythm.periods || []).map((period) => {
        const tone = escapeHtml(period.tone || 'neutral')
        const status = escapeHtml(period.status || 'Sem carga prevista')
        const gif = WORK_RHYTHM_STATUS_GIFS[period.status]
        const progress = Math.max(0, Math.min(Number(period.adherence) || 0, 100))
        return `
          <article class="work-rhythm-period work-rhythm-period-${tone}">
            <div class="work-rhythm-period-head">
              <div>
                <span>${escapeHtml(period.label)}</span>
                <small>${escapeHtml(period.caption)}</small>
              </div>
              <div class="work-rhythm-status work-rhythm-status-${tone}">
                ${gif ? `<span class="work-rhythm-status-visual" aria-hidden="true"><img src="${escapeHtml(gif)}" alt="" draggable="false"></span>` : ''}
                <span class="work-rhythm-tag work-rhythm-tag-${tone}">${status}</span>
              </div>
            </div>
            <div class="work-rhythm-values">
              <div><span>Executado</span><strong>${formatHours(period.executedHours)}</strong></div>
              <div><span>Exigido</span><strong>${formatHours(period.expectedHours)}</strong></div>
              <div><span>Aderência</span><strong>${Number(period.expectedHours) > 0 ? formatPercent(period.adherence) : '-'}</strong></div>
            </div>
            <div class="work-rhythm-track" aria-label="${escapeHtml(period.label)}: ${formatPercent(period.adherence)}">
              <span class="work-rhythm-fill work-rhythm-fill-${tone}" style="width:${progress}%"></span>
            </div>
          </article>
        `
      }).join(''),
    )
  }

  function buildOperationalAlerts(context) {
    const topAsset = context.topAssets[0] || null
    const overloadedTechnician = context.ranking[0] || null
    const correctiveSector = context.topSectors.find((sector) =>
      context.correctiveOrders.some((order) => (order.sector || 'SEM SETOR') === sector.sector),
    ) || context.topSectors[0] || null
    const backlogRatio = context.targetHours > 0 ? (context.backlog / context.targetHours) * 100 : 0
    const assetConcentration = topAsset && context.executedHours > 0 ? (topAsset.executedHours / context.executedHours) * 100 : 0
    const sectorConcentration = correctiveSector && context.correctiveHours > 0
      ? (correctiveSector.executedHours / context.correctiveHours) * 100
      : 0
    const technicianAdherence = overloadedTechnician?.adherence || 0

    const alerts = [
      {
        id: 'backlog',
        title: 'Maior backlog',
        value: context.targetHours > 0 ? formatHours(context.backlog) : 'Dados insuficientes',
        description: context.targetHours > 0
          ? backlogRatio > 15
            ? 'Saldo alto contra a meta mensal.'
            : 'Backlog controlado no recorte.'
          : 'Meta mensal nao definida para leitura.',
        tone: context.backlogTone,
      },
      {
        id: 'asset',
        title: 'Ativo mais critico',
        value: topAsset ? topAsset.tag : 'Dados insuficientes',
        description: topAsset
          ? `${formatHours(topAsset.executedHours)} - ${topAsset.orderCount} OS - ${formatPercent(assetConcentration)} da carga`
          : 'Sem ativo com apontamento no periodo.',
        tone: assetConcentration >= 25 ? 'critical' : assetConcentration >= 12 ? 'attention' : 'good',
      },
      {
        id: 'technician',
        title: 'Tecnico sobrecarregado',
        value: overloadedTechnician ? overloadedTechnician.name : 'Dados insuficientes',
        description: overloadedTechnician
          ? `${formatHours(overloadedTechnician.executedHours)} - ${formatPercent(technicianAdherence)} da meta`
          : 'Sem horas por tecnico no periodo.',
        tone: technicianAdherence >= 120 ? 'critical' : technicianAdherence >= 95 ? 'attention' : 'good',
      },
      {
        id: 'sector',
        title: 'Setor com corretivas',
        value: correctiveSector ? correctiveSector.sector : 'Dados insuficientes',
        description: correctiveSector
          ? `${formatHours(correctiveSector.executedHours)} - ${correctiveSector.orderCount} OS - ${formatPercent(sectorConcentration)} da corretiva`
          : 'Sem OS corretivas para leitura.',
        tone: sectorConcentration >= 35 ? 'critical' : sectorConcentration >= 20 ? 'attention' : 'good',
      },
      {
        id: 'mix',
        title: 'Concentracao corretiva',
        value: `${formatWholePercent(context.correctiveHoursShare)} corretiva`,
        description: context.correctiveHoursShare > context.preventiveHoursShare
          ? 'Corretiva supera preventiva. Rebalancear plano.'
          : 'Preventiva lidera o mix operacional.',
        tone: context.correctiveHoursShare > context.preventiveHoursShare ? 'critical' : context.correctiveHoursShare >= 40 ? 'attention' : 'good',
      },
    ]

    return isPrivacySafeSnapshot
      ? alerts.filter((alert) => !['asset', 'sector'].includes(alert.id))
      : alerts
  }

  function buildRankingIndicatorDetails(item) {
    const isCurrentCompetence = selectedMonth === getLocalDateKey().slice(0, 7)

    return [
      {
        label: isCurrentCompetence ? 'Ritmo até ontem' : 'Ritmo do período',
        result: formatRankingMetric(item.adherence, '%'),
        reference: 'Limite de nota: 100,0%',
        note: item.indicatorScores.adherence,
        weight: TECHNICIAN_RANKING_WEIGHTS.adherence,
        points: item.scoreComponents.adherence,
      },
      {
        label: 'Horas cronológicas',
        result: formatRankingMetric(item.executedHours, ' h'),
        reference: `Média da equipe: ${formatRankingMetric(item.teamAverageHours, ' h')}`,
        note: item.indicatorScores.hours,
        weight: TECHNICIAN_RANKING_WEIGHTS.hours,
        points: item.scoreComponents.hours,
      },
      {
        label: 'OS atendidas',
        result: `${item.orderCount} OS`,
        reference: `Média da equipe: ${formatRankingMetric(item.teamAverageOrders, ' OS')}`,
        note: item.indicatorScores.orders,
        weight: TECHNICIAN_RANKING_WEIGHTS.orders,
        points: item.scoreComponents.orders,
      },
      {
        label: 'Participação preventiva',
        result: formatRankingMetric(item.preventiveShare, '%'),
        reference: `Referência: ${TECHNICIAN_PREVENTIVE_TARGET},0%`,
        note: item.indicatorScores.preventive,
        weight: TECHNICIAN_RANKING_WEIGHTS.preventive,
        points: item.scoreComponents.preventive,
      },
    ]
  }

  function closeRankingInfoModal() {
    const modal = document.getElementById('ranking-info-modal')
    if (modal) {
      modal.hidden = true
    }
    document.body.classList.remove('modal-open')
    openRankingInfoIndex = -1
    window.requestAnimationFrame(() => rankingModalReturnFocus?.focus())
  }

  function openRankingInfoModal(index, returnFocus = rankingModalReturnFocus) {
    const item = currentRanking[index]
    const modal = document.getElementById('ranking-info-modal')

    if (!item || !modal) {
      return
    }

    openRankingInfoIndex = index
    rankingModalReturnFocus = returnFocus
    const details = buildRankingIndicatorDetails(item)
    const formula = details
      .map((detail) => `${formatRankingMetric(detail.note)}×${detail.weight}%`)
      .join(' + ')

    text('ranking-info-kicker', index === 0 ? 'Composição da liderança' : 'Composição da nota')
    text('ranking-info-title', item.name)
    text('ranking-info-subtitle', `#${index + 1} · ${item.id} · Meta mensal ${formatHours(item.targetHours)}`)
    text('ranking-info-score', `${formatRankingMetric(item.rankingScore)} pontos`)
    html(
      'ranking-info-table-body',
      details
        .map((detail) => `
          <tr>
            <td>${escapeHtml(detail.label)}</td>
            <td class="technician-ranking-info-comparison">
              <strong>${escapeHtml(detail.result)}</strong>
              <small>${escapeHtml(detail.reference)}</small>
            </td>
            <td>${escapeHtml(formatRankingMetric(detail.note))}</td>
            <td>${detail.weight}%</td>
            <td>${escapeHtml(formatRankingMetric(detail.note === null ? null : detail.points))}</td>
          </tr>
        `)
        .join(''),
    )
    text('ranking-info-formula', formula)
    text('ranking-info-formula-result', `= ${formatRankingMetric(item.rankingScore)} pontos`)
    html(
      'ranking-info-context',
      [
        ['Aderência mensal', formatRankingMetric(item.monthlyAdherence, '%')],
        ['Meta mensal', formatHours(item.targetHours)],
        [selectedMonth === getLocalDateKey().slice(0, 7) ? 'Meta até ontem' : 'Meta do período', formatHours(item.expectedTargetHours)],
        ['Média por OS', formatHours(item.averageOrderHours)],
        ['Preventiva', formatHours(item.preventiveHours)],
        ['Corretiva', formatHours(item.correctiveHours)],
      ]
        .map(([label, value]) => `<span>${escapeHtml(label)}<b>${escapeHtml(value)}</b></span>`)
        .join(''),
    )
    text('ranking-info-position', `${index + 1} de ${currentRanking.length}`)
    modal.hidden = false
    document.body.classList.add('modal-open')
    window.requestAnimationFrame(() => document.getElementById('ranking-info-close')?.focus())
  }

  function navigateRankingInfo(direction) {
    if (!currentRanking.length || openRankingInfoIndex < 0) {
      return
    }

    const nextIndex = (
      openRankingInfoIndex + direction + currentRanking.length
    ) % currentRanking.length
    openRankingInfoModal(nextIndex)
  }

  function renderRanking(context) {
    currentRanking = context.ranking
    const isCurrentCompetence = selectedMonth === getLocalDateKey().slice(0, 7)

    if (!currentRanking.length) {
      html('technician-ranking-highlights', '')
      html(
        'technician-ranking-list',
        '<div class="empty-table-state compact-empty-state"><strong>Sem técnicos com meta programada para ranquear.</strong></div>',
      )
      return
    }

    const hoursLeader = [...currentRanking]
      .sort((left, right) => right.executedHours - left.executedHours || right.orderCount - left.orderCount)[0]
    const adherenceLeader = [...currentRanking]
      .sort((left, right) => (right.adherence || 0) - (left.adherence || 0) || right.executedHours - left.executedHours)[0]
    const ordersLeader = [...currentRanking]
      .sort((left, right) => right.orderCount - left.orderCount || right.executedHours - left.executedHours)[0]
    const highlights = [
      ['Maior volume', hoursLeader.name, formatHours(hoursLeader.executedHours)],
      [isCurrentCompetence ? 'Melhor ritmo até ontem' : 'Melhor aderência mensal', adherenceLeader.name, formatRankingMetric(adherenceLeader.adherence, '%')],
      ['Mais OS atendidas', ordersLeader.name, `${ordersLeader.orderCount} OS`],
    ]

    html(
      'technician-ranking-highlights',
      highlights
        .map(([label, name, value]) => `
          <article>
            <span>${escapeHtml(label)}</span>
            <strong>${escapeHtml(name)}</strong>
            <b>${escapeHtml(value)}</b>
          </article>
        `)
        .join(''),
    )

    html(
      'technician-ranking-list',
      currentRanking
        .map((item, index) => {
          const positionLabel = index === 0
            ? 'Destaque geral do mês'
            : index === 1
              ? 'Vice-líder'
              : index === 2
                ? 'Top 3'
                : 'Em disputa'
          const statusGif = WORK_RHYTHM_STATUS_GIFS[item.statusGifKey]
          return `
            <article class="technician-ranking-card technician-ranking-${escapeHtml(item.tone)} technician-ranking-place-${index + 1}${index === 0 ? ' technician-ranking-leader' : ''}">
              <div class="technician-ranking-visual">
                <div class="technician-ranking-rank">#${index + 1}</div>
                ${statusGif ? `<img src="${escapeHtml(statusGif)}" alt="" draggable="false">` : ''}
              </div>
              <div class="technician-ranking-main">
                <div class="technician-ranking-head">
                  <div class="technician-ranking-identity">
                    <small>${escapeHtml(positionLabel)}</small>
                    <strong>${escapeHtml(item.name)}</strong>
                    <span>${escapeHtml(item.id)} · Meta mensal ${escapeHtml(formatHours(item.targetHours))}</span>
                  </div>
                  <div class="technician-ranking-score">
                    <div class="technician-ranking-score-label">
                      <small>Nota geral</small>
                      <button
                        type="button"
                        class="technician-ranking-info"
                        data-ranking-index="${index}"
                        aria-label="Entenda a composição da nota de ${escapeHtml(item.name)}"
                        aria-haspopup="dialog"
                      >i</button>
                    </div>
                    <strong>${escapeHtml(formatRankingMetric(item.rankingScore))} pts</strong>
                    <span class="technician-status-pill">${escapeHtml(item.status)}</span>
                  </div>
                </div>
                <div class="technician-ranking-track" aria-hidden="true">
                  <div class="technician-ranking-fill" style="width:${Math.min(Math.max(item.rankingScore, 0), 100)}%"></div>
                </div>
                <div class="technician-ranking-meta">
                  <span>Executado <b>${escapeHtml(formatRankingMetric(item.executedHours, ' h'))}</b></span>
                  <span>Aderência mensal <b>${escapeHtml(formatRankingMetric(item.monthlyAdherence, '%'))}</b></span>
                  <span>OS atendidas <b>${item.orderCount}</b></span>
                  <span>${isCurrentCompetence ? 'Ritmo até ontem' : 'Ritmo do período'} <b>${escapeHtml(formatRankingMetric(item.adherence, '%'))}</b></span>
                </div>
              </div>
            </article>
          `
        })
        .join(''),
    )

    document.querySelectorAll('.technician-ranking-info').forEach((button) => {
      button.addEventListener('click', () => {
        openRankingInfoModal(Number(button.dataset.rankingIndex), button)
      })
    })
  }

  function renderAdminSummary(context) {
    const adminSummaryGrid = document.getElementById('admin-summary-grid')
    if (adminSummaryGrid) {
      adminSummaryGrid.hidden = mode !== 'general'
    }

    if (mode !== 'general') {
      return
    }

    const criticalAssetsPanel = document.getElementById('critical-assets-panel')
    if (criticalAssetsPanel && isPrivacySafeSnapshot) {
      criticalAssetsPanel.hidden = true
    }

    const hoursLeadIsPreventive = context.preventiveHoursShare >= context.correctiveHoursShare
    text('summary-active-techs', String(context.activeTechnicians))
    text('summary-tech-average', formatHours(context.activeTechnicianList.length ? context.executedHours / context.activeTechnicianList.length : 0))
    text('summary-target-per-tech', formatHours(context.activeTechnicianList.length ? context.targetHours / context.activeTechnicianList.length : 0))
    text('summary-peak-hours', context.peakDay ? formatHours(context.peakDay.value) : formatHours(0))
    text('summary-peak-day', context.peakDay ? context.peakDay.shortDate : 'Sem carga relevante')
    text('summary-preventive-hours', formatHours(context.preventiveHours))
    text('summary-corrective-hours', formatHours(context.correctiveHours))
    text('summary-preventive-orders', `${context.preventiveOrders.length} ordens no mes`)
    text('summary-corrective-orders', `${context.correctiveOrders.length} ordens no mes`)

    html(
      'operational-alerts-grid',
      buildOperationalAlerts(context)
        .map((alert) => `
          <article class="operational-alert-card operational-alert-${escapeHtml(alert.tone)}">
            <span class="operational-alert-status" aria-hidden="true"></span>
            <div class="operational-alert-copy">
              <span>${escapeHtml(alert.title)}</span>
              <strong>${escapeHtml(alert.value)}</strong>
              <p>${escapeHtml(alert.description)}</p>
            </div>
          </article>
        `)
        .join(''),
    )

    renderRanking(context)

    const preventiveSummary = document.getElementById('mix-summary-preventive')
    const correctiveSummary = document.getElementById('mix-summary-corrective')
    preventiveSummary?.classList.toggle('dominant', hoursLeadIsPreventive)
    correctiveSummary?.classList.toggle('dominant', !hoursLeadIsPreventive)
    text('mix-summary-preventive-hours', formatHours(context.preventiveHours))
    text('mix-summary-preventive-meta', `${formatPercent(context.preventiveHoursShare)} da carga - ${context.preventiveOrders.length} OS`)
    text('mix-summary-corrective-hours', formatHours(context.correctiveHours))
    text('mix-summary-corrective-meta', `${formatPercent(context.correctiveHoursShare)} da carga - ${context.correctiveOrders.length} OS`)
    setWidth('mix-overview-preventive', context.preventiveHoursShare)
    setWidth('mix-overview-corrective', context.correctiveHoursShare)
    text('mix-overview-preventive-label', `Preventiva ${formatPercent(context.preventiveHoursShare)}`)
    text('mix-overview-corrective-label', `Corretiva ${formatPercent(context.correctiveHoursShare)}`)

    html(
      'technician-mix-list',
      context.technicianMixRows.length
        ? context.technicianMixRows
          .map((item) => `
            <article class="technician-mix-row technician-mix-${escapeHtml(item.tone)}">
              <div class="technician-mix-head">
                <div>
                  <strong>${escapeHtml(item.name)}</strong>
                  <span>${escapeHtml(item.id)} - ${item.preventiveCount + item.correctiveCount} OS no periodo</span>
                </div>
                <b>${escapeHtml(formatHours(item.totalHours))}</b>
              </div>
              <div class="technician-mix-track" aria-label="Mix de ${escapeHtml(item.name)}">
                <div class="technician-mix-fill preventive" style="width:${item.preventiveShare}%"></div>
                <div class="technician-mix-fill corrective" style="width:${item.correctiveShare}%"></div>
              </div>
              <div class="technician-mix-meta">
                <span class="preventive">Preventiva <b>${escapeHtml(formatHours(item.preventiveHours))}</b><small>${escapeHtml(formatPercent(item.preventiveShare))}</small></span>
                <span class="corrective">Corretiva <b>${escapeHtml(formatHours(item.correctiveHours))}</b><small>${escapeHtml(formatPercent(item.correctiveShare))}</small></span>
              </div>
            </article>
          `)
          .join('')
        : '<div class="empty-table-state compact-empty-state"><strong>Sem horas executadas para montar o mix por tecnico.</strong></div>',
    )

    html(
      'critical-assets-pareto',
      context.criticalAssets.length
        ? context.criticalAssets
          .map((asset, index) => `
            <article class="critical-asset-row${index < 3 ? ' top-critical' : ''}">
              <div class="critical-asset-rank">#${index + 1}</div>
              <div class="critical-asset-main">
                <div class="critical-asset-heading">
                  <div>
                    <strong>${escapeHtml(asset.tag)}</strong>
                    <span>${escapeHtml(asset.equipment)}</span>
                  </div>
                  <b>${escapeHtml(formatHours(asset.executedHours))}</b>
                </div>
                <div class="critical-asset-track" aria-hidden="true">
                  <div class="critical-asset-fill" style="width:${Math.max(asset.concentration, 4)}%"></div>
                </div>
                <div class="critical-asset-meta">
                  <span>${asset.orderCount} OS corretivas</span>
                  <span>${escapeHtml(formatPercent(asset.concentration))} da carga corretiva</span>
                  <span>${escapeHtml(asset.sector)}</span>
                </div>
              </div>
            </article>
          `)
          .join('')
        : '<div class="empty-table-state compact-empty-state"><strong>Sem ativos criticos no periodo.</strong><span>Nao ha OS corretivas no recorte atual.</span></div>',
    )
  }

  function renderPlanningAlert(context) {
    const alert = document.getElementById('planning-alert')
    if (!alert) {
      return
    }

    const shouldShow = context.effectiveMonthlyTarget <= 0
    alert.hidden = !shouldShow
    if (shouldShow) {
      text('planning-alert-copy', `A carga mensal de ${formatMonth(selectedMonth)} esta sem meta publicada no snapshot.`)
    }
  }

  function renderHistory(context) {
    const historyPanel = document.getElementById('history-panel')
    if (isPrivacySafeSnapshot) {
      if (historyPanel) {
        historyPanel.hidden = true
      }
      return
    }

    const selectedTechnician = getTechnicianById(selectedTechnicianId)
    const tbody = document.getElementById('history-body')
    if (!tbody) {
      return
    }

    text(
      'history-title',
      mode === 'general'
        ? 'Leitura historica da competencia'
        : `Historico de ${selectedTechnician?.name || 'tecnico selecionado'}`,
    )
    text(
      'history-helper',
      mode === 'general'
        ? 'Consulte relatorios e movimentacoes em modo somente leitura, com visao consolidada da equipe.'
        : 'Consulte o historico do tecnico filtrado, sem qualquer permissao de edicao.',
    )

    if (!context.visibleOrders.length) {
      tbody.innerHTML = `
        <tr>
          <td colspan="11">
            <div class="empty-state">Sem ordens para este filtro.</div>
          </td>
        </tr>
      `
      return
    }

    tbody.innerHTML = context.visibleOrders
      .map((order) => {
        const isPreventive = order.orderType === 'Preventiva'
        return `
          <tr>
            <td class="mono">${escapeHtml(order.orderNumber || '-')}</td>
            <td><span class="type-badge ${isPreventive ? 'is-preventive' : 'is-corrective'}">${escapeHtml(order.orderType || 'Corretiva')}</span></td>
            <td>${escapeHtml(order.sector || '-')}</td>
            <td>${escapeHtml(order.equipment || '-')}</td>
            <td class="mono">${escapeHtml(order.tag || '-')}</td>
            <td><strong>${escapeHtml(getTechnicianName(order.technicianId))}</strong><small class="mono">${escapeHtml(order.technicianId || '-')}</small></td>
            <td>${escapeHtml(order.activity || '-')}</td>
            <td class="mono">${escapeHtml(formatDateTime(order.date, order.startTime))}</td>
            <td class="mono">${escapeHtml(formatDateTime(order.date, order.endTime))}</td>
            <td class="mono">${escapeHtml(formatHours(order.executedHours))}</td>
            <td><button type="button" class="report-trigger" data-order-id="${escapeHtml(order.id || order.orderNumber)}" aria-label="Abrir relatorio da OS ${escapeHtml(order.orderNumber || '-')}">+</button></td>
          </tr>
        `
      })
      .join('')

    Array.from(tbody.querySelectorAll('.report-trigger')).forEach((button) => {
      button.addEventListener('click', () => {
        const order = context.visibleOrders.find((item) => String(item.id || item.orderNumber) === button.dataset.orderId)
        if (order) {
          openReportModal(order)
        }
      })
    })
  }

  function renderPrintHeader(context) {
    const monthLabel = formatMonth(selectedMonth).toUpperCase()
    text('print-report-title', `INDICADORES MANUTENCAO ${monthLabel}`)
    text(
      'print-report-subtitle',
      mode === 'general'
        ? `Visao geral da equipe com ${context.visibleOrders.length} ordens e ${formatHours(context.executedHours)} executadas.`
        : `Leitura de ${getTechnicianName(selectedTechnicianId)} com ${context.visibleOrders.length} ordens e ${formatHours(context.executedHours)} executadas.`,
    )
  }

  function render() {
    renderSelects()

    const showTechnicianField = mode === 'technician'
    if (technicianField) {
      technicianField.hidden = !showTechnicianField
      technicianField.style.display = showTechnicianField ? 'grid' : 'none'
    }

    modeButtons.forEach((button) => {
      button.classList.toggle('is-active', button.dataset.mode === mode)
    })

    const context = buildContext()
    renderPlanningAlert(context)
    renderHero(context)
    renderMetricCards(context)
    renderProgress(context)
    renderDailyChart(context)
    renderWorkRhythm(context)
    renderAdminSummary(context)
    renderHistory(context)
    renderPrintHeader(context)
  }

  monthSelect?.addEventListener('change', (event) => {
    selectedMonth = event.target.value
    render()
  })

  technicianSelect?.addEventListener('change', (event) => {
    selectedTechnicianId = event.target.value
    render()
  })

  modeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      mode = button.dataset.mode
      render()
    })
  })

  document.getElementById('print-pdf-button')?.addEventListener('click', () => {
    window.print()
  })

  document.getElementById('report-modal')?.addEventListener('click', (event) => {
    if (event.target.id === 'report-modal') {
      closeReportModal()
    }
  })

  document.getElementById('report-modal-close')?.addEventListener('click', closeReportModal)

  document.getElementById('ranking-info-modal')?.addEventListener('click', (event) => {
    if (event.target.id === 'ranking-info-modal') {
      closeRankingInfoModal()
    }
  })

  document.getElementById('ranking-info-close')?.addEventListener('click', closeRankingInfoModal)
  document.getElementById('ranking-info-previous')?.addEventListener('click', () => navigateRankingInfo(-1))
  document.getElementById('ranking-info-next')?.addEventListener('click', () => navigateRankingInfo(1))

  document.getElementById('work-rhythm-help-button')?.addEventListener('click', (event) => {
    const help = document.getElementById('work-rhythm-help')
    const isOpen = event.currentTarget.getAttribute('aria-expanded') === 'true'
    event.currentTarget.setAttribute('aria-expanded', String(!isOpen))
    if (help) {
      help.hidden = isOpen
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeReportModal()
      closeRankingInfoModal()
    } else if (!document.getElementById('ranking-info-modal')?.hidden && event.key === 'ArrowLeft') {
      navigateRankingInfo(-1)
    } else if (!document.getElementById('ranking-info-modal')?.hidden && event.key === 'ArrowRight') {
      navigateRankingInfo(1)
    }
  })

  renderSelects()
  render()
})()
