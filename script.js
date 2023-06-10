const timerDisplay = document.getElementById('timer')
const startButton = document.getElementById('start')
const pauseButton = document.getElementById('pause')
const resetButton= document.getElementById('reset')

let timer;
let minutes = 60;
let seconds = 0;

function updateTimerDisplay() {
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    timer = setInterval(() => {
        if(minutes === 0 && seconds === 0) {
            clearInterval(timer);
            alert('Time is up! Take a break.')
            return;
        }

        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
    

        updateTimerDisplay();
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    minutes = 60;
    seconds = 0;
    updateTimerDisplay();
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
