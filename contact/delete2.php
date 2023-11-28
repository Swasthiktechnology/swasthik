<?php

header("Access-Control-Allow-Origin: https://swasthik-technology.vercel.app");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE");
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
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE");
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
} elseif ($_SERVER["REQUEST_METHOD"] === "DELETE") {
    // Handle DELETE request to delete a record from the database
    if (isset($_GET['id'])) {
        $id = $_GET['id'];

        // Prepare a DELETE SQL statement
        $sql = "DELETE FROM contact_form WHERE id = ?";

        // Create a prepared statement
        $stmt = $conn->prepare($sql);

        if ($stmt) {
            // Bind the ID parameter to the statement
            $stmt->bind_param("i", $id);

            // Execute the DELETE statement
            if ($stmt->execute()) {
                // Record deleted successfully
                $response = array(
                    "status" => "success",
                    "message" => "Record deleted successfully."
                );
                echo json_encode($response);
            } else {
                // Error while executing the DELETE statement
                $response = array(
                    "status" => "error",
                    "message" => "Error deleting the record."
                );
                echo json_encode($response);
            }

            // Close the prepared statement
            $stmt->close();
        } else {
            // Error in preparing the DELETE statement
            $response = array(
                "status" => "error",
                "message" => "Error preparing the DELETE statement."
            );
            echo json_encode($response);
        }
    } else {
        // ID parameter is missing in the request
        $response = array(
            "status" => "error",
            "message" => "Missing 'id' parameter in the request."
        );
        echo json_encode($response);
    }
}
?>
