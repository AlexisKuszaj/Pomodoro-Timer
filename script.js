const timerDisplay = document.getElementById('timer');
const progressBar = document.getElementById('progress');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

let timer;
let totalTime = 1500; 
let remainingTime = totalTime;
let isTimerRunning = false;

function updateTimerDisplay() {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateProgressBar() {
  const progressPercentage = (remainingTime / totalTime) * 100;
  progressBar.style.transform = `scaleX(${progressPercentage / 100})`;
}

function startTimer() {
  if (isTimerRunning) {
    return; 
  }

  timer = setInterval(() => {
    if (remainingTime === 0) {
      clearInterval(timer);
      alert('Time is up! Take a break.');
      isTimerRunning = false;
      return;
    }

    remainingTime--;
    updateTimerDisplay();
    updateProgressBar();
  }, 1000);

  isTimerRunning = true;
}

function pauseTimer() {
  clearInterval(timer);
  isTimerRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  remainingTime = totalTime;
  updateTimerDisplay();
  updateProgressBar();
  isTimerRunning = false;
}

// Event listeners
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// Initial display
updateTimerDisplay();
updateProgressBar();
