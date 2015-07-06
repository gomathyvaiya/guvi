<?php

require_once('genfunctions.php');

if(request_get('type') == 'mentor')
{
	$useremail=request_get('var_1');

	//$useremail="projects@grinfotech.com";

	$subject="Mentorship";

	$msg="welcome to guvi";

	require_once 'phpmailer/class.phpmailer.php';
	require_once 'phpmailer/class.smtp.php';

	$mail = new PHPMailer(); 
	$mail->IsSMTP(); 

	try{
	
	    $mail->SMTPDebug  = 1;                     
	    $mail->SMTPAuth   = true;                  
	    $mail->SMTPSecure = "ssl" ;
	    $mail->From	      ="projects@grinfotech.com";
	    $mail->Timeout    = 60;          
	    $mail->Host       = "smtp.gmail.com";      
	    $mail->Port       = 465;                  
	    $mail->Username   = 'projects@grinfotech.com';
	    $mail->Password   = 'Bgt56yhN@';           
	    $mail->AddAddress($useremail);//RECIPIENT
	    $mail->SetFrom('projects@grinfotech.com', 'Admin Team');//IDK WHAT 'THIS' IS FOR
	    $mail->AddReplyTo("projects@grinfotech.com", "Admin Email");//FOR THE 'REPLY-TO' FIELD
	    $mail->Subject = $subject;
	    $mail->MsgHTML($msg);

	    $mail->Send();

  	    echo "Mail Send Successfully!";

	}catch (phpmailerException $e) {

	    echo $e->errorMessage(); //Pretty error messages from PHPMailer
	    echo $mail->Host;

	} catch (Exception $e) {
	    echo $e->getMessage(); //Boring error messages from anything else!
	}

}

else if(request_get('type') == 'bootcamp')
{
	$useremail=request_get('var_1');

	//$useremail="projects@grinfotech.com";

	$subject="Bootcamp";

	$msg="welcome to guvi";

	require_once 'phpmailer/class.phpmailer.php';
	require_once 'phpmailer/class.smtp.php';

	$mail = new PHPMailer(); 
	$mail->IsSMTP(); 

	try{
	
	    $mail->SMTPDebug  = 1;                     
	    $mail->SMTPAuth   = true;                  
	    $mail->SMTPSecure = "ssl" ;
	    $mail->From	      ="projects@grinfotech.com";
	    $mail->Timeout    = 60;          
	    $mail->Host       = "smtp.gmail.com";      
	    $mail->Port       = 465;                  
	    $mail->Username   = 'projects@grinfotech.com';
	    $mail->Password   = 'Bgt56yhN@';           
	    $mail->AddAddress($useremail);//RECIPIENT
	    $mail->SetFrom('projects@grinfotech.com', 'Admin Team');//IDK WHAT 'THIS' IS FOR
	    $mail->AddReplyTo("projects@grinfotech.com", "Admin Email");//FOR THE 'REPLY-TO' FIELD
	    $mail->Subject = $subject;
	    $mail->MsgHTML($msg);

	    $mail->Send();

  	    echo "Mail Send Successfully!";

	}catch (phpmailerException $e) {

	    echo $e->errorMessage(); //Pretty error messages from PHPMailer
	    echo $mail->Host;

	} catch (Exception $e) {
	    echo $e->getMessage(); //Boring error messages from anything else!
	}

}
else if(request_get('type') == 'video')
{
	$useremail=request_get('var_1');

	//$useremail="projects@grinfotech.com";

	$subject="Video";

	$msg="welcome to guvi";

	require_once 'phpmailer/class.phpmailer.php';
	require_once 'phpmailer/class.smtp.php';

	$mail = new PHPMailer(); 
	$mail->IsSMTP(); 

	try{
	
	    $mail->SMTPDebug  = 1;                     
	    $mail->SMTPAuth   = true;                  
	    $mail->SMTPSecure = "ssl" ;
	    $mail->From	      ="projects@grinfotech.com";
	    $mail->Timeout    = 60;          
	    $mail->Host       = "smtp.gmail.com";      
	    $mail->Port       = 465;                  
	    $mail->Username   = 'projects@grinfotech.com';
	    $mail->Password   = 'Bgt56yhN@';           
	    $mail->AddAddress($useremail);//RECIPIENT
	    $mail->SetFrom('projects@grinfotech.com', 'Admin Team');//IDK WHAT 'THIS' IS FOR
	    $mail->AddReplyTo("projects@grinfotech.com", "Admin Email");//FOR THE 'REPLY-TO' FIELD
	    $mail->Subject = $subject;
	    $mail->MsgHTML($msg);

	    $mail->Send();

  	    echo "Mail Send Successfully!";

	}catch (phpmailerException $e) {

	    echo $e->errorMessage(); //Pretty error messages from PHPMailer
	    echo $mail->Host;

	} catch (Exception $e) {
	    echo $e->getMessage(); //Boring error messages from anything else!
	}

}


?>
