function logindetails(user_name) 
{
    'use strict';
    gsession.setSession('mail',user_name);

	var vmap={};
	vmap['username'] = user_name;
       
		ajaxcall.send_data(vmap,'login',function(result1){ 
             if( result1 = result1.substring(1, result1.length - 1)){
        var t = JSON.parse(result1);
		//gsession.setSession('admin',t.username);
		
		gsession.setSession('hash_val',t.hash);
		if(gsession.getSession('hash_val')=="aa8936a673a4379dc691a162e12bcb739156ead6c8d7b3441df08ca7a95d82bf69b8e022ab5090be99c8d38bb5a0e7dbb6cb66e5e2e06eed3b4a9f9a114d87bd")
		{
			window.location="mentor_admin.html";
		}
		//alert(gsession.getSession('hash_val'));
		gsession.setSession('lang',t.lang);
		if(t.pname!=='empty' || t.pname!=''){
		gsession.setSession('cusername',t.pname);
		
		}
		gsession.setSession('is_login_video','1');
		//alert(gsession.getSession('is_login_video'));
		//window.location = "PublicPlaylists.html";  
               }
  else{
       window.location = "errorlogin.html";
}
       
      
 });

} 
function chkPwd () {
	var user_name = $("#login_email").attr("value");
	var password = $("#login_password").attr("value");
	$.post('model/usercheck.php',
	{
		'emails':user_name,
		'password':password,
	},
		function(data){
			if(data!=0){
				logindetails(user_name);
				}else{
				document.getElementById('login_password').value='';
				document.getElementById('login_password').focus();
				document.getElementById("login_password").placeholder="Incorrect Password";  
			   return false;
			}
			
		});
	
}

function signin(){
	   
          chkPwd();	
}
$(document).ready(function(){

	$('#login_email').keypress(function(e) {
	if (e.which == '13') {
		 e.preventDefault();

		 signin();
	}
	});
	
	$('#login_password').keypress(function(e) {
	if (e.which == '13') {
		 e.preventDefault();

		 signin();
	}
	});

    $("#login_button").click(function () {
	//alert("hai");
       signin();
    });
});
    
