// Function to show/hide project categories
function showTabs(category) {
    const tabContents = document.querySelectorAll(".tabcontent");
    const tabLinks = document.querySelectorAll(".tablinks");

    // Hide all tab contents
    tabContents.forEach((content) => {
        content.style.display = "none";
    });

    // Remove 'active' class from all tab links
    tabLinks.forEach((link) => {
        link.classList.remove("active");
    });

    // Show the selected category
    document.getElementById(category).style.display = "block";

    // Add 'active' class to the clicked tab link
    event.currentTarget.classList.add("active");
}

// Set the default tab to "All Projects" on page load
document.querySelector(".tablinks.active").click();

// .......................................................Upload system
// .......................................................Upload system

function openGmail(email) {
    var subject = encodeURIComponent('Assingment No 1');
    var body = encodeURIComponent('Upload screenshot or pdf with code and output');
  
    var gmailComposeURL = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=' + email + '&su=' + subject + '&body=' + body;
    
    window.open(gmailComposeURL, '_blank');
  }
  // .......................................................Upload system
  // .......................................................Upload system
  