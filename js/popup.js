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

// for meat
function toggle1() {
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
        window.location.href = './meat.html';
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

// for chicken
function toggle2() {
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
        window.location.href = './chicken.html';
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

// for irish, liver and matooke
function toggle3() {
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
        window.location.href = './home.html';
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


