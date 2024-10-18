// Переключение темы с сохранением в локальном хранилище
const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');
const themeLabel = document.getElementById('theme-label');
const body = document.body;

// Устанавливаем тему при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    body.classList.add('dark-theme');
    themeToggleCheckbox.checked = true;
    themeLabel.textContent = 'Light Mode';
  } else {
    themeLabel.textContent = 'Dark Mode';
  }
});

// Обработчик переключения темы
themeToggleCheckbox.addEventListener('change', () => {
  if (themeToggleCheckbox.checked) {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'light');
    themeLabel.textContent = 'Light Mode';
  } else {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'dark');
    themeLabel.textContent = 'Dark Mode';
  }
});

// Диаграммы с Chart.js
document.addEventListener('DOMContentLoaded', () => {
  // Fund Allocation Chart
  const fundCtx = document.getElementById('fundChart');
  if (fundCtx) {
    new Chart(fundCtx, {
      type: 'pie',
      data: {
        labels: ['Technology Development', 'Marketing', 'Compliance', 'Liquidity'],
        datasets: [{
          data: [40, 30, 15, 15],
          backgroundColor: ['#00C896', '#FFC107', '#FF5722', '#1A237E'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          }
        }
      }
    });
  }

  // ROI Chart
  const roiCtx = document.getElementById('roiChart');
  if (roiCtx) {
    new Chart(roiCtx, {
      type: 'bar',
      data: {
        labels: ['UM Value', 'Transaction Fees', 'Staking'],
        datasets: [{
          label: 'Return on Investment',
          data: [60, 20, 20],
          backgroundColor: ['#4CAF50', '#2196F3', '#FFC107'],
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
});
