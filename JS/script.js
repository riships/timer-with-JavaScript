// Get the buttons by their IDs
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

// Get the spans by their IDs to set the seconds, minutes, and hours
let seconds = document.getElementById('seconds');
let minutes = document.getElementById('minutes');
let hours = document.getElementById('hours');

// Variable to control the interval method
let interval = null;

// Initialize the variables for seconds, minutes, and hours
let mySec = 0;
let myMin = 0;
let myHour = 0;

// Function to start the timer
start.addEventListener('click', () => {
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
            seconds.innerText = mySec < 10 ? "0" + mySec : mySec;
            minutes.innerText = myMin < 10 ? "0" + myMin : myMin;
            hours.innerText = myHour < 10 ? "0" + myHour : myHour;
        }, 1000); // Set interval to 1 second
    }
});

// Function to stop the timer
stop.addEventListener('click', () => {
    clearInterval(interval);
    interval=null;
});

// Function to reset the timer
reset.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    mySec = 0;
    myMin = 0;
    myHour = 0;
    seconds.innerText = '00';
    minutes.innerText = '00';
    hours.innerText = '00';
    
});
