// Retrieve the popup element by its class name
const popup = document.querySelector('.popup');

// Function to toggle the visibility of the popup
function toggle() {
  // Show the popup by adding the 'show' class
  popup.classList.add('show');

  // Set a timeout to hide the popup after 5 seconds
  setTimeout(() => {
    // Hide the popup by removing the 'show' class
    popup.classList.remove('show');
  }, 10000); // 5000 milliseconds = 5 seconds
}
