<?php
session_start();
require 'facebook.php';
require 'fbconfig.php';
// Connection...
$user = $facebook->getUser();
if ($user)
 {
 $logoutUrl = $facebook->getLogoutUrl(array( 'next' => ('http://localhost/guvidrepo/model/fb/fblogout.php') ));
 try {
 $userdata = $facebook->api('/me');
 } catch (FacebookApiException $e) {
error_log($e);
$user = null;
 }
$_SESSION['facebook']=$_SESSION;
$_SESSION['userdata'] = $userdata;
$_SESSION['logout'] =  $logoutUrl;
//$url = $logoutUrl."-frm=logout";
}
else
{ 
$loginUrl = $facebook->getLoginUrl(array( 'scope' => 'email,user_birthday','redirect_uri' => 'http://localhost/guvidrepo/model/fb/signincheck.php'));
$url = $loginUrl."-frm=login"; 
}
 echo $url;
 ?>
