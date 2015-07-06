<?php
require_once("dbcon.php");
if($_POST['type']=='event')
{

  	echo "<table>";
	echo "<td value='Date'>Date</td><td value='Title'>Title</td><td value='price'>price</td><td style='border-top:1px solid white;border-right:1px solid white'</td></tr>";
			$qry= "select * from bootcamp_masters"; 
		    	$result=mysql_query($qry) or die(mysql_error());
			while($row= mysql_fetch_array($result)){
			
				echo "<tr>";
				$date=date('M-d',strtotime($row['event_date']));
				echo "<td value=".$date.">".$date."</td>";
				echo "<td value=".$row['bootcamp_name'].">".$row['bootcamp_name']."</td>";

				echo "<td value=".$row['price'].">".$row['price']."</td>";
				echo "<td><a href='bootcamp_register.html?id=".$row['id']. "'type='button' class='btn btn-success'>Apply</button></td>";
				echo "</tr>";
			}
	echo "</table>";
}
	
?>
