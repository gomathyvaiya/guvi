function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
} 
 

var mail=gsession.getSession('email');
$(document).on('click','#approve', function () {

        var comment=$('#comment').val(); 
	var emails=$('#useremail').text();

	if(comment!=''){	
	var vmap={};
	vmap['email'] = mail;
	vmap['comment']=comment;
	vmap['type']='mentor_approve';
		ajaxcall.send_data(vmap,'mentor_approve',function(result){

window.location = "mentor_admin.html"; 
		       
        });
	}
	else
	alert("Please Fill the Comments");
					   
});

$(document).on('click','#reject', function () {
	
        var comment=$('#comment').val(); 
//var mail=gsession.getSession('email');
	if(comment!=''){
	var vmap={};
	vmap['email'] = mail;
	vmap['comment']=comment;
	vmap['type']='mentor_reject';
		ajaxcall.send_data(vmap,'mentor_reject',function(result){ 
		window.location = "mentor_admin.html";        
        });
	}
	else
	alert("please Fill Comments");
					   
});
	var arr=new Array();
	var dat=gsession.getSession('email'); 
if(dat!=""){	
	var data = { dat:dat,type:'mentor_details',
		   }
			$.ajax({                                                                            
		    		type: "POST",
		    		url: "model/mentor_admin.php",
		    		data: data,
		    		success: function(output) { 
				var output=JSON.parse(output);
				
					for(var prop in output){
					arr.push(output[prop]);
					}
					var tr='';
					var email,uname;
					var q1='',q2,q3,q4,q5,a1,a2,a3,a4,a5;
					$.each(arr,function(index,value){ 
					//email=value.email;
					if(q1=='')
					{
					
						q1=value.Question1;
						a1=value.answer1;
						q2=value.Question2;
						a2=value.answer2;
						q3=value.Question3;
						a3=value.answer3;
						q4=value.Question4;
						a4=value.answer4;
						q5=value.Question5;
						a5=value.answer5;
				        }
					uname=value.name;					
					 });
		tr += "<label for='q1'>Question1</label><div class='qus'>" +q1+"</div>";
		tr += "<div class='ans'><label for='q1'>Answer1 : </label>" +a1+"&nbsp </div>";
		tr += "<label for='q2'>Question2</label><div class='qus'>" +q2 +"</div>";
		tr += "<div class='ans'><label for='a2'>Answer2 : </label>" +a2 +" &nbsp</div>";
		tr += "<label for='q3'>Question3</label><div class='qus'>" +q3 +"</div>";
		tr += "<div class='ans'><label for='a3'>Answer3 : </label>" +a3 +" &nbsp</div>";
		tr += "<label for='q4'>Question4</label><div class='qus'>" +q4 +"</div>";
		tr += "<div class='ans'><label for='a4'>Answer4 : </label>" +a4 +"&nbsp </div>";
		tr += "<label for='q5'>Question5</label><div class='qus'>" +q5 +"</div>";
		tr += "<div class='ans'><label for='a5'>Answer5 : </label>" +a5 +" &nbsp</div>";
		tr += "<div class='comment-box'><h4>Evaluate the Result</h4>";
	tr +="<div class='form-group input-group'><span class='input-group-addon'><i class='fa fa-tag'></i></span>";
        tr += "<textarea id='comment' class='form-control' placeholder='Enter Your Comments'></textarea></div>";
	tr += "<input type='button' id='approve' value='Approve' class='btn btn-success' />&nbsp&nbsp";
	tr += "<input type='button' id='reject' value='Reject' class='btn btn-success' /></div>";
					$('#qus_ans').append(tr);
					$('#username').append(uname);
					
	
				}
				});
		
	}//dat!=""

	



