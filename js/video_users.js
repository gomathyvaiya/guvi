$(document).ready(function() {
  
    document.getElementById('name').focus();
  
    $("#email").blur(function(e) {

        var useremail = $("#email").val();


	if(!validateFreeEmail(useremail)){

		document.getElementById('email').placeholder = "E-mail id is required";
		//document.getElementById("email").style.color = "#FC02EC";
		document.getElementById('email').focus();
		$('#notavailable').show();
		$('#avail').hide();
		$('#hello').hide();
		//alert("test");
	}
       else{

            $('#loader').show();

		var vmap = {};
		vmap['username'] = useremail;

		ajaxcall.send_data(vmap, 'useremail_checking', function(data) {
			
			$('#loader').hide();
			var obj = JSON.parse(data);
			if (obj.img == 'available') {
				$('#notavailable').hide();
				$('#avail').show();
				//$('#hello').hide();
				//return true;
			}
			else if (obj.img == 'notavailable') {
				$('#notavailable').show();
				$('#avail').hide();
				document.getElementById('email').focus();
			}
			$('#hello').show();
			$('#hello').html(obj.text);

		});

    
        }
    });
});


$("#signin").click(function() {
    window.location = "index.html";
});

							
$("#registerNew").click(function () {

  signup();

 });
$('#name,#email,#password').keypress(function(e) {
    if (e.which == '13') {
        e.preventDefault();
        signup();
    }
});

function signup() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (validate_name()) {
        if (validateFreeEmail(email)) {
            if (validate_pwd()) {
		if(checkPasswordMatch()){
                	if (validate_lang()) {
                    		chkMail();
				
			}
                }
            }
        }
    }
}

function validateFreeEmail(email)
{
	var reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
	if (reg.test(email)){
		return true;
	}
	else{
		return false;
	}
} 
function validate_lang() {
    var langua = $("#lang1").attr("value");
    if (langua == "Preferred_Language") {
        document.getElementById('lang1').focus();

    } else {
        return true;
    }
}

function validate_name() {

    var name = $("#name").attr("value");
	var alphaExp = /^[a-zA-Z ]*$/;
    if (name == '') {
        document.getElementById('name').placeholder = "Name is required";
        //document.getElementById("name").style.color = "#FC02EC";
        document.getElementById('name').focus();
	
    } else if(!alphaExp.test(name)) {
	document.getElementById('name').value = '';
         document.getElementById('name').placeholder = "Please enter only alphabets";
        //document.getElementById("name").style.color = "#FC02EC";
	
        document.getElementById('name').focus();
    }
	else{
	return true;
	}
}

function validate_pwd() {
    var password = $("#password").attr("value");
    var user_name = $("#email").attr("value");
    var name = $("#name").attr("value");
    if (name) {
        if (user_name != '') {
            if (password == '') {
                document.getElementById('password').value = '';
                document.getElementById('password').placeholder = "Password is required";
                //document.getElementById("password").style.color = "#FC02EC";
                document.getElementById('password').focus();
                return false;
            } else if (password.length < 5) {
                document.getElementById('password').value = '';
                document.getElementById('password').placeholder = "Please enter atleast 5 characters";
                //document.getElementById("password").style.color = "#FC02EC";
                document.getElementById('password').focus();
                return false;
            } else {
                return true;
            }
        }
    }
}





function getdetails(email, password, name, lang1, skill, mentor_hide) {
    'use strict';
   
var lang = $("#lang1").val();
    var vmap = {};
    vmap['email'] = email;
    vmap['password'] = password;
    vmap['name'] = name;
    vmap['lang1'] = lang1;
    vmap['skill'] = skill;
    vmap['mentor_hide'] = mentor_hide;
				
    
    ajaxcall.send_data(vmap, 'vregister', function(output) {
        output = output.substring(1, output.length - 1);
        var t = JSON.stringify(output);
	gsession.setSession('hash_val',t.hash);
	gsession.setSession('is_reg_video_now','1');
		       gsession.setSession('lang',lang);

			if(gsession.getSession('lang')){
				$("#lang1").val(gsession.getSession('lang'));
			}

			var username=gsession.getSession('mail');

			//alert(username);
					
						$('#spinner').show();	
						$('#registerNew').prop('disabled', 'disabled');
						var data={
							type:'video',
							var_1:username,
						}

				      $.ajax({
						type: "POST",
		        			url: "model/sendmail1.php",
		        			data: data,
		        			success: function(output){
									$('#spinner').hide();
							window.location = "PublicPlaylists.html";
						},			

					   });
			
    });


}


function request_get_js(param) {
    return htmlEntities(addSlashes(param.trim()));
}

function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function addSlashes(string) {
    return string.replace(/\\/g, '\\\\').
    replace(/\u0008/g, '\\b').
    replace(/\t/g, '\\t').
    replace(/\n/g, '\\n').
    replace(/\f/g, '\\f').
    replace(/\r/g, '\\r').
    replace(/'/g, '\\\'').
    replace(/"/g, '\\"');
}

function checkPasswordMatch() {
    var password = $("#password").val();
    var confirmPassword = $("#re_password").val();

    if (password != confirmPassword) {
        document.getElementById('re_password').value = '';
        document.getElementById('re_password').placeholder = "password does not match";
        //document.getElementById("re_password").style.color = "#FC02EC";
        document.getElementById('re_password').focus();
        return false;
    } else
        return true;
}

function chkMail() {

    var name = $("#name").attr("value");
    var email = $("#email").attr("value");
    var password = $("#password").attr("value");
    var lang1 = $("#lang1").attr("value");
    var skill = $("#skill").attr("value");
    var mentor_hide = $("#mentor_hide").attr("value");

    getdetails(email, password, name, lang1, skill, mentor_hide);

}
