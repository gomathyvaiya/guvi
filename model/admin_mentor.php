<?php
include 'header.php';

$result=mysqli_query($mysqli,"select * from userdetails where usertype='1'");
$array=array();
while($data = mysqli_fetch_array($result,MYSQL_ASSOC))
{   
   $array[]=$data;
}
echo json_encode($array);
?>
