function incrementQuantity() {
    // Get the quantity element
    const quantityElement = document.querySelector('.quantity');
    
    // Retrieve the current quantity from localStorage
    let currentQuantity = parseInt(localStorage.getItem('cartQuantity'), 10);
    
    // If there is no current quantity stored, default to 0
    if (isNaN(currentQuantity)) {
        currentQuantity = 0;
    }

    // Increment the quantity
    currentQuantity += 1;
    
    // Update the quantity element with the new value
    quantityElement.textContent = currentQuantity;
    
    // Save the updated quantity to localStorage
    localStorage.setItem('cartQuantity', currentQuantity);
}

// When the page loads, retrieve the current quantity from localStorage and update the page
window.addEventListener('DOMContentLoaded', function() {
    // Get the quantity element
    const quantityElement = document.querySelector('.quantity');
    
    // Retrieve the current quantity from localStorage
    let currentQuantity = parseInt(localStorage.getItem('cartQuantity'), 10);
    
    // If there is no current quantity stored, default to 0
    if (isNaN(currentQuantity)) {
        currentQuantity = 0;
    }
    
    // Update the quantity element with the stored value
    quantityElement.textContent = currentQuantity;
});

  





// Create an array to hold the cart items
let cart = [];

// Function to add an item to the cart
function addItemToCart(item) {
    // Check if the item already exists in the cart
    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);
    
    if (existingItemIndex >= 0) {
        // If the item already exists, increase its quantity
        cart[existingItemIndex].quantity += 1;
    } else {
        // Otherwise, add the item to the cart
        item.quantity = 1; // Initialize the quantity to 1
        cart.push(item);
    }

    // Update the cart display
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartInfoContainer = document.getElementById('cart-info-container');
    const updateCartSummary = document.getElementById('');
    cartInfoContainer.innerHTML = ''; // Clear the container

    // Loop through each item in the cart and create a display for each one
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        
        // Create image element
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.classList.add('cart-item-image');

        // Create a div to hold the item details
        const itemDetails = document.createElement('div');
        itemDetails.classList.add('cart-item-details');

        // Add the item name and quantity
        itemDetails.innerHTML = `
            <p>${item.name} @ UGX: ${item.price} x ${item.quantity}</p>
        `;

        // Append the image and details to the item element
        itemElement.appendChild(img);
        itemElement.appendChild(itemDetails);

        // Append the item element to the cart info container
        cartInfoContainer.appendChild(itemElement);
    });

    // Update cart summary
    updateCartSummary();
}

// // Function to

// updateCartSummary(){
//     // Get the cart summary container
//     const summaryContainer = document.querySelector('.summary');

//     // Calculate the subtotal
// let subtotal = 0;
// cart.forEach(item => {
//     subtotal += item.price * item.quantity;
// });

// // Update the subtotal display
// const subTotalElement = summaryContainer.query

// .selector('p'); // Assuming the paragraph with the subtotal text is the first child
// subTotalElement.textContent = `Subtotal: UGX ${subtotal}`;

// // Update the checkout button with the total amount
// const checkOutButton = summaryContainer.querySelector('.checkout');
// checkOutButton.textContent = `CHECKOUT (UGX ${subtotal})`;


// // Update the subtotal display
// const subtotalElement = summaryContainer.querySelector('p');
// subtotalElement.textContent = `Subtotal: UGX ${subtotal}`;

// // Update the checkout button with the total amount
// const checkoutButton = summaryContainer.querySelector('.checkout');
// checkoutButton.textContent = `CHECKOUT (UGX ${subtotal})`;
// }

// // Example of how you can set up an event listener to add items to the cart
// // Assume there are buttons with the class "add-to-cart" to add items to the cart
// const addToCartButtons = document.querySelectorAll('.add-to-cart');

// addToCartButtons.forEach(button => {
// button.addEventListener('click', () => {
//     // Assume each button has data attributes for item name, image, and price
//     const itemName = button.getAttribute('data-name');
//     const itemImage = button.getAttribute('data-image');
//     const itemPrice = parseFloat(button.getAttribute('data-price'));
    
//     // Create an item object
//     const item = {
//         name: itemName,
//         image: itemImage,
//         price: itemPrice
//     };
    
//     // Add the item to the cart
//     addItemToCart(item);
// });
// });

// // Call updateCartDisplay initially to show the cart contents
// updateCartDisplay();
