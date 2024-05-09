const userInput = document.getElementById('user-input');
const checkButton =  document.getElementById('check-btn');
const clearButton =  document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const checkNumber = () => {
  const number = userInput.value;
  const pattern1 = /^1?\s?\(\d{3}\)[ -]?\d{3}[ -]?\d{4}$/;
  const pattern2 = /^1?\s??\d{3}?[ -]?\d{3}[ -]?\d{4}$/;
  if (number === '') {
    alert('Please provide a phone number');
    return;
  } else if (pattern1.test(number) || pattern2.test(number)) {
    resultsDiv.innerText = `Valid US number:\n${number}`;
  } else {
    resultsDiv.innerText = `Invalid US number:\n${number}`;
  }
}

const clearResults = () => {
  resultsDiv.innerText = '';
  userInput.value = '';
}  

checkButton.addEventListener('click', checkNumber);
clearButton.addEventListener('click', clearResults);

document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkNumber();
  }
})

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    clearResults();
  }
})

function loadTooltips() {
  const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');

  tooltipTriggers.forEach(function(tooltipTrigger) {
    const text = tooltipTrigger.getAttribute('data-tooltip');
    const tooltipElement = document.createElement('div');
    tooltipElement.textContent = text;
    tooltipElement.classList.add('tooltip');
    document.body.appendChild(tooltipElement);

    tooltipTrigger.addEventListener('mouseenter', () => {
      tooltipElement.style.display = 'block';
    })

    tooltipTrigger.addEventListener('mouseleave', () => {
      tooltipElement.style.display = 'none';
    })

    tooltipTrigger.addEventListener('mousemove', e => {
      const tooltipHeight = tooltipElement.offsetHeight;
      const x = e.clientX + 10;
      const y = e.clientY - tooltipHeight - 10;

      tooltipElement.style.left = `${x}px`;
      tooltipElement.style.top = `${y}px`;
    })
  })
}

loadTooltips();
