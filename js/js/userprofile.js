$( document ).ready(function() {
//alert("documentready");
$("#saveChanges").click(function () {
	alert("hi");
	var user_name = $("#username").attr("value");
	var emailid = $("#emailid").attr("value");
	var place = $("#place").attr("value");
	var work = $("#work").attr("value");
	var aboutme = $("#aboutme").attr("value");
	var youlove = $("#youlove").attr("value");
	var ghprofile = $("#ghprofile").attr("value");
	var fbprofile = $("#fbprofile").attr("value");
	var twprofile = $("#twprofile").attr("value");
	var liprofile = $("#liprofile").attr("value");
	var uprofid = $("#uprofid").attr("value");
	alert("The uer id"+uprofid);

	$.ajax({	
	
        type: "POST",
		data: 'myname='+user_name+'&emailid='+emailid+'&myplace='+place+'&mywork='+work+'&aboutmyself='+aboutme+'&youlove='+youlove+'&ghprofile='+ghprofile+'&fbprofile='+fbprofile+'&twprofile='+twprofile+'&liprofile='+liprofile+'&uprofid='+uprofid,
		
       /* data: {
            'myname': user_name,
			'email':email,
			'myplace':place,
			'mywork':work,
			'aboutmyself':aboutme,
			'youlove':youlove,
			'ghprofile':ghprofile,
			'fbprofile':fbprofile,
			'twprofile':twprofile,
			'liprofile':liprofile,
			'uprofid':uprofid
        },*/
        url: "model/model/userprofile.php"

    }).done(function (result) {
	  alert(result);
	//var profilePicture = $("#profilePicture").attr("value");
	//senddetails(user_name,email,place,work,aboutme,youlove,ghprofile,fbprofile,twprofile,liprofile,uprofid);

});
	
});
});
