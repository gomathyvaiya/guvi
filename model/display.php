<?php
include 'header.php';
/*$x = $_POST['id'];
$safex = mysql_real_escape_string($x);*/
/*$result=mysqli_query($mysqli,"select * from assesmentquestions");*/
$result=mysqli_query($mysqli,"SELECT * FROM assesmentquestions ORDER BY RAND() LIMIT 1");
$array=array();
while($data = mysqli_fetch_array($result,MYSQL_ASSOC))
{   
   $array[]=$data;
}
echo json_encode($array);
?>
