<?php

require_once("header.php");
if(isset($_POST['type']))

{

	$id=$_POST['dat'];
	$res=mysqli_query($mysqli,"SELECT id,bootcamp_name,DATE_FORMAT(event_date,'%d/%m/%Y') event_date,price,total_count from bootcamp_masters  where id='$id'");		
	$array= array();
	while($row=mysqli_fetch_array($res,MYSQL_ASSOC))
		{   
		   $array[]=$row;
		}
		echo json_encode($array);
	
}
?>
