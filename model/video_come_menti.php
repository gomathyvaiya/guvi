<?php

require_once("header.php");
require_once("genfunctions.php");

if(isset($_POST['type']))

{

$userid=request_get('mail1');
	//echo $userid;exit;
//$qry1="SELECT * FROM `bootcamp_masters` where id='$id'";
$res=mysqli_query($mysqli,"SELECT * FROM `userdetails` WHERE userid='$userid'");	
	//$res=mysqli_query($qry1) or die("error");
$array= array();
while($row=mysqli_fetch_array($res,MYSQL_ASSOC))
		
	{   
		   $array[]=$row;
		}
		echo json_encode($array);

	
}

?>
