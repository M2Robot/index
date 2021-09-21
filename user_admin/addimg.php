<?Php
?>

<!doctype html public "-//w3c//dtd html 3.2//en">

<html>

<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

<title>Thumbnail generation script from plus2net.com</title>
<style>
    
    html {
  text-decoration: none!important;
}

li:hover{
  transition: 1s all;
  color: #2f89fc;
  background-color: rgba(42, 56, 65, 0.82);
  border-top-right-radius: 10px 10px;
  border-bottom-right-radius: 10px 10px;
  cursor: pointer;
  text-decoration: none!important;
}
.body > li{
  float: center;
  text-decoration-line: none;
}

.body li ul{
  background: #1E2B32;
  margin-left: 280px;
  margin-top: -38px;
  display: none;
  position: absolute;
  text-align: center;
  border-top-right-radius: 15px 15px;
  border-bottom-right-radius: 15px 15px;
  text-decoration-line: none;
}

.body li:hover > ul{
  display: block;
  cursor: pointer;
  text-decoration: none!important;
}
    </style>
</head>

<body >
<FORM ENCTYPE="multipart/form-data" ACTION="addimgck.php" METHOD=POST>
Upload this file: <INPUT NAME="userfile" TYPE="file">
<INPUT TYPE="submit" VALUE="Send File"></FORM>

<li><i class="fa fa-chevron-left" aria-hidden="true"></i>

<a onclick="window.location.href='/user/login.php';" target="_self"> back </li>

</body>

</html>
