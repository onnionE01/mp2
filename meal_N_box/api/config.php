<?php
include_once ("environment.php");
session_start();

$connection =new mysqli( DB_HOST, DB_USER, DB_PASS, DB_NAME);

if ($connection->connect_errno){
    echo "cannot Connect to Database please contact Administrator";
    return;
}

?>
