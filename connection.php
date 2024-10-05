<?php
$servername = "localhost";
$empname = "root";
$password = "";
$dbname = "auction_system";

$conn = new mysqli($servername, $empname, $password, $dbname);


if ($conn -> connect_error){
    die("connection Failed:".$conn->connect_error);
}

?>