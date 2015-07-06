<?php
require_once('dbcon.php');
if(isset($_POST["email"]))
{

	$email =  strtolower($_POST["email"]); 
	$sql="SELECT * FROM notify WHERE email='$email'";
	$results = mysql_query($sql);
	$email_exist = mysql_num_rows($results); 
		if($email_exist) {
			echo "true";
		}else{
			echo "false";
		}
	
	//close db connection
		//mysqli_close($connecDB);
}
?>

