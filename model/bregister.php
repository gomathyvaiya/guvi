<?php
session_start();
		$result = json_decode($_POST['myData'],1); 
		$bootcamp=$result['bootcamp'];
		 
		
		 $name=$result['name'];
		 $email=$result['email'];
		 $phone=$result['phone'];
		 $payment=$result['payment'];


//var_dump($result);

		require_once("dbcon.php");

		$created=strtotime(date("Y-m-d H:i:s"));

		$sql="INSERT INTO `bootcamp_register` (`id`, `bootcamp_id`, `email`, `name`, `phone`, `mode_of_payment`, `created`) VALUES (NULL, '$bootcamp', '$email', '$name', '$phone', '$payment', '$created')";

		

		//mysqli_query($con,"SELECT * FROM Persons");

		mysql_query($sql) or die("Error : ".mysql_error());

		// $mysqli  is db connec variable.
echo $email;

?>

