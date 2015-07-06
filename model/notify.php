<?php
session_start();
require_once('header.php');
$created_date = date('Y-m-d H:i:s'); 
if(isset($_POST['myData'])) 
{	
	$result = json_decode($_POST['myData']);
	$email = $result->email;
	$sql="INSERT INTO `notify`(`email`) VALUES (?)";	
	if($stmt = $mysqli -> prepare($sql)) 
	{
		$stmt -> bind_param('s', $email);
		$stmt -> execute();
		$stmt -> close();
		echo"inserted";		
	}
}


?>
