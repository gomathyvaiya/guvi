<?php
include('facebook.php');
$facebook = new Facebook(array(
  'appId' => '329048213924782',
  'secret' => '54c4cb2c5827c73bf7ba981d6deb6710',
  
));

$_SESSION['facebookuid']='';
if ($_SESSION['facebookuid']) {

  $logoutUrl = $facebook->getLogoutUrl(array( 'next' => ('http://www.guvi.in/model/fb/fblogout.php') ));
 
  $url = $logoutUrl."-frm=logout";
} else {
	$loginUrl = $facebook->getLoginUrl(array( 'scope' => 'email,user_birthday','redirect_uri' => 'http://www.guvi.in/model/fblogincheck.php'));
  //$loginUrl = $facebook->getLoginUrl($params);
  $url = $loginUrl."-frm=login"; 
}
echo $url;

?>
