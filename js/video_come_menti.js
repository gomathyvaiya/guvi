var video_reg=gsession.getSession('is_reg_video_now');
	var mentor_reg=gsession.getSession('is_reg_mentor_now');
	//var hash_val=gsession.getSession('hash_val');
	var mail=gsession.getSession('mail');
	var vi=gsession.getSession('is_login_video');
if(video_reg==1 || vi==1)
{

var name='';
var email='';
var password='';
var confirm='';
var language='';
var career='';

var data = { 
	type:'edit',
	mail1:mail,
		}
		$.ajax({
                        type: "POST",
	    		url: "model/video_come_menti.php",
	    		data: data,
	    		success: function(output) {
			//alert(output);
			var data=JSON.parse(output);
			var arr=[];
			for(var prop in data){

			arr.push(data[prop]);
			}
				$.each(arr,function(index,value){
				email=value.userid;
				name=value.name;
				 password='helllllloooo';
				 language=value.language;
				 //career=value.skills;
				});
				$('#name').prop('disabled', 'disabled');
				$('#email').prop('disabled', 'disabled');
				$('#password').hide();
				$('#re_password').hide();
				$('.hide').hide();
				$('#span').hide();
				$('#span1').hide();
				$('#lang1').prop('disabled', 'disabled');
				document.getElementById("name").value=name;
				document.getElementById("email").value=email;
				document.getElementById("password").value=password;
				document.getElementById("re_password").value=password;
				document.getElementById("lang1").value=language;
				//document.getElementById("skill").value=career;
			},


});
}

