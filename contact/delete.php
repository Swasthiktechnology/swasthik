<?php
// Enable CORS (Cross-Origin Resource Sharing)
header("Access-Control-Allow-Origin: https://swasthik-technology.vercel.app");
header("Access-Control-Allow-Methods: DELETE");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // Database credentials
    $servername = "localhost";
    $username = "u171790274_contact_form";
    $password = "Dilip@7878";
    $dbname = "u171790274_contact_form";

    // Create a connection to the database
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Check if an ID parameter is passed in the request
    if (isset($_GET['id'])) {
        $id = $_GET['id'];

        // Prepare a DELETE SQL statement
        $sql = "DELETE FROM your_table_name WHERE id = ?";

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

    // Close the database connection
    $conn->close();
} else {
    // Invalid HTTP method
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("message" => "Invalid request method."));
}
?>
