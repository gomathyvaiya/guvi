
var lang;
$(document).ready(function(){
	var language=gsession.getSession('lang');
	//alert(language);
	if(language){
		if(language!='empty'){
			$('.langSelect').hide();
		}
		else{
			$('.langSelect').show();
		}

	}
	if(gsession.getSession('fbmail')){
		var username=gsession.getSession('fbmail');//alert(username);
				$.ajax({
					type:"POST",
					data: {'email':username,'language':''},
					url: 'model/r.php'
					
					}).done(function( result ) {
					console.log(result);
				//	alert("language"+result);
						gsession.setSession('lang',lang);
						//sessionStorage['lang'] = result;
						if(gsession.getSession('lang')){
							$("#lang1").val(gsession.getSession('lang'));
						}
						//window.location = "PublicPlaylists.html";
						//$('.overlay-bg').hide();
					});
	}

	//$(".live-tile, .flip-list").not(".exclude").liveTile();
  //	 if(!(gsession.getSession('hash_val'))){//alert('hi');
 //		window.location = "index.html";   
 //	}
 	if(!gsession.getSession('lang')){
		//sessionStorage['lang']= "empty";
		gsession.setSession('lang','empty');//alert(gsession.getSession('lang'));
		$("#lang1").val(gsession.getSession('lang'));
	}
	
 }); 

 $("#registerNew").click(function () {

	var email=document.getElementById('email').value;
		var password=document.getElementById('password').value;
		if(validate_name()){
			if(validateFreeEmail(email)){
				if(validate_pwd()){
					if(validate_lang()){
						chkMail();
				}
				}
			}
		}
	
      /*  var start=0;
	      var user_link=this.id;//alert(user_link);
	      lang=this.id;
	      var length = $( ".langContainer .button" ).length;//alert(length);
	      while(start<length){
	           
	           var langId=$('.langContainer .button').eq(start).attr('id');
	            if(langId==this.id){
            $('.langContainer .button').eq(start).addClass('selected');
            //$('.shine')
          }else{
            $('.langContainer .button').eq(start).removeClass('selected');
          }
	         start++;
	      }*/
		//signup();
		 //if(signup())
		//{
		  //var hash = gsession.getSession('hash_val');  // local storeage variable get dynamic
	if(validate_name() && validate_pwd() && validate_lang()){
		    var lang = $("#lang1").val();//}
			var username=gsession.getSession('mail');//alert(username);
				$.ajax({
					type:"POST",
					data: {'email':username,'language':lang},
					url: 'model/vregister.php'
					
					}).done(function( result ) {
					console.log(result);
				//	alert("language"+result);
						gsession.setSession('lang',lang);
						//sessionStorage['lang'] = result;
						if(gsession.getSession('lang')){
							$("#lang1").val(gsession.getSession('lang'));
						}
						window.location = "PublicPlaylists.html";
						//$('.overlay-bg').hide();
					});

			
}

	      
    });
 $(".arrow").click(function () {
       if(lang){
       	/*	var hash = gsession.getSession('hash_val');  // local storeage variable get dynamic
		//var sexval = $('input:radio[name="radios"]:checked').val();
		//var language = $('#languages').val();
		//var names = $('#uname').val();
		//sessionStorage.cusername=names;
		//gsession.setSession('cusername',names);
		//$("#language").val()=lang;
			var username=gsession.getSession('mail');//alert(username);
				$.ajax({
					type:"POST",
					data: {'email':username,'hash':hash,'language':lang},
					url: 'model/user-details.php'
					
					}).done(function( result ) {
					console.log(result);
				//	alert("language"+result);
						gsession.setSession('lang',lang);
						//sessionStorage['lang'] = result;
						if(gsession.getSession('lang')){
							$("#language").val(gsession.getSession('lang'));
						}
						window.location = "PublicPlaylists.html";
						//$('.overlay-bg').hide();
					});
				
		//$('.overlay-bg').hide();
	*/
       	
       }else{
       	alert("Please prefer your language");
       }
	      
    });
