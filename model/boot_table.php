<?php
include 'header.php';
if ($_GET['type']=="bootcamp"){
		$result=mysqli_query($mysqli,"SELECT bcm.id, bcm.bootcamp_name, DATE_FORMAT(bcm.event_date,'%d-%b-%Y') event_date, bcm.price, bcm.total_count, count( bcr.id ) AS bcr_reg_count FROM `bootcamp_masters` bcm LEFT JOIN `bootcamp_register` bcr ON bcm.id=bcr.bootcamp_id WHERE DATE(bcm.event_date) >= CURDATE() GROUP BY bcm.id ORDER BY bcm.event_date ASC");
		$array=array();
		while($data = mysqli_fetch_array($result,MYSQL_ASSOC))
		{   
		   $array[]=$data;
		}
		echo json_encode($array);

	}
?>
