<?php session_start(); /* Starts the session */

if(!isset($_SESSION['UserData']['Username'])){
	header("location:login.php");
	exit;
}
?>


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
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="/user_admin/user_menu.css">

</head>
<body oncontextmenu="return false">
<div class="container">
    <div class="card">
      <div class="header">
        <a onclick="window.location.href='#';" target="_self"> <h3>FS-MrRobot <i  class="fa fa-chevron-circle-down" aria-hidden="true"></i></h3>
      </div>
      <div class="body">
        <ul>
          <li><i class="fa fa-home icon"></i><a onclick="window.location.href='https://mrrobot.ga/index.html';" target="_self">Home</li>
          <li><i class="fa fa-rocket" aria-hidden="false"></i> <a onclick="window.location.href='https://mrrobot.ga/shortcuts.html';" target="_self">Shortcuts</li>
          <li><i class="fa fa-terminal" aria-hidden="true"></i><a onclick="window.location.href='https://mrrobot.ga/tools.html';" target="_self"> Tools </a></li>
          <li><i class="fa fa-commenting" aria-hidden="true"></i>
  <a onclick="window.location.href='https://mrrobot.ga/askme.html';" target="_self">Ask Me </a></li>

          <li><i class="fa fa-user-circle" aria-hidden="true"></i><a onclick="window.location.href='#';" target="_self">user
            <ul>
              <li><i class="fa fa-cloud-upload" aria-hidden="true"></i>
<a onclick="window.location.href='/user_admin/addimg.php';" target="_self"> upload </li>
              <li><i class="fa fa-folder" aria-hidden="true"></i>
<a onclick="window.location.href='/user_admin/upimg/';" target="_self"> data </li>
            </ul>
          </li>
          
          <li><i class="fa fa-sign-out"></i>
   <a onclick="window.location.href='/user/logout.php';" target="_self"> logout</li>
        </ul>
      </div>
    </div>
  </div>

<div id="Frame0">
  <h1 >fsociety00.dat</h1>
  <p> /usr/login/admin <button class="url" onclick="window.location.href='https://mrrobot.ga';"> www.mrrobot.ga </button>
</p>
</div>
</body>
</html> 