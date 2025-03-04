// Variables to store time and interval
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
let isRunning = false;

// DOM Elements
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');
const startStopBtn = document.getElementById('startStopBtn');
const lapBtn = document.getElementById('lapBtn');
const resetBtn = document.getElementById('resetBtn');
const lapList = document.getElementById('lapList');

// Function to update the stopwatch display
function updateDisplay() {
  hoursDisplay.textContent = String(hours).padStart(2, '0');
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
  millisecondsDisplay.textContent = String(milliseconds).padStart(2, '0');
}

// Function to start or stop the stopwatch
function startStop() {
  if (isRunning) {
    clearInterval(interval);
    startStopBtn.textContent = 'Start';
    isRunning = false;
  } else {
    interval = setInterval(runStopwatch, 10);
    startStopBtn.textContent = 'Stop';
    isRunning = true;
  }
}

// Function to run the stopwatch
function runStopwatch() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

// Function to reset the stopwatch
function reset() {
  clearInterval(interval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
  startStopBtn.textContent = 'Start';
  isRunning = false;
  lapList.innerHTML = '';
}

// Function to record a lap
function recordLap() {
  const lapTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
  const lapItem = document.createElement('li');
  lapItem.textContent = lapTime;
  lapList.appendChild(lapItem);
}

// Event Listeners
startStopBtn.addEventListener('click', startStop);
lapBtn.addEventListener('click', recordLap);
resetBtn.addEventListener('click', reset);