<?php session_start(); /* Starts the session */
session_destroy(); /* Destroy started session */
header("location:1.php");
exit;
?>
