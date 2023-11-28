<?php
header("Access-Control-Allow-Origin: https://swasthik-technology.vercel.app");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");


$pdo = new PDO('mysql:host=localhost;dbname=u171790274_contact_form', 'u171790274_contact_form', 'Dilip@7878');

// Retrieve ID from request
$id = $_GET['id'] ?? null; // Or use $_POST if you're sending data in the body

// Check if ID is provided
if (!$id) {
    echo json_encode(['error' => 'Missing ID']);
    exit;
}

// Prepare SQL query
$stmt = $pdo->prepare("DELETE FROM your_table WHERE id = :id");

// Bind parameters and execute
$stmt->execute(['id' => $id]);

// Check if delete was successful
if ($stmt->rowCount()) {
    echo json_encode(['success' => 'Record deleted']);
} else {
    echo json_encode(['error' => 'Record not found or not deleted']);
}
?>
