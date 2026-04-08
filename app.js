(function () {
  const data = window.VIEWER_DEMO_DATA
  const monthSelect = document.getElementById('month-select')
  const technicianSelect = document.getElementById('technician-select')
  const modeButtons = Array.from(document.querySelectorAll('.segment'))
  const technicianField = document.getElementById('technician-filter-field')
  const heroCopy = document.querySelector('.hero-copy')
  const heroControls = document.querySelector('.hero-controls')
  const appShell = document.querySelector('.app-shell')
  const contentGrid = document.querySelector('.content-grid')

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

  function closeReportModal() {
    const modal = document.getElementById('report-modal')
    if (modal) {
      modal.hidden = true
    }
    document.body.classList.remove('modal-open')
  }

  function openReportModal(order, technicianName) {
    const modal = document.getElementById('report-modal')
    const meta = document.getElementById('report-modal-meta')
    const text = document.getElementById('report-modal-text')
    const title = document.getElementById('report-modal-title')
    if (!modal || !meta || !text || !title) {
      return
    }

    title.textContent = `OS ${order.orderNumber}`
    meta.innerHTML = `
      <span>${order.orderType}</span>
      <span>${order.tag}</span>
      <span>${technicianName}</span>
      <span>${formatDateTime(order.date, order.startTime)} - ${order.endTime}</span>
    `
    text.textContent = order.observation || 'Sem relatorio complementar.'
    modal.hidden = false
    document.body.classList.add('modal-open')
  }

  function ensurePublicChrome() {
    if (appShell && !document.getElementById('print-report-header')) {
      appShell.insertAdjacentHTML(
        'afterbegin',
        `
          <section class="print-report-header" id="print-report-header" aria-hidden="true">
            <p class="eyebrow">Relatorio executivo</p>
            <h1 id="print-report-title">INDICADORES MANUTENCAO MES ATUAL / ANO ATUAL</h1>
            <p id="print-report-subtitle">Leitura consolidada de indicadores e graficos do periodo selecionado.</p>
          </section>
        `,
      )
    }

    if (heroCopy && !heroCopy.querySelector('.hero-summary')) {
      const eyebrow = heroCopy.querySelector('.eyebrow')
      const heroText = heroCopy.querySelector('.hero-text')
      const heroBadges = heroCopy.querySelector('.hero-badges')
      const viewerNote = document.querySelector('.viewer-note')

      if (eyebrow) {
        eyebrow.textContent = 'Painel executivo'
      }
      if (heroText) {
        heroText.textContent = 'Indicadores consolidados do periodo atual para leitura rapida de manutencao.'
      }
      if (heroBadges) {
        heroBadges.hidden = true
      }
      if (viewerNote) {
        viewerNote.hidden = true
      }

      heroCopy.insertAdjacentHTML(
        'beforeend',
        `
          <div class="hero-summary">
            <article class="hero-summary-card">
              <span>Competencia</span>
              <strong id="hero-summary-month">-</strong>
              <small id="hero-summary-mode">Visao consolidada da equipe</small>
            </article>
            <article class="hero-summary-card">
              <span>Ordens visiveis</span>
              <strong id="hero-summary-orders">0</strong>
              <small id="hero-summary-hours">0,0 h executadas</small>
            </article>
            <article class="hero-summary-card">
              <span>Tecnicos no painel</span>
              <strong id="hero-summary-techs">0</strong>
              <small id="hero-summary-active">0 tecnicos ativos</small>
            </article>
          </div>
        `,
      )
    }

    if (contentGrid && !document.getElementById('mix-panel')) {
      const chartPanel = document.querySelector('.chart-panel')
      chartPanel?.insertAdjacentHTML(
        'afterend',
        `
          <section class="panel mix-panel" id="mix-panel">
            <div class="panel-heading">
              <div>
                <p class="eyebrow">Mix PCM</p>
                <h2>Preventiva x Corretiva</h2>
              </div>
            </div>

            <div class="mix-grid">
              <article class="mix-card mix-card-green">
                <span>Horas preventivas</span>
                <strong id="mix-preventive-hours">0,0 h</strong>
                <small id="mix-preventive-hours-share">0,0% da carga</small>
              </article>
              <article class="mix-card mix-card-gold">
                <span>Horas corretivas</span>
                <strong id="mix-corrective-hours">0,0 h</strong>
                <small id="mix-corrective-hours-share">0,0% da carga</small>
              </article>
              <article class="mix-card mix-card-green">
                <span>OS preventivas</span>
                <strong id="mix-preventive-count">0</strong>
                <small id="mix-preventive-count-share">0,0% das ordens</small>
              </article>
              <article class="mix-card mix-card-gold">
                <span>OS corretivas</span>
                <strong id="mix-corrective-count">0</strong>
                <small id="mix-corrective-count-share">0,0% das ordens</small>
              </article>
            </div>

            <div class="mix-bars">
              <div class="mix-bar-row">
                <div class="mix-bar-copy">
                  <span>Carga executada</span>
                  <strong id="mix-hours-share-label">0,0% / 0,0%</strong>
                </div>
                <div class="mix-bar-track">
                  <div class="mix-bar-fill mix-bar-fill-green" id="mix-hours-green"></div>
                  <div class="mix-bar-fill mix-bar-fill-gold" id="mix-hours-gold"></div>
                </div>
              </div>

              <div class="mix-bar-row">
                <div class="mix-bar-copy">
                  <span>Quantidade de OS</span>
                  <strong id="mix-orders-share-label">0,0% / 0,0%</strong>
                </div>
                <div class="mix-bar-track">
                  <div class="mix-bar-fill mix-bar-fill-green" id="mix-orders-green"></div>
                  <div class="mix-bar-fill mix-bar-fill-gold" id="mix-orders-gold"></div>
                </div>
              </div>
            </div>
          </section>
        `,
      )
    }

    if (heroControls && !document.getElementById('print-pdf-button')) {
      const heading = heroControls.querySelector('.hero-panel-heading')
      heading?.insertAdjacentHTML(
        'afterend',
        `
          <div class="hero-actions">
            <button type="button" class="print-button" id="print-pdf-button">Imprimir PDF</button>
            <span class="print-helper">Exporta apenas indicadores e graficos do painel atual.</span>
          </div>
        `,
      )
    }

    if (appShell && !document.getElementById('report-modal')) {
      appShell.insertAdjacentHTML(
        'beforeend',
        `
          <div class="report-modal-backdrop" id="report-modal" hidden>
            <div class="report-modal" role="dialog" aria-modal="true" aria-labelledby="report-modal-title">
              <div class="report-modal-header">
                <div>
                  <p class="eyebrow">Relatorio da OS</p>
                  <h2 id="report-modal-title">Leitura complementar</h2>
                </div>
                <button type="button" class="report-modal-close" id="report-modal-close" aria-label="Fechar">Fechar</button>
              </div>
              <div class="report-modal-body">
                <div class="report-meta" id="report-modal-meta"></div>
                <p id="report-modal-text"></p>
              </div>
            </div>
          </div>
        `,
      )
    }

    const printButton = document.getElementById('print-pdf-button')
    if (printButton && !printButton.dataset.bound) {
      printButton.dataset.bound = 'true'
      printButton.addEventListener('click', () => {
        window.print()
      })
    }

    const reportModal = document.getElementById('report-modal')
    if (reportModal && !reportModal.dataset.bound) {
      reportModal.dataset.bound = 'true'
      reportModal.addEventListener('click', (event) => {
        if (event.target === reportModal) {
          closeReportModal()
        }
      })
    }

    const reportClose = document.getElementById('report-modal-close')
    if (reportClose && !reportClose.dataset.bound) {
      reportClose.dataset.bound = 'true'
      reportClose.addEventListener('click', () => {
        closeReportModal()
      })
    }

    if (!document.body.dataset.reportEscapeBound) {
      document.body.dataset.reportEscapeBound = 'true'
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          closeReportModal()
        }
      })
    }
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
    const preventiveCount = visibleOrders.filter((order) => order.orderType === 'Preventiva').length
    const correctiveCount = visibleOrders.filter((order) => order.orderType !== 'Preventiva').length
    const activeTechnicians = ranking.filter((technician) => technician.executedHours > 0).length
    const selectedTechnician = getTechnicianById(selectedTechnicianId)
    const visibleTechnicians = mode === 'general' ? data.technicians.length : (selectedTechnician ? 1 : 0)

    document.getElementById('selected-month-label').textContent = monthFormatter.format(
      new Date(`${selectedMonth}-01T00:00:00`),
    )

    document.getElementById('target-label').textContent =
      mode === 'general' ? 'Meta consolidada da equipe' : 'Meta individual'
    document.getElementById('metric-target').textContent = formatHours(targetHours)
    document.getElementById('metric-target-helper').textContent =
      mode === 'general'
        ? `Base publicada: ${formatHours(monthData.monthlyTarget)} por tecnico em ${data.technicians.length} tecnicos.`
        : `Base publicada de ${formatHours(monthData.monthlyTarget)} para ${selectedTechnician?.name || 'o tecnico selecionado'}.`
    document.getElementById('metric-executed').textContent = formatHours(executedHours)
    document.getElementById('metric-adherence').textContent = formatPercent(adherence)
    document.getElementById('metric-adherence-helper').textContent =
      adherence >= 100 ? 'Meta alcancada no painel publicado.' : 'A leitura compara executado versus meta do periodo.'
    document.getElementById('metric-balance').textContent = formatHours(balance)
    document.getElementById('metric-balance-helper').textContent =
      balance > 0 ? 'Horas restantes para o fechamento da meta.' : 'Competencia coberta pela producao registrada.'

    document.getElementById('progress-title').textContent =
      mode === 'general' ? 'Meta consolidada, realizado e saldo' : 'Meta individual, realizado e saldo'
    document.getElementById('ticket-average').textContent = `${formatHours(ticketAverage)} ticket medio`
    document.getElementById('progress-target-label').textContent =
      mode === 'general' ? 'Meta consolidada' : 'Meta do tecnico'
    document.getElementById('progress-target-value').textContent = formatHours(targetHours)
    document.getElementById('progress-executed-value').textContent = formatHours(executedHours)
    document.getElementById('progress-balance-value').textContent = formatHours(balance)
    document.getElementById('mini-orders').textContent = String(visibleOrders.length)
    document.getElementById('mini-techs').textContent = String(mode === 'general' ? activeTechnicians : 1)
    document.getElementById('mini-preventive').textContent = formatHours(preventiveHours)
    document.getElementById('mini-corrective').textContent = formatHours(correctiveHours)

    const heroSummaryMonth = document.getElementById('hero-summary-month')
    const heroSummaryMode = document.getElementById('hero-summary-mode')
    const heroSummaryOrders = document.getElementById('hero-summary-orders')
    const heroSummaryHours = document.getElementById('hero-summary-hours')
    const heroSummaryTechs = document.getElementById('hero-summary-techs')
    const heroSummaryActive = document.getElementById('hero-summary-active')

    if (heroSummaryMonth) {
      heroSummaryMonth.textContent = monthFormatter.format(new Date(`${selectedMonth}-01T00:00:00`))
    }
    if (heroSummaryMode) {
      heroSummaryMode.textContent =
        mode === 'general'
          ? 'Visao consolidada da equipe'
          : `Recorte de ${selectedTechnician?.name || 'tecnico selecionado'}`
    }
    if (heroSummaryOrders) {
      heroSummaryOrders.textContent = String(visibleOrders.length)
    }
    if (heroSummaryHours) {
      heroSummaryHours.textContent = `${formatHours(executedHours)} executadas`
    }
    if (heroSummaryTechs) {
      heroSummaryTechs.textContent = String(visibleTechnicians)
    }
    if (heroSummaryActive) {
      heroSummaryActive.textContent =
        mode === 'general'
          ? `${activeTechnicians} tecnicos ativos`
          : `${selectedTechnician?.id || 'sem tecnico'}`
    }

    const printTitle = document.getElementById('print-report-title')
    const printSubtitle = document.getElementById('print-report-subtitle')
    if (printTitle) {
      const monthLabel = monthFormatter.format(new Date(`${selectedMonth}-01T00:00:00`)).toUpperCase('pt-BR')
      printTitle.textContent = `INDICADORES MANUTENCAO ${monthLabel}`
    }
    if (printSubtitle) {
      printSubtitle.textContent =
        mode === 'general'
          ? `Visao geral da equipe com ${visibleOrders.length} ordens e ${formatHours(executedHours)} executadas.`
          : `Leitura de ${selectedTechnician?.name || 'tecnico selecionado'} com ${visibleOrders.length} ordens e ${formatHours(executedHours)} executadas.`
    }

    const mixHoursTotal = preventiveHours + correctiveHours
    const mixOrderTotal = preventiveCount + correctiveCount
    const preventiveHoursShare = mixHoursTotal > 0 ? (preventiveHours / mixHoursTotal) * 100 : 0
    const correctiveHoursShare = mixHoursTotal > 0 ? (correctiveHours / mixHoursTotal) * 100 : 0
    const preventiveOrderShare = mixOrderTotal > 0 ? (preventiveCount / mixOrderTotal) * 100 : 0
    const correctiveOrderShare = mixOrderTotal > 0 ? (correctiveCount / mixOrderTotal) * 100 : 0

    const setText = (id, value) => {
      const element = document.getElementById(id)
      if (element) {
        element.textContent = value
      }
    }
    const setWidth = (id, value) => {
      const element = document.getElementById(id)
      if (element) {
        element.style.width = `${value}%`
      }
    }

    setText('mix-preventive-hours', formatHours(preventiveHours))
    setText('mix-corrective-hours', formatHours(correctiveHours))
    setText('mix-preventive-hours-share', `${formatPercent(preventiveHoursShare)} da carga`)
    setText('mix-corrective-hours-share', `${formatPercent(correctiveHoursShare)} da carga`)
    setText('mix-preventive-count', String(preventiveCount))
    setText('mix-corrective-count', String(correctiveCount))
    setText('mix-preventive-count-share', `${formatPercent(preventiveOrderShare)} das ordens`)
    setText('mix-corrective-count-share', `${formatPercent(correctiveOrderShare)} das ordens`)
    setText('mix-hours-share-label', `${formatPercent(preventiveHoursShare)} / ${formatPercent(correctiveHoursShare)}`)
    setText('mix-orders-share-label', `${formatPercent(preventiveOrderShare)} / ${formatPercent(correctiveOrderShare)}`)
    setWidth('mix-hours-green', preventiveHoursShare)
    setWidth('mix-hours-gold', correctiveHoursShare)
    setWidth('mix-orders-green', preventiveOrderShare)
    setWidth('mix-orders-gold', correctiveOrderShare)

    const maxBar = Math.max(targetHours, executedHours, balance, 1)
    document.getElementById('bar-target').style.width = `${(targetHours / maxBar) * 100}%`
    document.getElementById('bar-executed').style.width = `${(executedHours / maxBar) * 100}%`
    document.getElementById('bar-balance').style.width = `${(balance / maxBar) * 100}%`
  }

  function renderDailyChart() {
    const chart = document.getElementById('daily-chart')
    const series = buildSeries(buildVisibleOrders())

    if (!series.length) {
      chart.innerHTML = '<div class="empty-state">Sem apontamentos para esta combinacao de filtros.</div>'
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
        ? 'Leitura historica da competencia'
        : `Historico de ${selectedTechnician?.name || 'tecnico selecionado'}`

    document.getElementById('history-helper').textContent =
      mode === 'general'
        ? 'Consulte relatorios e movimentacoes em modo somente leitura, com visao consolidada da equipe.'
        : 'Consulte o historico do tecnico filtrado, sem qualquer permissao de edicao.'

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
            <td>
              <button
                type="button"
                class="report-trigger"
                data-order-id="${order.orderNumber}"
                aria-label="Abrir relatorio da OS ${order.orderNumber}"
              >
                +
              </button>
            </td>
          </tr>
        `
      })
      .join('')

    Array.from(tbody.querySelectorAll('.report-trigger')).forEach((button) => {
      if (button.dataset.bound) {
        return
      }
      button.dataset.bound = 'true'
      button.addEventListener('click', () => {
        const order = visibleOrders.find((item) => String(item.orderNumber) === button.dataset.orderId)
        const technician = getTechnicianById(order?.technicianId)
        if (order) {
          openReportModal(order, technician?.name || order.technicianId)
        }
      })
    })
  }

  function render() {
    const showTechnicianField = mode === 'technician'
    technicianField.hidden = !showTechnicianField
    technicianField.style.display = showTechnicianField ? 'grid' : 'none'

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

  ensurePublicChrome()
  renderSelects()
  render()
})()
