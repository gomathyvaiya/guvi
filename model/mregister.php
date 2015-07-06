<?php
session_start();

$date = date('d.m.Y h:i:s'); 
include('header.php');
define("PBKDF2_HASH_ALGORITHM", "sha512");

if(isset($_POST['myData'])) {
	//echo $_POST['myData'];exit;
	$result = json_decode($_POST['myData']);
	$name=$result->name;
	$user_name = $result->email;
	$password  = md5($result->password);
	
	
	//$email=$result->email;
	
	$lang1=$result->lang1;
	$skill=$result->skill;
	$usertype=$result->mentor_hide;
	$ip_add=$_SERVER['REMOTE_ADDR'];
	$result= array();
	$hashval=hash(PBKDF2_HASH_ALGORITHM, $user_name);
	
	  $arr = array('email' => $user_name, 'password' => $password, 'name' => $name, 'language' => $lang1, 'skill' => $skill, 'usertype' => $usertype, 'hashval' => $hashval);

$mydatajson=json_encode($arr);
	 //$created=date("Y-m-d H:i:s");
	 $timestamp=strtotime(date("Y-m-d H:i:s"));

	
	$sql = "SELECT hash,language,name from userdetails where userid =?";
	$sql1="INSERT INTO `userdetails`(`userid`,`password`,`mydatajson`,`name`,`hash`,`language`,`skills`,`usertype`,`created`,`modified`) VALUES (?,?,?,?,?,?,?,?,?,? )";
	$sql2="INSERT INTO `useranalyst`(`userid`,`hash`,`ipaddress`) VALUES (?,?,? )";
	$sql5="SELECT id from userdetails where userid =?";
	$sql4="INSERT INTO `userprofile`(`hash`,`username`,`email`,`created`,`modified`) VALUES (?,?,?,?,? )";
	$sql3 = "SELECT name from userdetails where userid =?";
			error_log($date."---Prepare mysqli\n", 3, "log/my-errors.log");
		  if($stmt = $mysqli -> prepare($sql)) 
		  {
			  $stmt -> bind_param('s', $user_name);
			  $stmt -> execute();
			  $stmt -> bind_result($res1,$res2,$profilename);
			  $stmt -> fetch();
			  $stmt -> close();
			  error_log($date."---Check not empty hash\n", 3, "log/my-errors.log");
			  if(!empty($res1)){
			  	
					$result['hash'] = $res1;
					if(empty($res2)){
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
					error_log($date."---Check empty hash\n", 3, "log/my-errors.log");
			if(empty($res1))
			{		
				if($stmt = $mysqli -> prepare($sql2)) 
				{
				  $stmt -> bind_param('sss',$user_name,$hashval,$ip_add);
				  $stmt -> execute();
				  $stmt -> close();	
				}
				
				error_log($date."---prepare st for execute data to userdetails\n", 3, "log/my-errors.log");
				if($stmt = $mysqli -> prepare($sql1)) {
							  $stmt -> bind_param('ssssssssss',$user_name,$password,$mydatajson,$name,$hashval, $lang1,$skill,$usertype,$timestamp,$timestamp);
							  $stmt -> execute();
							  $stmt -> close();
							  
							$result['hash'] = $hashval;
							if(empty($res2)){
								$result['lang'] = "empty";
							}else{
								$result['lang'] = $res2;
							}			
							if($stmt = $mysqli -> prepare($sql5)) 
					  		{
								  $stmt -> bind_param('s', $user_name);
								  $stmt -> execute();
								  $stmt -> bind_result($id);
								  $stmt -> fetch();
								  $stmt -> close();
							}
							if($stmt = $mysqli -> prepare($sql4)) 
							{
							  $stmt -> bind_param('sssss',$hashval,$name,$user_name,$timestamp,$timestamp);
							  $stmt -> execute();
							  $stmt -> close();	
							}error_log($date."---send result data to js file\n", 3, "log/my-errors.log");
							 error_log("==========END================\n", 3, "log/my-errors.log");
							echo var_export(json_encode($result));
							//echo($hashval);				  
						}
			}		
		  }
		  else
		  {
		   echo "Error fetching user info";
		  }
	}

?>
