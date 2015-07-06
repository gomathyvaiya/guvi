<?php
   require_once("dbcon.php");
	if($_POST['type'] == 'skill')
		{
			$career=$_POST['career'];
			$userid=$_POST['mail'];
			$usertype=1;
			
			$sql = "UPDATE `userdetails` SET skills='$career', usertype='$usertype' WHERE userid='$userid'";
			mysql_query($sql);
			echo $usertype;
		}
?>
