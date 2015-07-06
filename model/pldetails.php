<?php
include('header.php');
$name = $_POST['fname'];
$playlistname = $_POST['playlistname'];
$sql = "SELECT playlistid from LandingPage where Name=?";

/*common*/
$mysqli = new mysqli($hostname, $username, $password, $database);

if(mysqli_connect_errno()) {
      echo "Connection Failed: " . mysqli_connect_errno();
      exit();
   }

   if($stmt = $mysqli -> prepare($sql)) {

      $stmt -> bind_param('s', $playlistname);

      $stmt -> execute();
      $stmt -> bind_result($result);
      $stmt -> fetch();
      $stmt -> close();
	  
	  
	  
		 echo $result;
	  }
	
?>