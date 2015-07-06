$( document ).ready(function() {
alert("test");
	//alert("my session mail"+ sessionStorage['mail']);
	$.ajax({
	type: "POST",
    data: {
            'hash': sessionStorage['hash_val']
          },
	url: "model/viewprofile.php"
	}).done(function(result) {
//alert(result);
	  result = result.substring(1, result.length - 1);
      var t = JSON.parse(result);	
	  //alert("t.uid is"+t.hash)
	  document.getElementById('profid').value=t.hash;
	 // alert("The userid is"+t.userdetails_id);
	  
	 // if(t.userdetails_id!=0)
	 // {
	var imgpath = "img/userprofile/"+t.picture;
	var placeapend = '<i class="icon-map-marker"></i> '+t.place;  
	//alert("the user profname id"+t.profilename);	
	//document.getElementById("profilepic").src=imgpath;	
	document.getElementById('display_username').innerHTML=t.profilename;
	/*document.getElementById('display_place').innerHTML=placeapend;
	document.getElementById('display_work').innerHTML=t.work;
	document.getElementById('display_aboutme').innerHTML=t.aboutme;
	document.getElementById('display_youlove').innerHTML=t.youlove;*/
	//}
	});

	});
	
	function editpro()
	{
	var uid=sessionStorage['hash_val'];
		//alert("The uid is"+uid);
			$.ajax({
			
			type:"POST",
			data:{
			'hash':uid
			},
	url: "model/editview.php",
	
	}).done(function(result) {
	result = result.substring(1, result.length - 1);
      var t = JSON.parse(result);
	  //alert("username"+t.profilename);
	//alert(result);
	//alert("The udi is pro.js"+t.uid);
	
	document.getElementById("username").value=t.profilename;
	document.getElementById("emailid").value=t.emailid;
	document.getElementById("place").value=t.place;
	//alert("test name work"+work);
	document.getElementById("work").value=t.work;
	document.getElementById("aboutme").value=t.aboutme;
	document.getElementById("youlove").value=t.youlove;
	document.getElementById("ghprofile").value=t.ghprofile;
	document.getElementById("fbprofile").value=t.fbprofile;
	document.getElementById("twprofile").value=t.twprofile;
	document.getElementById("liprofile").value=t.liprofile;
	document.getElementById("uprofid").value=t.uid;
		 
	});

	}
	
	
	
