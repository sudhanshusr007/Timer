// Function to start the countdown timer
function startCountdown() {
    // Get the input values for hours, minutes, and seconds
    let hours = parseInt(document.getElementById("hours").value);
    let minutes = parseInt(document.getElementById("minutes").value);
    let seconds = parseInt(document.getElementById("seconds").value);

    // Convert hours, minutes, and seconds to milliseconds
    let countdownTime = (hours * 3600 + minutes * 60 + seconds) * 1000;

    // Display a notification when the countdown timer ends
    setTimeout(function () {
        alert("TIMES UP!");
    }, countdownTime);
}

// Event listener for the "Start" button
document.getElementById("startButton").addEventListener("click", function () {
    startCountdown();
});
