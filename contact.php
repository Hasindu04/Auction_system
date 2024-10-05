<?php

require_once "connection.php";

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $fullname = $_POST ['fullname'];
    $email = $_POST ['email'];
    $telephone = $_POST ['telephone'];
    $message = $_POST ['description'];

        //insert data info the database

        $sql = "INSERT INTO contact (FullName,Email,Telephone,Message) VALUES ('$fullname','$email','$telephone','$message')";


        //check if the insert was successful


        if ($conn->query($sql) === TRUE) {
            echo "Registration successful!";
            header("Location: contact.html"); // Redirect to login page after registration
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }

$conn->close();
?>