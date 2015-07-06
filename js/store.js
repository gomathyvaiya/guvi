//$("#after").load("aftertest2.html");
//$("#after").load("aftertest1.html");



$("#submit_answers").click(function(){
	var qno=$("#qno").val();
 	var ans1 = $("#q1").val();
 	var ans2 = $("#q2").val();
 	var ans3 = $("#q3").val();
 	var ans4 = $("#q4").val();
 	var ans5 = $("#q5").val();

 	getdetails(ans1, ans2, ans3, ans4, ans5, qno);
if(ans1!=''||ans2!=''||ans3!=''||ans4!=''||ans5!='')
	{
	
		gsession.setSession('mentor_ans',1);
		gsession.setSession('is_reg_mentor_now','2'); 
		//$("#result").load("aftertest2.html");
		// $(location).attr('href',"aftertest.html");
		//return false;
	}
else
{
		gsession.setSession('mentor_ans',0);
		gsession.setSession('is_reg_mentor_now','2'); 
		//$("#result").load("aftertest1.html");
		//$(location).attr('href',"aftertest1.html");
		//return false;
}
	
/*if(ans1!=''||ans2!=''||ans3!=''||ans4!=''||ans5!='')
	{
		
		
		// $(location).attr('href',"aftertest.html");
		//return false;
	}
else
{
		
		//$(location).attr('href',"aftertest1.html");
		//return false;
}*/
});
 
 function getdetails(ans1, ans2, ans3, ans4, ans5,qno) {

    'use strict';
    //gsession.setSession('name',name);
	var username=gsession.getSession('mail');
 //  var username = "davidd@fmail.com";

        var vmap={};
	vmap['qno'] =qno;
	vmap['ans1'] = ans1;
	vmap['ans2'] = ans2;
	vmap['ans3'] = ans3;
	vmap['ans4'] = ans4;
	vmap['ans5'] = ans5;
	vmap['mail'] = username;//alert(vmap['mail']);

	    ajaxcall.send_data(vmap,'onreg',function(result1){
        result1 = result1.substring(1, result1.length - 1);
        var t = JSON.stringify(result1);  
	
        //$(location).attr('href',"aftertest.html");
	window.location="aftertest.html";
	
        });

}

