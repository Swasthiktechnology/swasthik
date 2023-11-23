<?php

header("Access-Control-Allow-Origin: https://swasthik-technology.vercel.app");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");

// Connect to the database (replace with your database credentials)
$servername = "localhost";
$username = "u171790274_contact_form";
$password = "Dilip@7878";
$dbname = "u171790274_contact_form";

$conn = new mysqli($servername, $username, $password, $dbname);

$input = (array) json_decode(file_get_contents('php://input'), TRUE);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Add recipient email address
$recipient_email = "swasthiktechnology@outlook.com"; // Replace with the actual recipient's email address

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    header("Access-Control-Allow-Origin: https://swasthik-technology.vercel.app");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Credentials: true");
    $name = $input["name"];
    $email = $input["email"];
    $phone = $input["phone"]; // Added "phone" field
    $message = $input["message"];

    $sql = "INSERT INTO contact_form (name, email, phone, message) VALUES ('$name', '$email', '$phone', '$message')";

    if ($conn->query($sql) === TRUE) {
        // Form submitted successfully
        echo "Form submitted successfully";
        
        // Send an email notification
        $subject = "Contact Form Submission";
        $email_message = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";
        $headers = "From: $email";
        
        if (mail($recipient_email, $subject, $email_message, $headers)) {
            echo "Email notification sent successfully";
        } else {
            echo "Email notification failed to send.";
        }
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
