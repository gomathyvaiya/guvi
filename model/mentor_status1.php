<?php
ob_start();
include 'header.php';
if($_POST['type'] == 'reject')
{

$email=$_POST['dat'];
$result=mysqli_query($mysqli,"update userdetails set status=2 where userid='$email'");
}
echo "updated";


?>
