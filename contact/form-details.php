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

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    header("Access-Control-Allow-Origin: https://swasthik-technology.vercel.app");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Credentials: true");
    // Handle GET request to retrieve data from the database
    $sql = "SELECT * FROM contact_form";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $data = array();
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        echo json_encode($data);
    } else {
        echo "No records found in the database.";
    }
    $conn->close();
}
?>
