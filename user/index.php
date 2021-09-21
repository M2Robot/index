<?php session_start(); /* Starts the session */
	
	/* Check Login form submitted */	
	if(isset($_POST['Submit'])){
		/* Define username and associated password array */
		$logins = array('user' => '642400','U' => 'P','U1' => 'P1');
		
		/* Check and assign submitted Username and Password to new variable */
		$Username = isset($_POST['Username']) ? $_POST['Username'] : '';
		$Password = isset($_POST['Password']) ? $_POST['Password'] : '';
		
		/* Check Username and Password existence in defined array */		
		if (isset($logins[$Username]) && $logins[$Username] == $Password){
			/* Success: Set session variables and redirect to Protected page  */
			$_SESSION['UserData']['Username']=$logins[$Username];
			header("location:login.php");
			exit;
		} else {
			/*Unsuccessful attempt: Set error message */
			$msg="<span style='color:red'> Access Denied! </span>";
		}
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
</head>
<style>

element.style {
}
.elementor-widget-wrap>.elementor-element {
    width: 100%;
}
.elementor-widget {
    position: relative;
}
.elementor *, .elementor :after, .elementor :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
*, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
}
user agent stylesheet
div {
    display: block;
}
style attribute {
    cursor: pointer;
}
.elementor {
    -webkit-hyphens: manual;
    -ms-hyphens: manual;
    hyphens: manual;
}
.wpbf-page {
    position: relative;
    -ms-word-wrap: break-word;
    word-wrap: break-word;
}
.elementor-kit-4539 {
    --e-global-color-primary: #F9F9F9;
    --e-global-color-secondary: #54595F;
    --e-global-color-text: #7A7A7A;
    --e-global-color-accent: #61CE70;
    --e-global-color-2fad34ae: #6EC1E4;
    --e-global-color-3ed0922d: #EF2A24;
    --e-global-color-7669d5e6: #4054B2;
    --e-global-color-49067d05: #2B2B2B;
    --e-global-color-7d371a7b: #000;
    --e-global-color-5a0675c: #FFF;
    --e-global-typography-primary-font-family: "Roboto";
    --e-global-typography-primary-font-weight: 600;
    --e-global-typography-secondary-font-family: "Roboto Slab";
    --e-global-typography-secondary-font-weight: 400;
    --e-global-typography-text-font-family: "Roboto";
    --e-global-typography-text-font-weight: 400;
    --e-global-typography-accent-font-family: "Roboto";
    --e-global-typography-accent-font-weight: 500;
}
body {
    font-family: Helvetica,Arial,sans-serif;
    color: var(--brand-color-alt);
    font-size: 16px;
    line-height: 1.7;
}
:root {
    --page-title-display: block;
}
:root {
    --base-color: #dedee5;
    --base-color-alt: #f5f5f7;
    --brand-color: #3e4349;
    --brand-color-alt: #6d7680;
    --accent-color: #3ba9d2;
    --accent-color-alt: #79c4e0;
}
:root {
    --wp-admin-theme-color: #007cba;
    --wp-admin-theme-color-darker-10: #006ba1;
    --wp-admin-theme-color-darker-20: #005a87;
}
:root {
    --bdt-leader-fill-content: .;
}
:root {
    --bdt-breakpoint-s: 640px;
    --bdt-breakpoint-m: 960px;
    --bdt-breakpoint-l: 1200px;
    --bdt-breakpoint-xl: 1600px;
}
html {
    -webkit-text-size-adjust: 100%;
}
.elementor *, .elementor :after, .elementor :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
*, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
}
.elementor *, .elementor :after, .elementor :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
*, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
}
</style>
<body oncontextmenu="return false">
<div id="Frame0">
<div class="elementor-element elementor-element-98221c6 elementor-aspect-ratio-219 elementor-widget elementor-widget-video" data-id="98221c6" data-element_type="widget" data-settings="{&quot;video_type&quot;:&quot;hosted&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;mute&quot;:&quot;yes&quot;,&quot;loop&quot;:&quot;yes&quot;,&quot;aspect_ratio&quot;:&quot;219&quot;}" data-widget_type="video.default">
    <div class="elementor-widget-container">
        <div class="e-hosted-video elementor-wrapper elementor-fit-aspect-ratio elementor-open-inline">
        <video class="banner-logo" src="/user/images/banner.gif" autoplay="" loop="" muted="muted" controlslist="nodownload" poster="/user/images/banner.gif" __idm_id__="517840897"></video>
    </div>
    </div>
    </div>
  <h1 > admin_access </h1>
  <p> /usr/login/ <button class="url" onclick="window.location.href='https://mrrobot.ga';"> <a class="url">  www.mrrobot.ga </a> </button>
</div>
<br>
<form action="" method="post" name="Login_Form">
  <table width="400" border="0" align="center" cellpadding="5" cellspacing="1" class="Table">
    <?php if(isset($msg)){?>
    <tr>
      <td colspan="2" align="center" valign="top"><?php echo $msg;?></td>
    </tr>
    <?php } ?>
    <tr>
      <td colspan="2" align="left" valign="top"><h3>Login</h3></td>
    </tr>
    <tr>
      <td align="right" valign="top">Username</td>
      <td><input name="Username" type="text" class="Input"></td>
    </tr>
    <tr>
      <td align="right">Password</td>
      <td><input name="Password" type="password" class="Input"></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td><input name="Submit" type="submit" value="Login" class="Button3"></td>
    </tr>
  </table>
</form>
</body>
<footer>
      <p class="footer"> © MrRobot  <a onclick="window.location.href='https://mrrobot.ga';" target="_self"> 2021 </a>
</html>