// Variables to track stopwatch state and time
let startTime;
let running = false;

// Function to start the stopwatch
function startStopwatch() {
    startTime = Date.now();
    running = true;

    // Update the stopwatch display every 100 milliseconds
    setInterval(updateStopwatch, 100);
}

// Function to update the stopwatch display
function updateStopwatch() {
    if (running) {
        let elapsedTime = Date.now() - startTime;
        let hours = Math.floor(elapsedTime / 3600000);
        let minutes = Math.floor((elapsedTime % 3600000) / 60000);
        let seconds = Math.floor((elapsedTime % 60000) / 1000);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // Update the stopwatch display with the elapsed time
        document.getElementById("stopwatch").textContent = hours + ":" + minutes + ":" + seconds;
    }
}

// Event listener for the "Start" button
document.getElementById("startButton").addEventListener("click", function () {
    if (!running) {
        startStopwatch();
    }
});

// Event listener for the "End" button
document.getElementById("endButton").addEventListener("click", function () {
    running = false;

    // Stop the stopwatch and display the final time
    clearInterval(updateStopwatch);
    let elapsedTime = Date.now() - startTime;
    let hours = Math.floor(elapsedTime / 3600000);
    let minutes = Math.floor((elapsedTime % 3600000) / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Display a notification with the final time
    let notificationMessage = "You solved this question in " + hours + " hrs " + minutes + " mins " + seconds + " secs";
    alert(notificationMessage);
});
