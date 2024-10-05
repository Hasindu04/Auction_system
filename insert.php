<?php

require_once "connection.php";

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $username = $_POST ['User_Name'];
    $fullname = $_POST ['Full_Name'];
    $email = $_POST ['Email'];
    $password = $_POST ['Password'];
    $retypepassword = $_POST ['Re_Type_Password'];

    if ($password !== $retypepassword) {
        echo "Passwords do not match.";
        exit;
    }
        //insert data info the database


        $sql = "INSERT INTO sign_up (UserName,FullName,Email,Password,ReTypePassword) VALUES ('$username','$fullname','$email','$password','$retypepassword')";


        //check if the insert was successful


        if ($conn->query($sql) === TRUE) {
            echo "Registration successful!";
            header("Location: login.html"); // Redirect to login page after registration
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }

$conn->close();
?>