<?php
include "db_connect.php";

// Get form data

$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash the password

// Insert user into database
$sql = "INSERT INTO login ( email, password) VALUES ('$email', '$password')";

if ($conn->query($sql) === TRUE) {
    // Close MySQL connection
    $conn->close();
    // Redirect to the home page
    header("Location: /foodie/home.html");
    exit(); // Stop further execution
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
    // Close MySQL connection
    $conn->close();
}



?>
