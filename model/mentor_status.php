<?php
ob_start();
include 'header.php';
if($_POST['type'] == 'accept')
{

$email=$_POST['dat'];
$result=mysqli_query($mysqli,"update userdetails set status=1 where userid='$email'");
}
echo "updated";


?>
