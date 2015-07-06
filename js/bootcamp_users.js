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


$(document).ready(function(){
	$("#email").blur(function(e) {

        var useremail = $("#email").val();
//alert(useremail);

	if(!validateFreeEmail(useremail)){
		
		document.getElementById('email').value='';
		
		document.getElementById('email').placeholder = "E-mail id is not valid";
		//alert("hai");
		$('#email').focus();
		
	}
		
       
    });
var dat=getUrlParameter('id');

  document.getElementById('apply').focus();
	
				var data = { dat:dat,
				type:'drop',
				}
		$.ajax({
                                                                                                 
	    		type: "POST",
	    		url: "model/bootcamp.php",
	    		data: data,
	    		success: function(output) {

			 var obj=$.parseJSON(output); 
            		$('#event_date').val(obj.date);
			$('#price').val(obj.price);  
			$("#apply").html(obj.option);
				//alert(output);
			$(".select").val();	
			},


		});
 
}); 
 $('#apply').change(function(){
var dat1=getUrlParameter('id');

		var id=$("#apply").val();
if(id!='Apply_For'){
			var data = {
				type:'event_date',
				id:id,
				dat2:dat1
				}
		$.ajax({
                                                                                                 
	    		type: "POST",
	    		url: "model/bootcamp.php",
	    		data: data,
	    		success: function(output) {
			 var obj=$.parseJSON(output); 
            		$('#event_date').val(obj.date); 
            		$('#price').val(obj.price); 
			},


		});
}
else{
$('#event_date').val(''); 
$('#price').val(''); 
}

}); 

 $("#bregister").click(function () {
		
       signup();
    });
function signup(){
		var bootcamp=$('#apply option:selected').val();
//var bootcamp=document.getElementById('apply').value;
//var event=document.getElementById('event_date').value;
//var price=document.getElementById('price').value;
var email=document.getElementById('email').value;
var name=document.getElementById('name').value;
var phone=document.getElementById('phone').value;
var payment=document.getElementById('payment').value;
		
		if(validate_name()){

			if(validateFreeEmail(email)){

				if(validate_phone()){
					if(validate_boot()){
						if(validate_payment()){
				
							getdetails(bootcamp,name,email,phone,payment);
						}
					}
				}
				
			}
		}
	}
function validateFreeEmail(email)
{
	var email=document.getElementById('email').value;
	var reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
	if (reg.test(email)){
		
		return true;
	}
	else{
		document.getElementById('email').focus();
		document.getElementById('email').value='';
		
		document.getElementById('email').placeholder = "E-mail id is not valid";
		return false;
	}
} 
function validate_name(){
//alert("hai");
	var name =document.getElementById('name').value;
	if(name==''){
		document.getElementById('name').value='';
		document.getElementById('name').placeholder="Name is required";
		
	   document.getElementById('name').focus();
	}else{
		return true;
	}
}

function validate_phone(){
	

	var phone=document.getElementById('phone').value;
	
	if(phone=="")
		{
			document.getElementById('phone').placeholder="Mobile Number is required";
			
	   		document.getElementById('phone').focus();
			return false;
		}
		
		else if((phone.length < 10))
				{
				document.getElementById('phone').value='';
				document.getElementById('phone').placeholder="Enter The Valid Mobile Number";
				
		   		document.getElementById('phone').focus();
				
				return false;
				}
		
		else{
				return true;
			}

}
 $("#phone").keypress(function (e) {
     //if the letter is not digit then display error and don't type anything
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
       document.getElementById('phone').placeholder="Enter The Valid Mobile Number";
	
               return false;
    }
   });
 
function validate_boot(){

		var boot=document.getElementById('apply').value;
		if(boot=="Apply_For"){
			document.getElementById('apply').focus();
				return false;
			}
		else{
			return true;
			}
}
function validate_payment(){

		var pay=document.getElementById('payment').value;
		if(pay=="Mode_of_Payment"){
			document.getElementById('payment').focus();
				return false;
			}
		else{
			return true;
			}
}
	
/*$(".option1").click(function () {
alert("hai");
		document.getElementById('price').value='';
		document.getElementById('event_date').value='';
       
    });*/
 function getdetails(bootcamp,name,email,phone,payment) {
    'use strict';
    
	var vmap={};
	vmap['bootcamp'] = bootcamp;
	
	vmap['name']= name;
	vmap['email']= email;
	vmap['phone']=phone;
	vmap['payment']=payment;
		ajaxcall.send_data(vmap,'bregister',function(output){ 
		//alert(output);
		var username=output; 
        output = output.substring(1, output.length - 1);
        var t = JSON.stringify(output);	
		
				
						$('#spinner').show();	
						$('#bregister').prop('disabled', 'disabled');
						var data={
							type:'bootcamp',
							var_1:username,
						}

				      $.ajax({
						type: "POST",
		        			url: "model/sendmail1.php",
		        			data: data,
		        			success: function(output){
									$('#spinner').hide();
							window.location = "after_bootcamp.html"; 
						},			

					   });		
			
	       
        });
        
} 

