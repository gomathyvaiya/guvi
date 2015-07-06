<?php
include 'header.php';



if ($_GET['type']=="bootcamp"){
		$result=mysqli_query($mysqli,"SELECT id,bootcamp_name,DATE_FORMAT(event_date,'%d/%m/%Y') event_date,price,total_count from bootcamp_masters ");
		$array=array();
		while($data = mysqli_fetch_array($result,MYSQL_ASSOC))
		{   
		   $array[]=$data;
		}
		echo json_encode($array);

	}

?>

