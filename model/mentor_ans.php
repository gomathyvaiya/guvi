<?php
include 'header.php';
$email=$_POST['dat'];
if($_POST['type'] == 'mail')
{
$result=mysqli_query($mysqli,"select * from assesmentanswers where email='$email'");
$array=array();
while($data = mysqli_fetch_array($result,MYSQL_ASSOC))
{   
   $array[]=$data;
}
}
echo json_encode($array);
?>
