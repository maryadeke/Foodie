// Function to add an item to the cart
function addToCart() {
    // Retrieve the product data (name, price, image) from the current page
    const productName = document.querySelector('.cart_container2 p').textContent;
    const productPrice = document.querySelector('.cart_container2 p:nth-child(3)').textContent;
    const productImage = document.querySelector('.cart_container1 img').src;
    
    // Create a product object
    const product = {
        name: productName,
        price: productPrice,
        image: productImage
    };
    
    // Retrieve the existing cart from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Add the new product to the cart
    cart.push(product);
    
    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    
    // Show the popup
    showPopup();
    
    // Increment the cart quantity in local storage
    incrementQuantity();
}

// Function to show the popup and set up button text
function showPopup() {
    popup.classList.add('show');
   
}

// Function to increment the cart quantity and update local storage
function incrementQuantity() {
    const quantityElement = document.querySelector('.quantity');
    let currentQuantity = parseInt(quantityElement.textContent, 10);
    
    // Increment quantity and update the page and local storage
    currentQuantity += 1;
    quantityElement.textContent = currentQuantity;
    localStorage.setItem('cartQuantity', currentQuantity);
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Load the cart quantity from local storage and update the quantity element
    const quantityElement = document.querySelector('.quantity');
    const storedQuantity = parseInt(localStorage.getItem('cartQuantity'), 10) || 0;
    quantityElement.textContent = storedQuantity;

    // Add click event listener to the "Add to Cart" button
    button.addEventListener('click', addToCart);
});
















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









// //for incrementing
//   // Function to increment the quantity
//   function incrementQuantity() {
//     // Get the quantity element
//     const quantityElement = document.querySelector('.quantity');
    
//     // Get the current quantity value and parse it to an integer
//     let currentQuantity = parseInt(quantityElement.textContent, 10);
    
//     // Increment the quantity
//     currentQuantity += 1;
    
//     // Update the quantity element with the new value
//     quantityElement.textContent = currentQuantity;
// }

// // Add an event listener to the "Add to Cart" button
// const addToCartButton = document.getElementById('buttonContent');
// addToCartButton.addEventListener('click', incrementQuantity);



// function incrementQuantity() {
//     // Get the quantity element
//     const quantityElement = document.querySelector('.quantity');
    
//     // Retrieve the current quantity from localStorage
//     let currentQuantity = parseInt(localStorage.getItem('cartQuantity'), 10);
    
//     // If there is no current quantity stored, default to 0
//     if (isNaN(currentQuantity)) {
//         currentQuantity = 0;
//     }

//     // Increment the quantity
//     currentQuantity += 1;
    
//     // Update the quantity element with the new value
//     quantityElement.textContent = currentQuantity;
    
//     // Save the updated quantity to localStorage
//     localStorage.setItem('cartQuantity', currentQuantity);
// }

// // When the page loads, retrieve the current quantity from localStorage and update the page
// window.addEventListener('DOMContentLoaded', function() {
//     // Get the quantity element
//     const quantityElement = document.querySelector('.quantity');
    
//     // Retrieve the current quantity from localStorage
//     let currentQuantity = parseInt(localStorage.getItem('cartQuantity'), 10);
    
//     // If there is no current quantity stored, default to 0
//     if (isNaN(currentQuantity)) {
//         currentQuantity = 0;
//     }
    
//     // Update the quantity element with the stored value
//     quantityElement.textContent = currentQuantity;
// });

  








