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


// .......................................................FileStack
// .......................................................FileStack
// Initialize Filestack with your API key
const client = filestack.init('AcOufZ8PbTEyEsFaNTvu5z');

// Get references to HTML elements
const uploadForm = document.getElementById('upload-form');
const fileInput = document.getElementById('file-input');

// Add an event listener to the form for file uploads
uploadForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get the selected file
  const file = fileInput.files[0];
  
  if (file) {
    // Use Filestack to upload the file
    client.upload(file).then((result) => {
      // Hide the file input and display the confirmation message
      fileInput.style.display = 'none';
      document.getElementById('confirmation-message').style.display = 'block';

      // Handle the successful upload, you can get the file URL from result.url
      console.log('File uploaded:', result.url);
    }).catch((error) => {
      // Handle any errors
      console.error('Error uploading file:', error);
    });
  }
});

// .......................................................FileStack
// .......................................................FileStack

