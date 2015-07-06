<?php

$db_username = 'root';
$db_password = 'goodday123';
$db_name = 'guvi';
$db_host = 'localhost';

if(isset($_POST["myData"]))
{
	$result = json_decode($_POST['myData']);
	$username = $result->username;


$connecDB = mysqli_connect($db_host, $db_username, $db_password,$db_name)or die('could not connect to database');
$username =  strtolower($username); 
$results = mysqli_query($connecDB,"SELECT * FROM userdetails WHERE userid='$username'");
$username_exist = mysqli_num_rows($results); 

	if($username_exist) {
		$a='notavailable';
		$b='User Already Exists!&nbsp;&nbsp;<a href="#">Forgot password?</a>';
		$data=array('img'=>$a, 'text'=>$b);
		echo json_encode($data); 
	}else{
		$a='available';
		$b='';
		$data=array('img'=>$a, 'text'=>$b);
		echo json_encode($data); 
	}
	
	//close db connection
	mysqli_close($connecDB);
}
?>

