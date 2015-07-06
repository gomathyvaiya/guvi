<?php
session_start();
include('facebook.php');
$facebook = new Facebook(array(
  'appId' => '329048213924782',
  'secret' => '54c4cb2c5827c73bf7ba981d6deb6710',
));
$uid = $facebook->getUser();
$_SESSION['facebookuid'] = $uid;
header("Location:http://www.guvi.in/model/guvisignin.php");
//echo "Fblogincheckis".$_SESSION['facebookuid'];
?>