// Get the elements by their IDs
const hiddenContent = document.getElementById('hiddenContent');
const message = document.getElementById('message');

// Define the specific start time for tomorrow (9 AM)
const startTime = new Date();
startTime.setDate(startTime.getDate() + 1); // Set to tomorrow
startTime.setHours(9, 0, 0); // Set to 9:00:00 AM tomorrow

// Function to check if the content should be displayed and update visibility accordingly
function checkContentStatus() {
    const currentTime = new Date();

    if (currentTime >= startTime) {
        // Show the actual content and hide the message
        hiddenContent.style.display = 'block';
        message.style.display = 'none';
    } else {
        // Hide the actual content and show the message
        hiddenContent.style.display = 'none';
        message.style.display = 'block';
        
        // Calculate the time remaining until the start time
        const timeRemaining = startTime - currentTime;

        // Schedule a page reload when the start time arrives
        setTimeout(function () {
            location.reload();
        }, timeRemaining);
    }
}

// Call the function to check the content status when the page loads
checkContentStatus();
