<?php session_start(); /* Starts the session */

if(!isset($_SESSION['UserData']['Username'])){
	header("location:1.php");
	exit;
}
?>
<a href="0.php">Logout</a><br>
admin.user = MrRobot 

<!doctype html>
<html>
<head>

<meta charset="utf-8">
<title> admin </title>
<link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png">
<link rel="manifest" href="imagessite.webmanifest">
<link rel="mask-icon" href="images/safari-pinned-tab.svg" color="#000000">
<meta name="apple-mobile-web-app-title" content="admin-mrrobot">
<meta name="application-name" content="admin-mrrobot">
<meta name="msapplication-TileColor" content="#000000">
<meta name="theme-color" content="#000000">
<link href="./css/style.css" rel="stylesheet">
</head>
<body oncontextmenu="return false">
<div id="Frame0">
  <h1 >mrrobot.ga admin : </h1>
  <p> /web/main/ <button onclick="window.location.href='https://mrrobot.ga';"> <a class="url">  www.mrrobot.ga </a> </button>
</p>
</div>
</body>
</html> 