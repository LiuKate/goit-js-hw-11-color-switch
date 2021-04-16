import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector('body');

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

let colorApply = null;

function onStartBtnClick() {
    startBtn.disabled = true;
    colorApply = setInterval(() => {
       bodyRef.bgColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
      }, 1000)
}

function onStopBtnClick() {
    startBtn.disabled = false;
    clearInterval(colorApply);
}