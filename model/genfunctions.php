<?php
//require_once('dbcon.php');
//require_once('constants.php');

//require_once('google_auth.php');

function fmt_db_date_time($time_var=0)
{
	if ($time_var==0) {
		$time_var = time();
	}
	return date('Y-m-d H:i:s',$time_var);
}

function validate_login()
{
	if(!get_session('LOGIN_ID'))
	{
		header("location:login.php");
	}	

	return;
}

function request_get($param, $type = 1, $default_value = "") {
	if($type == 1){
		if(isset($_REQUEST[$param]) && trim($_REQUEST[$param]) != "") 
			return htmlentities(addslashes(trim($_REQUEST[$param])));
			//return $_REQUEST[$param];
	}
	if($type == 2){
		return $_REQUEST[$param];
	}
	if($default_value !== "")
		return $default_value;
	
	return "";
}

function get_session($var)
{
	if (isset($_SESSION[$var])) {
		return $_SESSION[$var];
	}
	else {
		return '';
	}
}

function set_session($var,$value)
{
	$_SESSION[$var] = $value;
}

function unset_session($var)
{
	if(isset($_SESSION[$var])) {
		unset($_SESSION[$var]);
	}

}

function create_guid($namespace = '') {    
    static $guid = '';
    $uid = uniqid("", true);
    $data = $namespace;
    $data .= $_SERVER['REQUEST_TIME'];
    $data .= $_SERVER['HTTP_USER_AGENT'];
    $data .= $_SERVER['LOCAL_ADDR'];
    $data .= $_SERVER['LOCAL_PORT'];
    $data .= $_SERVER['REMOTE_ADDR'];
    $data .= $_SERVER['REMOTE_PORT'];
    $hash = strtoupper(hash('ripemd128', $uid . $guid . md5($data)));
    $guid = '{' .  
            substr($hash,  0,  8) .
            '-' .
            substr($hash,  8,  4) .
            '-' .
            substr($hash, 12,  4) .
            '-' .
            substr($hash, 16,  4) .
            '-' .
            substr($hash, 20, 12) .
            '}';
    return $guid;
}

function getHostUrl() {
	$pageURL = 'http';
	if ($_SERVER["HTTPS"] == "on") {$pageURL .= "s";}
		$pageURL .= "://";
		if ($_SERVER["SERVER_PORT"] != "80") {
			$pageURL .= $_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"];
		} else {
		$pageURL .= $_SERVER["SERVER_NAME"];
	}
	return $pageURL;
}

function safe_sql_nq( $val )
{
	  $val = addslashes( htmlentities( $val, ENT_QUOTES, 'UTF-8') );
	  return $val;
}

function display_time_diff_format($var_date,$span_flag=0)
{
	$str_datetime = "";
	if ($var_date > 100) {
		$dateDiff = time() - $var_date;
		$fullDays = floor($dateDiff/(60*60*24));
		$fullHours = floor(($dateDiff-($fullDays*60*60*24))/(60*60));
		$fullMinutes = floor(($dateDiff-($fullDays*60*60*24)-($fullHours*60*60))/60);
		$fullSeconds = $dateDiff%60;
		
		if($fullDays == 0 && $fullHours == 0 && $fullMinutes == 0) {
			$str_datetime = $fullSeconds ." seconds ago";
		}
		else if($fullDays == 0 && $fullHours == 0) {
			$str_datetime = $fullMinutes ." minutes ago";
		}
		else if($fullDays == 0 ) {
			$str_datetime = $fullHours ." hours ago";
		}
		else if( $fullDays<30 ) {
			$str_datetime = $fullDays ." days ago";
		}
		else {
			$str_datetime = date("M j, Y H:i A", $var_date);
		}
		
		if ($span_flag == true)
		{
			$str_datetime_span_disp = date("M j, Y H:i A", $var_date);
			$temp = "<span title='$str_datetime_span_disp'>$str_datetime</span>";
			$str_datetime = $temp;
		}
		return $str_datetime;
	}
	else {
		return "--";
	}
}



function send_mail_with_smtp($email, $subject, $msg) {
		
	if ($email=='') {
		$email = "projects@grinfotech.com";
	}

	require 'phpmailer/class.phpmailer.php';
	require 'phpmailer/class.smtp.php';

	$mail = new PHPMailer(); 
	$mail->IsSMTP(); 

	try{
		
	    $mail->SMTPDebug  = 1;                     
	    $mail->SMTPAuth   = true;                  
	    $mail->SMTPSecure = "ssl" ;
	    $mail->From		="grinfotech1@gmail.com";
	    $mail->Timeout	= 60;          
	    $mail->Host       = "smtp.gmail.com";      
	    $mail->Port       = 465;                  
	    $mail->Username   = "grinfotech1@gmail.com";//user@domain.com
	    $mail->Password   = "grinfotech123";;           
	    $mail->AddAddress($email);//RECIPIENT
	    $mail->SetFrom('grinfotech1@gmail.com', 'Admin Team');//IDK WHAT 'THIS' IS FOR
	    $mail->AddReplyTo("projects@grinfotech.com", "Admin Email");//FOR THE 'REPLY-TO' FIELD
	    $mail->Subject = $subject;
	    $mail->MsgHTML($msg);

	    $mail->Send();
	    echo "Mail sent successfuly";

	} catch (phpmailerException $e) {

	    echo $e->errorMessage(); //Pretty error messages from PHPMailer
	    echo $mail->Host;
	    echo '<pre>';
	    print_r($mail);
	    echo '</pre>';

	} catch (Exception $e) {
	    echo $e->getMessage(); //Boring error messages from anything else!
	}

}



?>
