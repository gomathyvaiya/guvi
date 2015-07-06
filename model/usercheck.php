<?php
	include('header.php');
	include("class.PHPMailer.php");

	//Post Parameters
	$umail = $_POST['emails'];
	$pwd = $_POST['password'];
	
	//Key used for encrypting password
	//$cryptKey  = 'qJB0rGaetTREUB1xGUVI05fyCp';
	$pwd  =md5($_POST['password']);

	//Check in db whether this user id and password exists 
	$sql = "SELECT count(*) from userdetails where userid=? AND password=?";	
	
	
	if($stmt = $mysqli -> prepare($sql)) {
		$stmt -> bind_param('ss', $umail,$pwd);//Both userid and pwd are strings
		$stmt -> execute();
		$stmt -> bind_result($result);
		$stmt -> fetch();
		$stmt -> close();
		echo $result;
	}
	
	/*if($pwd!=''){
		if ($pwd=='1') {
			$sql = "SELECT password from userdetails where userid=?";
		}else{
			$cryptKey  = 'qJB0rGaetTREUB1xGUVI05fyCp';
			$pwd  = base64_encode( mcrypt_encrypt( MCRYPT_RIJNDAEL_256, md5( $cryptKey ), $pwd, MCRYPT_MODE_CBC, md5( md5( $cryptKey ) ) ) );

			$sql = "SELECT count(*) from userdetails where userid=? AND password=?";
		}
	}else{
		$sql = "SELECT count(*) from userdetails where userid=?";
	}
	if($stmt = $mysqli -> prepare($sql)) {
		if($pwd!=''){
			if ($pwd=='1') {
				$stmt -> bind_param('s', $umail);
			}else{
				$stmt -> bind_param('ss', $umail,$pwd);
			}
		}else{
			$stmt -> bind_param('s', $umail);
		}

		//var_dump($sql);
		$stmt -> execute();
		$stmt -> bind_result($result);
		$stmt -> fetch();
		$stmt -> close();
		//print_r($result);exit;
		if ($pwd=='1') {
			if($result==''){
				$sql_user = "SELECT count(*) from userdetails where userid=?";
				if($stmt = $mysqli -> prepare($sql_user)) {
					$stmt -> bind_param('s', $umail);
					$stmt -> execute();
					$stmt -> bind_result($count);
					$stmt -> fetch();
					$stmt -> close();
					if($count){
						echo "fbmail";
						exit(0);
					}else{
						echo $result;
						exit(0);
					}
				}	
			}
			$cryptKey  = 'qJB0rGaetTREUB1xGUVI05fyCp';
			$userPwd  = rtrim( mcrypt_decrypt( MCRYPT_RIJNDAEL_256, md5( $cryptKey ), base64_decode( $result ), MCRYPT_MODE_CBC, md5( md5( $cryptKey ) ) ), "\0");
			$mail = new PHPMailer();

			$mail->IsSMTP();                                      // set mailer to use SMTP
			//$mail->Host = "smtp.gmail.com";  // specify main and backup server
			$mail->SMTPAuth = true;     // turn on SMTP authentication
			//$mail->SMTPSecure = "tls/ssl"; 
			$mail->Username = "guvitest@gmail.com";  // SMTP username
			$mail->Password = "guviguvi"; // SMTP password
			$mail->Port       = 587; 

			$mail->From = $umail;
			$mail->AddAddress($umail, "");
			//$mail->AddAddress("ellen@example.com");                  // name is optional
			//$mail->AddReplyTo("info@example.com", "Information");

			$mail->WordWrap = 50;                                 // set word wrap to 50 characters
			$mail->IsHTML(true);                                  // set email format to HTML
			$mail->Subject = "GUVI-Password Recovery";
			//$mail->AddEmbeddedImage('../img/guvi_logo.png', 'logo_2u');
			$message="<body><img src='../img/guvi_logo.png'/><br>Mail ID:&nbsp;".$umail."<br>Password:".$userPwd;
			$mail->MsgHTML($message);
//			$mail->Body    = $message;
			$mail->SMTPSecure = 'tls';
			$mail->Host = "74.125.129.108";

			if(!$mail->Send())
			{
			   echo "Message could not be sent. <p>";
			   echo "Mailer Error: " . $mail->ErrorInfo;
			   exit;
			}
			echo $result;	
		}else{
			echo $result;
		}
	}
	*/
?>
