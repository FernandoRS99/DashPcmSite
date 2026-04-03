(function () {
  const data = window.VIEWER_DEMO_DATA
  const monthSelect = document.getElementById('month-select')
  const technicianSelect = document.getElementById('technician-select')
  const modeButtons = Array.from(document.querySelectorAll('.segment'))
  const technicianField = document.getElementById('technician-filter-field')

  const monthFormatter = new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' })
  const shortDateFormatter = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit' })
  const numberFormatter = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })

  const monthKeys = Object.keys(data.months).sort().reverse()
  let selectedMonth = monthKeys[0]
  let selectedTechnicianId = data.technicians[0]?.id || ''
  let mode = 'general'

  function formatHours(value) {
    return `${numberFormatter.format(value || 0)} h`
  }

  function formatPercent(value) {
    return `${numberFormatter.format(value || 0)}%`
  }

  function formatDateTime(date, time) {
    const shortDate = shortDateFormatter.format(new Date(`${date}T00:00:00`))
    return `${shortDate} ${time}`
  }

  function sum(list, field) {
    return list.reduce((acc, item) => acc + Number(item[field] || 0), 0)
  }

  function getMonthData(monthKey) {
    return data.months[monthKey] || { monthlyTarget: 0, orders: [] }
  }

  function getTechnicianById(id) {
    return data.technicians.find((technician) => technician.id === id) || null
  }

  function buildSeries(orders) {
    const grouped = orders.reduce((acc, order) => {
      acc[order.date] = (acc[order.date] || 0) + Number(order.executedHours || 0)
      return acc
    }, {})

    return Object.entries(grouped)
      .sort(([left], [right]) => left.localeCompare(right))
      .map(([date, value]) => ({
        date,
        value,
        shortDate: shortDateFormatter.format(new Date(`${date}T00:00:00`)),
      }))
  }

  function buildRanking(orders) {
    return data.technicians
      .map((technician) => {
        const technicianOrders = orders.filter((order) => order.technicianId === technician.id)
        return {
          ...technician,
          orders: technicianOrders.length,
          executedHours: sum(technicianOrders, 'executedHours'),
        }
      })
      .sort((left, right) => right.executedHours - left.executedHours)
  }

  function buildVisibleOrders() {
    const orders = getMonthData(selectedMonth).orders
    if (mode === 'technician' && selectedTechnicianId) {
      return orders.filter((order) => order.technicianId === selectedTechnicianId)
    }

    return orders
  }

  function renderSelects() {
    monthSelect.innerHTML = monthKeys
      .map((monthKey) => `<option value="${monthKey}">${monthFormatter.format(new Date(`${monthKey}-01T00:00:00`))}</option>`)
      .join('')
    monthSelect.value = selectedMonth

    technicianSelect.innerHTML = data.technicians
      .map((technician) => `<option value="${technician.id}">${technician.id} - ${technician.name}</option>`)
      .join('')
    technicianSelect.value = selectedTechnicianId
  }

  function renderMetrics() {
    const monthData = getMonthData(selectedMonth)
    const visibleOrders = buildVisibleOrders()
    const ranking = buildRanking(monthData.orders)
    const executedHours = sum(visibleOrders, 'executedHours')
    const technicianBase = mode === 'general' ? data.technicians.length : 1
    const targetHours = monthData.monthlyTarget * technicianBase
    const adherence = targetHours > 0 ? (executedHours / targetHours) * 100 : 0
    const balance = Math.max(targetHours - executedHours, 0)
    const ticketAverage = visibleOrders.length ? executedHours / visibleOrders.length : 0
    const preventiveHours = sum(visibleOrders.filter((order) => order.orderType === 'Preventiva'), 'executedHours')
    const correctiveHours = sum(visibleOrders.filter((order) => order.orderType !== 'Preventiva'), 'executedHours')
    const activeTechnicians = ranking.filter((technician) => technician.executedHours > 0).length
    const selectedTechnician = getTechnicianById(selectedTechnicianId)

    document.getElementById('selected-month-label').textContent = monthFormatter.format(
      new Date(`${selectedMonth}-01T00:00:00`),
    )

    document.getElementById('target-label').textContent =
      mode === 'general' ? 'Meta consolidada da equipe' : 'Meta individual'
    document.getElementById('metric-target').textContent = formatHours(targetHours)
    document.getElementById('metric-target-helper').textContent =
      mode === 'general'
        ? `Base demonstrativa: ${formatHours(monthData.monthlyTarget)} por técnico em ${data.technicians.length} técnicos.`
        : `Base demonstrativa de ${formatHours(monthData.monthlyTarget)} para ${selectedTechnician?.name || 'o técnico selecionado'}.`
    document.getElementById('metric-executed').textContent = formatHours(executedHours)
    document.getElementById('metric-adherence').textContent = formatPercent(adherence)
    document.getElementById('metric-adherence-helper').textContent =
      adherence >= 100 ? 'Meta alcançada no cenário demonstrativo.' : 'A leitura compara executado versus meta do período.'
    document.getElementById('metric-balance').textContent = formatHours(balance)
    document.getElementById('metric-balance-helper').textContent =
      balance > 0 ? 'Horas restantes para o fechamento da meta.' : 'Competência coberta pela produção registrada.'

    document.getElementById('progress-title').textContent =
      mode === 'general' ? 'Meta consolidada, realizado e saldo' : 'Meta individual, realizado e saldo'
    document.getElementById('ticket-average').textContent = `${formatHours(ticketAverage)} ticket médio`
    document.getElementById('progress-target-label').textContent =
      mode === 'general' ? 'Meta consolidada' : 'Meta do técnico'
    document.getElementById('progress-target-value').textContent = formatHours(targetHours)
    document.getElementById('progress-executed-value').textContent = formatHours(executedHours)
    document.getElementById('progress-balance-value').textContent = formatHours(balance)
    document.getElementById('mini-orders').textContent = String(visibleOrders.length)
    document.getElementById('mini-techs').textContent = String(mode === 'general' ? activeTechnicians : 1)
    document.getElementById('mini-preventive').textContent = formatHours(preventiveHours)
    document.getElementById('mini-corrective').textContent = formatHours(correctiveHours)

    const maxBar = Math.max(targetHours, executedHours, balance, 1)
    document.getElementById('bar-target').style.width = `${(targetHours / maxBar) * 100}%`
    document.getElementById('bar-executed').style.width = `${(executedHours / maxBar) * 100}%`
    document.getElementById('bar-balance').style.width = `${(balance / maxBar) * 100}%`
  }

  function renderDailyChart() {
    const chart = document.getElementById('daily-chart')
    const series = buildSeries(buildVisibleOrders())

    if (!series.length) {
      chart.innerHTML = '<div class="empty-state">Sem apontamentos para esta combinação de filtros.</div>'
      return
    }

    const maxValue = Math.max(...series.map((item) => item.value), 1)
    chart.innerHTML = series
      .map((item) => {
        const height = Math.max((item.value / maxValue) * 100, 8)
        return `
          <article class="daily-bar">
            <strong>${formatHours(item.value)}</strong>
            <div class="daily-bar-rail">
              <div class="daily-bar-fill" style="height:${height}%"></div>
            </div>
            <span>${item.shortDate}</span>
          </article>
        `
      })
      .join('')
  }

  function renderRanking() {
    const rankingRoot = document.getElementById('ranking-list')
    const ranking = buildRanking(buildVisibleOrders())
    const maxValue = Math.max(...ranking.map((item) => item.executedHours), 1)

    rankingRoot.innerHTML = ranking
      .map((technician) => `
        <article class="ranking-item">
          <div class="ranking-label">
            <strong>${technician.name}</strong>
            <span>${technician.id}</span>
          </div>
          <div class="ranking-track">
            <span style="width:${(technician.executedHours / maxValue) * 100}%"></span>
          </div>
          <div class="ranking-value">${formatHours(technician.executedHours)}</div>
        </article>
      `)
      .join('')
  }

  function renderHistory() {
    const tbody = document.getElementById('history-body')
    const visibleOrders = buildVisibleOrders()
    const selectedTechnician = getTechnicianById(selectedTechnicianId)

    document.getElementById('history-title').textContent =
      mode === 'general'
        ? 'Leitura histórica da competência'
        : `Histórico de ${selectedTechnician?.name || 'técnico selecionado'}`

    document.getElementById('history-helper').textContent =
      mode === 'general'
        ? 'Consulte relatórios e movimentações em modo somente leitura, com visão consolidada da equipe.'
        : 'Consulte o histórico do técnico filtrado, sem qualquer permissão de edição.'

    if (!visibleOrders.length) {
      tbody.innerHTML = `
        <tr>
          <td colspan="11">
            <div class="empty-state">Sem ordens demonstrativas para este filtro.</div>
          </td>
        </tr>
      `
      return
    }

    tbody.innerHTML = visibleOrders
      .map((order) => {
        const technician = getTechnicianById(order.technicianId)
        const isPreventive = order.orderType === 'Preventiva'
        return `
          <tr>
            <td class="mono">${order.orderNumber}</td>
            <td>
              <span class="type-badge ${isPreventive ? 'is-preventive' : 'is-corrective'}">${order.orderType}</span>
            </td>
            <td>${order.sector}</td>
            <td>${order.equipment}</td>
            <td class="mono">${order.tag}</td>
            <td><strong>${technician?.name || order.technicianId}</strong><small class="mono">${order.technicianId}</small></td>
            <td>${order.activity}</td>
            <td class="mono">${formatDateTime(order.date, order.startTime)}</td>
            <td class="mono">${formatDateTime(order.date, order.endTime)}</td>
            <td class="mono">${formatHours(order.executedHours)}</td>
            <td>${order.observation || 'Sem relatório complementar.'}</td>
          </tr>
        `
      })
      .join('')
  }

  function render() {
    technicianField.hidden = mode !== 'technician'

    modeButtons.forEach((button) => {
      button.classList.toggle('is-active', button.dataset.mode === mode)
    })

    renderMetrics()
    renderDailyChart()
    renderRanking()
    renderHistory()
  }

  monthSelect.addEventListener('change', (event) => {
    selectedMonth = event.target.value
    render()
  })

  technicianSelect.addEventListener('change', (event) => {
    selectedTechnicianId = event.target.value
    render()
  })

  modeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      mode = button.dataset.mode
      render()
    })
  })

  renderSelects()
  render()
})()
