$(function(){
 
	$("#menu1").load("menu.html");
	$("#session_menu").load("session_menu.html");
	$("#footer").load("footer.html"); 

	//console.log(gsession.getSession('hash_val'));

	var video_reg=gsession.getSession('is_reg_video_now');
	var mentor_reg=gsession.getSession('is_reg_mentor_now');
	var hash_val=gsession.getSession('hash_val');
	var lang=gsession.getSession('lang');
	var cuser=gsession.getSession('cusername');
	//console.log(mentor_reg);
	//console.log(pageNo);
	//alert(cuser);
	
		
			

	if(video_reg==1)
	{
	
		
		if(pageNo=="2" || pageNo=="2.1")
		{
			window.location="PublicPlaylists.html";
		}
		//return true;
	}else if(video_reg==undefined)
	{
		gsession.setSession('is_reg_video_now',0);
		
	}

	//console.log(gsession.getSession('is_reg_video_now'));
	if(mentor_reg==1){
			//console.log(pageNo);
			if(pageNo=="2" || pageNo=="2.1")
				{
					window.location="PublicPlaylists.html";
				}
			if(pageNo=="4" || pageNo=="4.1" || pageNo=="4.3")
			{
				
				if(pageNo!="4.2")
				{
					window.location="testpage.html";
				}
			}
			else if(mentor_reg==undefined){
				gsession.setSession('is_reg_mentor_now',0);
			}
			
			//window.location="PublicPlaylists.html";
	}
	else if(mentor_reg==2)
		
		{
			if(pageNo=="2" || pageNo=="2.1")
				{
					window.location="PublicPlaylists.html";
				}
			
			if(pageNo=="4" || pageNo=="4.1" || pageNo=="4.2")
			{
				if(pageNo!="4.3")
				{
					window.location="aftertest.html";
				}
			}
			else if(mentor_reg==undefined){
				gsession.setSession('is_reg_mentor_now',0);
			}
	}


});
