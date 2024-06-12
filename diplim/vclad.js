  // Инициализация вкладок
  const tabEl = document.getElementById('myTab')
  const tabList = tabEl.querySelectorAll('.nav-link')
  const tabPanels = document.querySelectorAll('.tab-pane')
  
  for (let i = 0; i < tabList.length; i++) {
    tabList[i].addEventListener('click', e => {
      e.preventDefault()
  
      // Удалить класс active со всех вкладок и панелей
      tabList.forEach(tab => {
        tab.classList.remove('active')
      })
      tabPanels.forEach(panel => {
        panel.classList.remove('show', 'active')
      })
  
      // Добавить класс active к текущей вкладке и панели
      tabList[i].classList.add('active')
      const tabPanel = document.querySelector(e.target.getAttribute('data-bs-target'))
      tabPanel.classList.add('show', 'active')
    })
  }