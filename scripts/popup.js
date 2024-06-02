// Function to load content into popup
function loadContent(htmlUrl, jsUrl) {
    // Fetch the content of the HTML file
    fetch(htmlUrl)
        .then(response => response.text())
        .then(data => {
            // Inject the HTML content into the popup
            document.body.innerHTML = data;

            // Create a new script element for the JavaScript file
            let script = document.createElement('script');
            script.src = jsUrl;

            // Append the script element to the body to load the JavaScript file
            document.body.appendChild(script);
        })
        .catch(error => console.error('Error fetching HTML file:', error));
}

// Event listener for the "Start" button
document.getElementById("startButton").addEventListener("click", function () {
    // Load the stopwatch HTML and JavaScript files into the popup
    loadContent("stopwatch.html", "scripts/stopwatch.js");
});

// Event listener for the "Set Time" button
document.getElementById("setTimeButton").addEventListener("click", function () {
    // Load the set time HTML and JavaScript files into the popup
    loadContent("set_time.html", "scripts/set_time.js");
});

