<?php
include 'header.php';
if(isset($_POST['myData'])) 
{	
	$result = json_decode($_POST['myData']);

	if($result->type=='mentor_approve')
	{
		$email = $result->email;
		$comment = $result->comment;
		$status=1;
		$modified=strtotime(date("Y-m-d H:i:s"));
		$sql="UPDATE assesmentanswers set status = ? , comments = ? , modified = ? where email= ?";	
		if($stmt = $mysqli -> prepare($sql)) 
		{
			$stmt -> bind_param('isis',$status,$comment,$modified,$email);
			$stmt -> execute();
			$stmt -> close();
			echo"Updated";	
		}

	} //'mentor_approve'

	if($result->type=='mentor_reject')
	{
		$email = $result->email;
		$comment = $result->comment;
		$status=2;
		$modified=strtotime(date("Y-m-d H:i:s"));
		$sql="UPDATE assesmentanswers set status = ? , comments = ?, modified = ? where email= ?";	
		if($stmt = $mysqli -> prepare($sql)) 
		{
			$stmt -> bind_param('isis',$status,$comment,$modified,$email);
			$stmt -> execute();
			$stmt -> close();
			echo"Updated";		
		}
	} //'mentor_reject'




}

if(isset($_POST["type"]))
{

	if($_POST["type"]=="bootcamp_details")
	{
		$id=$_POST["dat"];
	$result1=mysqli_query($mysqli,"SELECT email,name,phone,mode_of_payment from bootcamp_register where bootcamp_id='$id' ");
		$array1=array();
		while($data1 = mysqli_fetch_array($result1,MYSQL_ASSOC))
		{   
		   $array1[]=$data1;
		}
		echo json_encode($array1);
	}  
	if($_POST["type"]=="bootcamp_details_name")
	{
		$id=$_POST["dat"];
	$result1=mysqli_query($mysqli,"SELECT bootcamp_name from bootcamp_masters where id='$id' ");
		$array1=array();
		$data1 = mysqli_fetch_array($result1,MYSQL_ASSOC);   
		   $array1[]=$data1;
		echo json_encode($array1);
	} 
	if($_POST["type"]=="mentor_details")
	{
		$id=$_POST["dat"];
		
	$result1=mysqli_query($mysqli,"SELECT a.email,a.answer1,a.answer2,a.answer3,a.answer4,a.answer5,q.Question1,q.Question2, q.Question3,q.Question4,q.Question5 from assesmentanswers a inner JOIN assesmentquestions q on a.email='$id' and q.Question_No=a.question_id group by a.question_id");
		$array1=array();
		while($data1 = mysqli_fetch_array($result1,MYSQL_ASSOC))
		{   
		   $array1[]=$data1;
		}
	$result2=mysqli_query($mysqli,"SELECT name from userdetails where userid='$id'");
		$data2 = mysqli_fetch_array($result2,MYSQL_ASSOC);
		 $array1[]=$data2;
		echo json_encode($array1);
	}  
	

}
else
{
	if ($_GET['type']=="bootcamp"){
		$result=mysqli_query($mysqli,"SELECT m.id,m.bootcamp_name,DATE_FORMAT(m.event_date,'%d-%b-%Y') event_date, m.total_count,r.total_register from bootcamp_masters m left join (SELECT count(bootcamp_id) as total_register ,bootcamp_id FROM `bootcamp_register` group by bootcamp_id ) r on m.id=r.bootcamp_id ORDER BY m.event_date ASC");
		$array=array();
		while($data = mysqli_fetch_array($result,MYSQL_ASSOC))
		{   
		   $array[]=$data;
		}
		echo json_encode($array);

	}
	if ($_GET['type']=="mentor"){


	$result=mysqli_query($mysqli,"SELECT u.name,u.userid,u.created,u.language,a.email,a.status,a.comments from userdetails u left join assesmentanswers a on u.userid=a.email where u.usertype='1'");
	$array=array();
	while($data = mysqli_fetch_array($result,MYSQL_ASSOC))
	{   
	   $array[]=$data;
	}
	echo json_encode($array);
	}

}


?>
