var ajaxcall={};

/*   wrapper function to pass the data	*/
ajaxcall.send_data=(function(json_value,url_id,callback)
{
var json_data= JSON.stringify(json_value);
var mapping=url_mapper(url_id);
/*	alert(mapping);	alert(json_data);	*/
  $.ajax({
        type: "POST",		
		data: {'myData':json_data},
        url: mapping
    }).done(function (result) {	
	console.log("success...");
	callback(result);
	})
     
});

/*   fetching url from where to send the data  */

function url_mapper(id){

var model_path = {

'mregister':"model/mregister.php",
'vregister':"model/vregister.php",
'bregister':"model/bregister.php",
'onreg':"model/quiz.php",
'notify':"model/notify.php",
'sendmail':"model/sendmail.php",
'useremail_checking':"model/checkmail.php",
'bootadmin':"model/bootadmin.php",
'login':"model/login_details.php",
'mentor_approve':"model/mentor_admin.php",
'mentor_reject':"model/mentor_admin.php",
};

return model_path[id];
}


/*  to remove the url*/

function remove_url(){

}
