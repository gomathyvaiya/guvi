/*jslint browser: true*/
/*global $, jQuery, alert*/


var gsession = {};
gsession.setSession = (function(key,value){
	
//	alert("this is in setsessoion file");
	if(value!='undefined' || value!=''){
	sessionStorage[key]=value;
	}
	
	});
	
gsession.getSession=(function(key){
	
//	alert("this is in getsessoion file");

	return sessionStorage[key];
	
	});
	
gsession.clearSession=(function(key){
	
	//alert("this is in clearsessoion file");

	sessionStorage.removeItem(key);
	
	});
	gsession.getSession('hash_val');
var hash_value={};
var temp_language = $('#lang1').val();
//sessionStorage['temp_lang'] = temp_language;
gsession.setSession('temp_lang',temp_language);   
$("#registerNew").click(function () {
			//alert("you changed ur language ");
			var temp_language = $('#lang1').val();
			//sessionStorage['temp_lang'] = temp_language;
			//sessionStorage['lang']=temp_language;
			var email = $('#email').val();
			var session_name=$('#name').val();
			gsession.setSession('mail',email);
			gsession.setSession('r_name',session_name);
			gsession.setSession('temp_lang',temp_language);
			gsession.setSession('lang',temp_language);
	
				if(gsession.getSession('lang')){
			$("#lang1").val(gsession.getSession('lang'));
		}

		var selectval = $('#lang1').val();
		if(selectval === "0" || selectval === "void"){
			 
			//$("#wrap").load("playlist-english.html");
			$("#wrap").load("playlist-english.html"); 
		}

		if(selectval !=""){
			var selectval = $('#lang1').val();
			 
			$("#wrap").load("playlist-"+selectval+".html");
		}

		});
	
 $(document).ready(function(){	
  
			$('#signout').click(
		function() {
		gsession.clearSession('hash_val');
		gsession.clearSession('lang');
		gsession.clearSession('mail');
		gsession.clearSession('cusername');
		gsession.clearSession('is_reg_video_now');
		gsession.clearSession('is_reg_mentor_now');
		gsession.clearSession('is_login_video');
		window.location = "index.html";		
		
	});
		
});	


   
   

 
			
