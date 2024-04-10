// Retrieve the popup element by its class name
const popup = document.querySelector('.popup');
const button = document.getElementById('buttonContent');

// Function to toggle the visibility of the popup
function toggle() {
    // Show the popup by adding the 'show' class
    popup.classList.add('show');

    // Set a timeout to hide the popup after 5 seconds
    setTimeout(() => {
        // Hide the popup by removing the 'show' class
        popup.classList.remove('show');
    }, 5000); // 5000 milliseconds = 5 seconds

    // Get the current text content of the button
    const originalText = button.textContent;

    // Change the button text to "Continue shopping"
    button.textContent = 'Continue shopping';

    // Go back to the rice page when the button is clicked
    button.addEventListener('click', function() {
        // Navigate back to the rice page
        window.location.href = './rice.html';
        // Revert the button text after going back
        button.textContent = originalText;
        // Remove the event listener to prevent multiple clicks
        button.removeEventListener('click', this);
    });

    // Set a timeout to revert the button text after 5 seconds
    setTimeout(() => {
        button.textContent = originalText;
    }, 5000);
}

//
function populateContent(imageSrc, itemName, itemWeight, itemPrice) {
    // Update the image source
    document.getElementById("item_image").src = imageSrc;
    
    // Update the item name
    document.getElementById("item_name").textContent = itemName;
    
    // Update the item weight
    document.getElementById("item_weight").textContent = itemWeight;
    
    // Update the item price
    document.getElementById("item_price").textContent = itemPrice;
  }
  
  // Example usage
populateContent("./images/brown_rice.jpg", "Brown Rice", "80g", "Ugx 7000");
populateContent("./images/yellow_rice.jpg", "yellow Rice", "80g", "Ugx 8500");
populateContent("./images/pilau_rice.jpg", "Pilau Rice", "80g", "Ugx 9000");
populateContent("./images/egg_rice.jpg", "Egg Rice", "80g", "Ugx 6500");
populateContent("./images/basmatti.jpg", "Basmatti Rice", "80g", "Ugx 10000");