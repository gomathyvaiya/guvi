<?php
require_once("dbcon.php");
if($_POST['type'] == 'drop')
{
$data=$_POST['dat'];
$date='';
$price='';
$option='<select><option>Apply_For</option>';
 

			$qry= "SELECT bcm.id, bcm.bootcamp_name, DATE_FORMAT(bcm.event_date,'%d-%b-%Y') event_date, bcm.price, bcm.total_count, count( bcr.id ) AS bcr_reg_count FROM `bootcamp_masters` bcm LEFT JOIN `bootcamp_register` bcr ON bcm.id=bcr.bootcamp_id WHERE DATE(bcm.event_date) >= CURDATE() GROUP BY bcm.id ORDER BY bcm.event_date ASC"; 
		    	$result=mysql_query($qry) or die(mysql_error());
        
	      		while($row= mysql_fetch_array($result)){
	      				$id=$row["id"]; 
	      				$bootcamp=$row["bootcamp_name"];
					if($data==$id){
	      				$option .= "<OPTION class='select' VALUE=".$id." selected>".$bootcamp.'</option>';
					$date    = $row["event_date"];
					$price   = $row["price"];
					}
					else
					{
					$option .= "<OPTION class='select' VALUE=".$id.">".$bootcamp.'</option>';
					}

	      	               }
  			$option .='</select>';
			$data=array("date"=>$date, "price"=>$price , "option"=>$option);
			echo json_encode($data); 

}
if($_POST['type']=='event_date')
{
$data=$_POST['dat2'];
   $id=$_POST['id'];
			$qry1= "select event_date,price from bootcamp_masters where id=$id"; 
		    	$result1=mysql_query($qry1) or die(mysql_error());
			$row= mysql_fetch_array($result1);
			
			$event_date=$row["event_date"];
			$price=$row["price"];
			$data=array("date"=>$event_date, "price"=>$price);
			echo json_encode($data); 
}	
?>

