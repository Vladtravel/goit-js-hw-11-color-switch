const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const bodyEl = document.querySelector('body');

const btnStart = document.querySelector('[data-action="start"]');

const btnStop = document.querySelector('[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let loggerId = 0;

const logger = () => {
  let currentColor = randomIntegerFromInterval(0, colors.length - 1);
  bodyEl.style.backgroundColor = `${colors[currentColor]}`;
  btnStart.setAttribute('disabled', true);
};

btnStart.addEventListener('click', onBackgroundChange);

btnStop.addEventListener('click', onBtnStopClick);

function onBackgroundChange() {
  loggerId = setInterval(logger, 1000);
}

function onBtnStopClick() {
  clearInterval(loggerId);
  btnStart.removeAttribute('disabled', false);
}
