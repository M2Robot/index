<?Php
?>

<!doctype html public "-//w3c//dtd html 3.2//en">

<html>

<head>
<title>Auto Thumbnail generation script from plus2net.com</title>
</head>

<body >
<?Php

// Below lines are to display file name, temp name and file type , you can use them for testing your script only//////
echo "File Name: ".$_FILES['userfile']['name']."<br>";
echo "tmp name: ".$_FILES['userfile']['tmp_name']."<br>";
echo "File Type: ".$_FILES['userfile']['type']."<br>";
echo "<br><br>";
///////////////////////////////////////////////////////////////////////////
$add="upimg/".$_FILES['userfile']['name']; // the path with the file name where the file will be stored, upload is the directory name. 
//echo $add;
if(move_uploaded_file ($_FILES['userfile']['tmp_name'],$add)){
echo "Successfully uploaded the mage";
chmod("$add",0777);

}else{
echo "Failed to upload file Contact Site admin to fix the problem";
exit;
}

///////// Start the thumbnail generation//////////////
$n_width=200;          // Fix the width of the thumb nail images
$n_height=200;         // Fix the height of the thumb nail imaage
////////////////////////////////////////////

$tsrc="thimg/".$_FILES['userfile']['name'];   // Path where thumb nail image will be stored
//echo $tsrc;
if (!($_FILES['userfile']['type'] =="image/jpeg" OR $_FILES['userfile']['type']=="image/gif")){echo "Your uploaded file must be of JPG or GIF. Other file types are not allowed<BR>";
exit;}
/////////////////////////////////////////////// Starting of GIF thumb nail creation///////////
if (@$_FILES['userfile']['type']=="image/gif")
{
$im=ImageCreateFromGIF($add);
$width=ImageSx($im);              // Original picture width is stored
$height=ImageSy($im);                  // Original picture height is stored
$n_height=($n_width/$width) * $height; // Add this line to maintain aspect ratio
$newimage=imagecreatetruecolor($n_width,$n_height);
imageCopyResized($newimage,$im,0,0,0,0,$n_width,$n_height,$width,$height);
if (function_exists("imagegif")) {
Header("Content-type: image/gif");
ImageGIF($newimage,$tsrc);
}
elseif (function_exists("imagejpeg")) {
Header("Content-type: image/jpeg");
ImageJPEG($newimage,$tsrc);
}
chmod("$tsrc",0777);
}////////// end of gif file thumb nail creation//////////

////////////// starting of JPG thumb nail creation//////////
if($_FILES['userfile']['type']=="image/jpeg"){
$im=ImageCreateFromJPEG($add); 
$width=ImageSx($im);              // Original picture width is stored
$height=ImageSy($im);             // Original picture height is stored
$n_height=($n_width/$width) * $height; // Add this line to maintain aspect ratio
$newimage=imagecreatetruecolor($n_width,$n_height);                 
imageCopyResized($newimage,$im,0,0,0,0,$n_width,$n_height,$width,$height);
ImageJpeg($newimage,$tsrc);
chmod("$tsrc",0777);
}
////////////////  End of JPG thumb nail creation //////////
echo "<br>width = ($width) $n_width , height = ($height) $n_height ";

?>
</body>

</html> 
