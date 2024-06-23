// Get the buttons by their IDs
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

// Get the div elements by their IDs to set the seconds, minutes, and hours
let secondsDozen = document.getElementById('secondsDozen');
let secondsUnits = document.getElementById('seconds');
let minutesDozen = document.getElementById('minutesDozen');
let minutesUnits = document.getElementById('minutes');
let hoursDozen = document.getElementById('hoursDozen');
let hoursUnits = document.getElementById('hours');

// Variable to control the interval method
let interval = null;

// Initialize the variables for seconds, minutes, and hours
let mySec = 0;
let myMin = 0;
let myHour = 0;

// Function to update the display
function updateDisplay() {
    // Update seconds
    secondsDozen.style.top = `-${Math.floor(mySec / 10) * 100}%`;
    secondsUnits.style.top = `-${(mySec % 10) * 100}%`;
    // Update minutes
    minutesDozen.style.top = `-${Math.floor(myMin / 10) * 100}%`;
    minutesUnits.style.top = `-${(myMin % 10) * 100}%`;
    // Update hours
    hoursDozen.style.top = `-${Math.floor(myHour / 10) * 100}%`;
    hoursUnits.style.top = `-${(myHour % 10) * 100}%`;
}

// Function to start the timer
startButton.addEventListener('click', () => {
    if (interval === null) {
        interval = setInterval(() => {
            mySec++;
            if (mySec > 59) {
                mySec = 0;
                myMin++;
                if (myMin > 59) {
                    myMin = 0;
                    myHour++;
                }
            }
            updateDisplay();
        }, 1000); // Set interval to 1 second
    }
});

// Function to stop the timer
stopButton.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
});

// Function to reset the timer
resetButton.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    mySec = 0;
    myMin = 0;
    myHour = 0;
    updateDisplay();
});


