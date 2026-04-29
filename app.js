(function () {
  const data = window.VIEWER_DEMO_DATA || { technicians: [], assets: [], months: {} }
  const ADHERENCE_EXCELLENT_MIN = 90
  const ADHERENCE_ATTENTION_MIN = 75
  const PREVENTIVE_TARGET = 70
  const THEME = 'industrial'

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

  function getMonthData(monthKey) {
    return data.months?.[monthKey] || { monthlyTarget: 0, orders: [] }
  }

  function getTechnicianById(id) {
    return data.technicians.find((technician) => technician.id === id) || null
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
    if (mode === 'technician' && selectedTechnicianId) {
      return orders.filter((order) => order.technicianId === selectedTechnicianId)
    }
    return orders
  }

  function buildSeries(orders) {
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

  function buildRanking(orders, targetHours) {
    return data.technicians
      .map((technician) => {
        const technicianOrders = orders.filter((order) => order.technicianId === technician.id)
        const executedHours = sum(technicianOrders, 'executedHours')
        const adherence = targetHours > 0 ? (executedHours / targetHours) * 100 : 0
        const balance = Math.max(targetHours - executedHours, 0)
        const tone = adherence >= ADHERENCE_EXCELLENT_MIN ? 'good' : adherence >= ADHERENCE_ATTENTION_MIN ? 'attention' : 'critical'
        const status = adherence >= ADHERENCE_EXCELLENT_MIN ? 'Excelente' : adherence >= ADHERENCE_ATTENTION_MIN ? 'Atencao' : 'Critico'

        return {
          ...technician,
          orderCount: technicianOrders.length,
          executedHours,
          targetHours,
          adherence,
          balance,
          tone,
          status,
        }
      })
      .sort((left, right) => right.executedHours - left.executedHours || right.orderCount - left.orderCount)
  }

  function buildTechnicianMixRows(orders) {
    return data.technicians
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
    if (value >= ADHERENCE_EXCELLENT_MIN) {
      return 'Excelente'
    }
    if (value >= ADHERENCE_ATTENTION_MIN) {
      return 'Atencao'
    }
    return 'Critico'
  }

  function buildContext() {
    const monthData = getMonthData(selectedMonth)
    const allMonthOrders = Array.isArray(monthData.orders) ? monthData.orders : []
    const visibleOrders = buildVisibleOrders(monthData)
    const effectiveMonthlyTarget = Number(monthData.monthlyTarget || 0)
    const technicianBase = mode === 'general' ? data.technicians.length : 1
    const targetHours = effectiveMonthlyTarget * technicianBase
    const executedHours = sum(visibleOrders, 'executedHours')
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
    const ranking = buildRanking(mode === 'general' ? allMonthOrders : visibleOrders, effectiveMonthlyTarget)
    const visibleRanking = buildRanking(visibleOrders, effectiveMonthlyTarget)
    const activeTechnicians = ranking.filter((technician) => technician.executedHours > 0).length
    const visibleActiveTechnicians = visibleRanking.filter((technician) => technician.executedHours > 0).length
    const series = buildSeries(visibleOrders)
    const peakDay = [...series].sort((left, right) => right.value - left.value)[0] || null
    const topAssets = buildTopAssets(visibleOrders)
    const topSectors = buildTopSectors(visibleOrders)
    const criticalAssets = buildCriticalAssets(visibleOrders)
    const technicianMixRows = buildTechnicianMixRows(mode === 'general' ? allMonthOrders : visibleOrders)
    const adherenceTone = adherence >= ADHERENCE_EXCELLENT_MIN ? 'good' : adherence >= ADHERENCE_ATTENTION_MIN ? 'attention' : 'critical'
    const backlogTone = backlog <= 0 ? 'good' : targetHours > 0 && backlog / targetHours <= 0.15 ? 'attention' : 'critical'
    const totalOrdersTone = visibleOrders.length > 0 ? 'good' : 'critical'
    const mixTone = preventiveHoursShare >= PREVENTIVE_TARGET ? 'good' : preventiveHoursShare >= 50 ? 'attention' : 'critical'
    const activeTechniciansTone = visibleActiveTechnicians === 0
      ? 'critical'
      : visibleActiveTechnicians >= (mode === 'general' ? data.technicians.length : 1)
        ? 'good'
        : 'attention'

    return {
      monthData,
      allMonthOrders,
      visibleOrders,
      effectiveMonthlyTarget,
      technicianBase,
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
      activeTechnicians,
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
      technicianSelect.innerHTML = data.technicians
        .map((technician) => `<option value="${escapeHtml(technician.id)}">${escapeHtml(`${technician.id} - ${technician.name}`)}</option>`)
        .join('')
      technicianSelect.value = selectedTechnicianId
    }
  }

  function renderHero(context) {
    const selectedTechnician = getTechnicianById(selectedTechnicianId)
    const visibleTechnicians = mode === 'general' ? data.technicians.length : (selectedTechnician ? 1 : 0)

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
        ? `${context.activeTechnicians}/${data.technicians.length || 0}`
        : `${context.visibleActiveTechnicians ? 1 : 0}/1`,
    )
    text('metric-active-techs-meta', mode === 'general' ? 'Equipe com apontamento' : 'Recorte individual')
  }

  function renderProgress(context) {
    const metaProgress = context.targetHours > 0 ? Math.min((context.executedHours / context.targetHours) * 100, 120) : 0
    const metaProgressWidth = Math.min(metaProgress, 100)
    const excellentTargetHours = context.targetHours * (ADHERENCE_EXCELLENT_MIN / 100)
    const remainingToTarget = Math.max(excellentTargetHours - context.executedHours, 0)
    const progressCard = document.getElementById('target-progress-card')
    const progressFill = document.getElementById('target-progress-fill')

    if (progressCard) {
      progressCard.className = `pcm-target-progress pcm-target-progress-${context.adherenceTone}`
    }
    if (progressFill) {
      progressFill.className = `pcm-bullet-fill pcm-bullet-fill-${context.adherenceTone}`
      progressFill.style.width = `${metaProgressWidth}%`
    }

    text('progress-kicker', mode === 'general' ? 'Cockpit PCM' : 'Painel operacional')
    text('progress-title', mode === 'general' ? 'Meta consolidada, realizado e saldo' : 'Meta individual, realizado e saldo')
    text('ticket-average', `${formatHours(context.averageOrderHours)} ticket medio`)
    text('target-progress-percent', formatPercent(metaProgress))
    text(
      'target-progress-copy',
      remainingToTarget > 0
        ? `Faltam ${formatHours(remainingToTarget)} para atingir 90% da meta.`
        : 'Meta minima de 90% atingida no recorte atual.',
    )
    text('target-scale-executed', `Executado ${formatHours(context.executedHours)}`)
    text('target-scale-minimum', `90% ${formatHours(excellentTargetHours)}`)
    text('mini-orders', String(context.visibleOrders.length))
    text('mini-adherence', formatPercent(context.adherence))
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

    return [
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
  }

  function renderAdminSummary(context) {
    const adminSummaryGrid = document.getElementById('admin-summary-grid')
    if (adminSummaryGrid) {
      adminSummaryGrid.hidden = mode !== 'general'
    }

    if (mode !== 'general') {
      return
    }

    const hoursLeadIsPreventive = context.preventiveHoursShare >= context.correctiveHoursShare
    text('summary-active-techs', String(context.activeTechnicians))
    text('summary-tech-average', formatHours(data.technicians.length ? context.executedHours / data.technicians.length : 0))
    text('summary-target-per-tech', formatHours(context.effectiveMonthlyTarget))
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

    const maxRanking = Math.max(...context.ranking.map((technician) => technician.executedHours), 1)
    html(
      'technician-ranking-list',
      context.ranking.length
        ? context.ranking
          .map((item, index) => {
            const progress = Math.min(Math.max(item.adherence, 0), 120)
            return `
              <article class="technician-ranking-card technician-ranking-${escapeHtml(item.tone)}">
                <div class="technician-ranking-rank">#${index + 1}</div>
                <div class="technician-ranking-main">
                  <div class="technician-ranking-head">
                    <div>
                      <strong>${escapeHtml(item.name)}</strong>
                      <span>${escapeHtml(item.id)} - ${item.orderCount} OS</span>
                    </div>
                    <span class="technician-status-pill">${escapeHtml(item.status)}</span>
                  </div>
                  <div class="technician-ranking-track" aria-hidden="true">
                    <div class="technician-ranking-fill" style="width:${Math.min(progress || (item.executedHours / maxRanking) * 100, 100)}%"></div>
                  </div>
                  <div class="technician-ranking-meta">
                    <span>Executado <b>${escapeHtml(formatHours(item.executedHours))}</b></span>
                    <span>Meta <b>${escapeHtml(formatHours(item.targetHours))}</b></span>
                    <span>Saldo <b>${escapeHtml(formatHours(item.balance))}</b></span>
                    <span>Aderencia <b>${escapeHtml(formatPercent(item.adherence))}</b></span>
                  </div>
                </div>
              </article>
            `
          })
          .join('')
        : '<div class="empty-table-state compact-empty-state"><strong>Sem tecnicos para ranquear.</strong></div>',
    )

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

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeReportModal()
    }
  })

  renderSelects()
  render()
})()
