<?php
//session_start();
include 'header.php';

$result = json_decode($_POST['myData'],1); 

$qno=$result['qno'];
$ans1 = $result['ans1'];
$ans2 = $result['ans2'];
$ans3 = $result['ans3'];
$ans4 = $result['ans4'];
$ans5 = $result['ans5'];
$email= $result['mail'];

//var_dump($result);exit;
$created=strtotime(date("Y-m-d H:i:s"));
$sql = "INSERT INTO assesmentanswers(`email`,`question_id`,`answer1`, `answer2`, `answer3`, `answer4`, `answer5`,`created`) VALUES (?,?,?,?,?,?,?,? )";

// $mysqli  is db connec variable.

if($stmt = $mysqli -> prepare($sql)) {
	 $stmt -> bind_param('ssssssss',$email, $qno,$ans1, $ans2, $ans3, $ans4, $ans5,$created);
	 $stmt -> execute();
	 $stmt -> close();

	}
	echo ($result);
?>
