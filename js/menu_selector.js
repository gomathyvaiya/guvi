/*jslint browser: true*/
/*global $, jQuery, alert*/

function menu_generate(mnu_name){
 //alert("session info: " + gsession.getSession('hash_val'));
 /*if(  (gsession.getSession('hash_val')!=='null'))
 {*/
 console.log(gsession.getSession('hash_val'));
 if(!(gsession.getSession('hash_val'))){
 //alert(gsession.getSession('hash_val'));
 if(mnu_name==="JoinUs"){
	$("#menu_style").load("menu_signin.html");
	}
 }
 else
 {
 
	$("#menu_style").load("menu_playlist.html");
 }

 
 

 //alert(mnu_name);
 };

//sessionStorage['submitURL']="model/feedback.php";

//  put session code in this segment 
/*if(gsession.getSession('hash_val')==='null' ||(!gsession.getSession['hash_val'] )) { 

 //window.location = "index.html";
 }*/
//  end of session code 
	


	var pname =  $('#abc').attr( "pname" );
		  menu_generate(pname);

	/*	 $(document).ready(function(){	  
			$('#signout').click(
		function() {
		
		gsession.clearSession('hash_val');
		//sessionStorage['hash_val']='null';
		//alert("signout");
		window.location = "index.html";		
	//window.location = "/index.html";		
	});
		
});*/

        
