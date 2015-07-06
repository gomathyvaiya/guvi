<?php
session_start();
include('header.php');
//include('functions.php'); //contains pwd generation function
define("PBKDF2_HASH_ALGORITHM", "sha512");
//converting ip address as a long value 
$ip = ip2long($_SERVER['REMOTE_ADDR']);
 
$result = json_decode($_POST['myData']);			
$user_name = $result->username;
$hashval=hash(PBKDF2_HASH_ALGORITHM, $user_name);
$result= array();
$sql = "SELECT hash,language,name from userdetails where userid =?";
$sql1="INSERT INTO `userdetails`(`userid`,`hash`) VALUES (?,? )";
$sql2="INSERT INTO `useranalyst`(`userid`,`hash`,`ipaddress`) VALUES (?,?,? )";
$sql3 = "SELECT name from userdetails where userid =?";

	  if($stmt = $mysqli -> prepare($sql)) 
	  {
		  $stmt -> bind_param('s', $user_name);
		  $stmt -> execute();
		  $stmt -> bind_result($res1,$res2,$profilename); //Fetching hash,language,name from user details for given user
		  $stmt -> fetch();
		  $stmt -> close();
		  
		  if(!empty($res1)){
			$result['hash'] = $res1;
			if(empty($res2)){				//Checking if language preference has been set
				$result['lang'] = "empty";
			}else{
				$result['lang'] = $res2;
			}
			if(empty($profilename)){
			$result['pname']="empty";
			}else{
			$result['pname']=$profilename;
			}
			echo var_export(json_encode($result));
			}
	}
			//hash value is empty
		/*if(empty($res1))
		{		
			if($stmt = $mysqli -> prepare($sql2)) 
			{
			  $stmt -> bind_param('sss',$user_name,$hashval,$ip);
			  $stmt -> execute();
			  $stmt -> close();	
			}
			
			if($stmt = $mysqli -> prepare($sql1)) {
				  $stmt -> bind_param('ss',$user_name,$hashval);
				  $stmt -> execute();
				  $stmt -> close();
				  
				$result['hash'] = $hashval;
				if(empty($res2)){
				$result['lang'] = "empty";
				}else{
					$result['lang'] = $res2;
				}			
				$_SESSION['username'] = $user_name;
				echo var_export(json_encode($result));
				//echo($hashval);				  
			}
				
				
		}	*/	

			 /*if($stmt = $mysqli -> prepare($sql3)) 
	  {
		  $stmt -> bind_param('s', $user_name);
		  $stmt -> execute();
		  $stmt -> bind_result($uname);
		  $stmt -> fetch();
		  $stmt -> close();
		  
	      if(empty($uname)){
					$result['p_name'] = "empty";
				}else{
					$result['p_name'] = $uname;
				}
				echo var_export(json_encode($result));
		  }*/
	  
	  
	  
	  else
	  {
	   echo "Error fetching user info";
	  }
	
?>
