 
$(document).ready(function() {
	$("#getNotifyEmailUpBc").show();
	$("#getNotifyEmailUpBcAlExist").hide();
	$("#getNotifyEmailUpBcNotified").hide();
	
	

     $("#submit").click(function() {
         var email = $("#email").val();
         if (email.length < 4) {
             $("#user-result").html('');
             return;
         }

         if (email.length >= 4) {

             $.post('model/checkmail1.php', {
                 'email': email
             }, function(data) {
                 str = jQuery.trim(data);

                 if (str == 'true') {
	$("#getNotifyEmailUpBcAlExist").show();
	$("#getNotifyEmailUpBcNotified").hide();
	$("#getNotifyEmailUpBc").hide();

			//gsession.setSession('notify',1);
                     //alert("Your mail was already notified");
                     //document.getElementById('email').value = '';
                     //document.getElementById('email').focus();
                 } else {
	$("#getNotifyEmailUpBcAlExist").hide();
	$("#getNotifyEmailUpBcNotified").show();
	$("#getNotifyEmailUpBc").hide();

			//gsession.setSession('notify',0);
                     //alert("You will be notified");
                     chkMail();

                 }
             });
         }

     });
 });

 $("#notify").click(function() {
	$("#getNotifyEmailUpBc").show();
	$("#getNotifyEmailUpBcAlExist").hide();
	$("#getNotifyEmailUpBcNotified").hide();

	document.getElementById('email').placeholder = "Enter your email";
        document.getElementById('email').value = '';
 });


 $("#submit").click(function() {
     signup();
 });

 function signup() {
     var email = document.getElementById('email').value;
     validate_mail();
 }

 function chkMail() {
     var email = $("#email").attr("value");
     var vmap = {};
     vmap['email'] = email;
     ajaxcall.send_data(vmap, 'notify', function(result) {
         result = result.substring(1, result.length - 1);
         var t = JSON.stringify(result);
         //window.location = "bootcamp_info.html";
     });
 }


 function validate_mail() {
     var user_name = document.getElementById('email').value;
     var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
     if (user_name == '') {
         document.getElementById('email').placeholder = "E-mail id is required";
        
         document.getElementById('email').focus();

     } else if (!testEmail.test(user_name)) {
         document.getElementById('email').value = '';
         document.getElementById('email').placeholder = "Please enter valid E-mail id";
       
         document.getElementById('email').focus();
     } else {

         return true;
     }
 }
