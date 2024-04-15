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


// Sample addItemToCart function
function addItemToCart(item) {
    // Check if the item already exists in the cart
    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);
    
    if (existingItemIndex >= 0) {
        // Increase quantity if item already exists in the cart
        cart[existingItemIndex].quantity += 1;
    } else {
        // Add new item to the cart with quantity 1
        item.quantity = 1;
        cart.push(item);
    }
    
    // Debugging: Log the updated cart
    console.log('Cart after adding item:', cart);
    
    // Update cart display
    updateCartDisplay();
}

// Sample updateCartDisplay function
function updateCartDisplay() {
    const cartInfoContainer = document.getElementById('cart-info-container');
    cartInfoContainer.innerHTML = ''; // Clear the container

    // Loop through each item in the cart and create a display for each one
    cart.forEach(item => {
        // Create a container for the cart item
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        
        // Create the image element for the item
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.classList.add('item_image');

        // Create the item details container
        const itemDetails = document.createElement('div');
        itemDetails.classList.add('cart-item-details');
        itemDetails.innerHTML = `${item.name} @ UGX ${item.price} x ${item.quantity}`;

        // Append image and item details to item container
        itemElement.appendChild(img);
        itemElement.appendChild(itemDetails);

        // Append the item container to the cart info container
        cartInfoContainer.appendChild(itemElement);
    });

    // Update the cart summary
    updateCartSummary();
}
