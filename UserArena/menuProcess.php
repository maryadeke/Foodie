

<?php
// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the data sent from the frontend
    $foodName = isset($_POST['foodName']) ? $_POST['foodName'] : '';
    $weight = isset($_POST['weight']) ? $_POST['weight'] : '';
    $price = isset($_POST['price']) ? $_POST['price'] : '';
    $image = isset($_POST['image']) ? $_POST['image'] : '';

    // You can perform additional validation and processing here
    // For example, inserting the data into a database

    // If you want to respond to the frontend with a message
    echo "Data received successfully.";
} else {
    // If the request method is not POST, respond with an error
    http_response_code(405); // Method Not Allowed
    echo "Error: Only POST requests are allowed.";
}
?>

