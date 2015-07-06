<?php

require_once("header.php");

		$result = json_decode($_POST['myData'],1); 
		$id=$result['id'];
		$name=$result['name'];
		$event=$result['event'];
		$price=$result['price'];
		$count=$result['count'];
		 $created=strtotime(date("Y-m-d H:i:s"));

//var_dump($result);
if($event!='')
{
		

		$date=date('y-m-d',strtotime($event));
}
if($id==0)
{
		$sql="INSERT INTO `bootcamp_masters`(`bootcamp_name`,`event_date`,`price`,`total_count`,`created`,`modified`) VALUES (?,?,?,?,?,?)";
//mysql_query($sql);

					if($stmt = $mysqli -> prepare($sql)) {
							  $stmt -> bind_param('ssssii',$name,$date,$price,$count,$created,$created);
							  $stmt -> execute();
							  $stmt -> close();
							 
											  
						}

echo "inserted";
}
else
{
require_once("dbcon.php");
$sql1="UPDATE `bootcamp_masters` SET  bootcamp_name='$name',
				event_date='$date',
				price='$price',
							
				total_count='$count' WHERE id='$id'";
/*$sql="UPDATE bootcamp_masters set bootcamp_name = ? , event_date = ? ,price= ? ,total_count= ?  where id= ?";	
	if($stmt = $mysqli -> prepare($sql)) 
	{
		$stmt -> bind_param('ssii',$name,$date,$price,$count);
		$stmt -> execute();
		$stmt -> close();
		echo"Updated";		
	}*/
mysql_query($sql1);
echo "updated";
}
?>

