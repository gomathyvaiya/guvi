<?php

require_once("dbcon.php");
if($_GET['type']=='delete')
{

	$id=$_GET['id'];

	$qry="DELETE FROM `bootcamp_masters` WHERE id='$id'";
	$res=mysql_query($qry) or die(mysql_error());
	//echo "deleted successfully!";
header("location:../config_boot.html");
exit;
	
}
?>
