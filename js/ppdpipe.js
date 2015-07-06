/*jslint browser: true*/
/*global $, jQuery, alert*/

/*$(document).ready( function() {
		  $('#tab-container').easytabs();
		});*/

function getdetails(playlistname){
//alert (playlistname);
console.log(playlistname);
$.ajax({
type: "POST",
url: "model/pldetails.php",
data: {fname:name, playlistname:playlistname}
}).done(function( result ) {

		  if (!sessionStorage['pid']) {
			sessionStorage['pid'] = result;
		
			} 
	console.log("Playlist id for the playlist is : ");
	console.log(sessionStorage['pid']);
	window.location = "Playlist.html";
});
}
	  
	  
	   $(function () {
	  $("#FPL").on('click', 'a', function() {
	  	  var headTitle=$(this).find('.text2').text();
		sessionStorage['headTitle']=headTitle;
	  	  var pname =  $(this).attr( "pname" );
			  if(pname){
			   if(pname.toLowerCase()==="c_telugu")
	            window.location = "pls/Telugu/c.html";
			  else if(pname.toLowerCase()==="cpp_telugu")
	            window.location = "pls/Telugu/cpp.html";
			  else if(pname.toLowerCase()==="java_telugu")
	            window.location = "pls/Telugu/java.html";
			 
			  else if(pname.toLowerCase()==="aftereffects_telugu")
	            window.location = "pls/Telugu/aftereffects.html";
			  else if(pname.toLowerCase()==="dotnet_telugu")
	            window.location = "pls/Telugu/dotnet.html";
			  else if(pname.toLowerCase()==="photoshop_telugu")
	            window.location = "pls/Telugu/photoshop.html";
			 else if(pname.toLowerCase()==="c_hindhi")
	            window.location = "pls/Hindhi/c.html";
			  else if(pname.toLowerCase()==="cpp_hindhi")
	            window.location = "pls/Hindhi/cpp.html";
			  else if(pname.toLowerCase()==="java_hindhi")
	            window.location = "pls/Hindhi/java.html";
			 else if(pname.toLowerCase()==="javascript_hindhi")
	            window.location = "pls/Hindhi/javascript.html";
			  else if(pname.toLowerCase()==="linux_hindhi")
	            window.location = "pls/Hindhi/linux.html";
			  else if(pname.toLowerCase()==="html_hindhi")
	            window.location = "pls/Hindhi/html.html";
	    }

			
		 // getdetails(pname);
 
	  if (!sessionStorage['pname']) {
			sessionStorage['pname'] = pname;
		
			} 
  
});

});

	   $(function () {
	  $("#FPL1").on('click', 'a', function() {
	  	var headTitle=$(this).find('.text2').text();
		sessionStorage['headTitle']=headTitle;
	  	  var pname =  $(this).attr( "pname" );
		if(pname.toLowerCase()==="max_telugu")
            window.location = "pls/Telugu/3DMAX.html";
		  else if(pname.toLowerCase()==="excel_telugu")
            window.location = "pls/Telugu/excel.html";
		  else if(pname.toLowerCase()==="msword_telugu")
            window.location = "pls/Telugu/msword.html";
		
		  else if(pname.toLowerCase()==="msppt_telugu")
            window.location = "pls/Telugu/ppt.html";
		  else if(pname.toLowerCase()==="tally_telugu")
            window.location = "pls/Telugu/tally.html";		
			
		
		  else if(pname.toLowerCase()==="jdbc_hindhi")
            window.location = "pls/Hindhi/jdbc.html";
		  else if(pname.toLowerCase()==="css_hindhi")
            window.location = "pls/Hindhi/css.html";	
			 
		  else if(pname.toLowerCase()==="php_hindhi")
            window.location = "pls/Hindhi/php.html";
		 else if(pname.toLowerCase()==="photoshop_hindhi")
            window.location = "pls/Hindhi/photoshop.html";	
		else if(pname.toLowerCase()==="database_hindhi")
            window.location = "pls/Hindhi/database.html";	
				
		 // getdetails(pname);
 
	  if (!sessionStorage['pname']) {
			sessionStorage['pname'] = pname;
		
			} 
  
});

});


//  bengali playlist event handling 
	  
	   $(function () {
	  $(".Bengali").on('click', 'a', function() {
	  	var headTitle=$(this).find('.text2').text();
		sessionStorage['headTitle']=headTitle;
	  	  var pname =  $(this).attr( "pname" );
		  if(pname.toLowerCase()==="c_bengali")
		    window.location = "pls/bengali/c.html";
		  else if(pname.toLowerCase()==="sql_bengali")
            window.location = "pls/bengali/sql.html";
		  
		 
		
			
		 // getdetails(pname);
 
	  if (!sessionStorage['pname']) {
			sessionStorage['pname'] = pname;
		
			} 
  
});

});





//  kannada playlist event handling 
	  
	   $(function () {
	  $("#Kannada").on('click', 'a', function() {
	  	var headTitle=$(this).find('.text2').text();
		sessionStorage['headTitle']=headTitle;
	  	  var pname =  $(this).attr( "pname" );
		  if(pname.toLowerCase()==="basic_kannada")
		    window.location = "pls/kannada/computer_basic_tutorials.html";
		  else if(pname.toLowerCase()==="vb_kannada")
            window.location = "pls/kannada/vb_tutorials.html";
		  else if(pname.toLowerCase()==="photoshop_kannada")
            window.location = "pls/kannada/photoshop_tutorials.html";
		  
		
			
		 // getdetails(pname);
 
	  if (!sessionStorage['pname']) {
			sessionStorage['pname'] = pname;
		
			} 
  
});

});

// for tamil videos 

  $(function () {
	  $(".tbl").on('click', 'a', function() {
		var headTitle=$(this).find('.text2').text();
		sessionStorage['headTitle']=headTitle;
	  	  var pname =  $(this).attr( "pname" );
		  
		  if(pname.toLowerCase()==="tamil_ae")
            window.location = "pls/Tamil/Adobe_After_Effect.html";			
		  else if(pname.toLowerCase()==="tamil_csharp")
            window.location = "pls/Tamil/Csharp.html";		
		  else if(pname.toLowerCase()==="tamil_c")
            window.location = "pls/Tamil/c.html";	
		  else if(pname.toLowerCase()==="tamil_cgi")
            window.location = "pls/Tamil/CGI.html";			
		  else if(pname.toLowerCase()==="tamil_client")
            window.location = "pls/Tamil/client_side.html";	
			 else if(pname.toLowerCase()==="tamil_coral")
            window.location = "pls/Tamil/corel draw.html";
		  else if(pname.toLowerCase()==="tamil_cpuz")
            window.location = "pls/Tamil/CPuzzles.html";
		  else if(pname.toLowerCase()==="tamil_css")
            window.location = "pls/Tamil/CSS.html";
		
		  else if(pname.toLowerCase()==="tamil_ctit")
            window.location = "pls/Tamil/ctitbits.html";
		  else if(pname.toLowerCase()==="tamil_ds")
            window.location = "pls/Tamil/ds.html";		
			
		
		  else if(pname.toLowerCase()==="tamil_dp")
            window.location = "pls/Tamil/DesignPatterns.html";
		  else if(pname.toLowerCase()==="tamil_gcpp")
            window.location = "pls/Tamil/gui++.html";	
			 
		  else if(pname.toLowerCase()==="tamil_hd")
            window.location = "pls/Tamil/hard_disk.html";
		 else if(pname.toLowerCase()==="tamil_j2ee")
            window.location = "pls/Tamil/J2EE.html";	
		else if(pname.toLowerCase()==="tamil_java")
            window.location = "pls/Tamil/java.html";	
				
				
				
		  else if(pname.toLowerCase()==="tamil_word")
            window.location = "pls/Tamil/Microsoft_Word.html";
		  else if(pname.toLowerCase()==="tamil_oops")
            window.location = "pls/Tamil/oops_tutorials.html";	
			 
		  else if(pname.toLowerCase()==="tamil_os")
            window.location = "pls/Tamil/Operating_System.html";
		 else if(pname.toLowerCase()==="tamil_sql")
            window.location = "pls/Tamil/SQL Tamil.html";	
		else if(pname.toLowerCase()==="tamil_uml")
            window.location = "pls/Tamil/uml.html";	
				
				
						
		  else if(pname.toLowerCase()==="tamil_vc")
            window.location = "pls/Tamil/Version_Control.html";
		  else if(pname.toLowerCase()==="tamil_vim")
            window.location = "pls/Tamil/VIM.html";	
			 
		  else if(pname.toLowerCase()==="tamil_webdev")
            window.location = "pls/Tamil/web_development.html";
			  else if(pname.toLowerCase()==="tamil_webdes")
            window.location = "pls/Tamil/web_design_tamil_tutorials.html";	
		 else if(pname.toLowerCase()==="tamil_wordpress")
            window.location = "pls/Tamil/Wordpress.html";	
		else if(pname.toLowerCase()==="tamil_inflation")
            window.location = "pls/Tamil/Inflation.html";	
				
					 
		  else if(pname.toLowerCase()==="tamil_gc")
            window.location = "pls/Tamil/Game_Changers.html";
		 else if(pname.toLowerCase()==="tamil_tech")
            window.location = "pls/Tamil/Technical_talks.html";	
		else if(pname.toLowerCase()==="tamil_history")
            window.location = "pls/Tamil/HISTORY.html";	
		else if(pname.toLowerCase()==="tamil_python")
            window.location = "pls/Tamil/python_tamil_tutorials.html";	
		else if(pname.toLowerCase()==="tamil_sqlite")
            window.location = "pls/Tamil/sqlite_tamil_tutorials.html";	
		else if(pname.toLowerCase()==="tamil_seo")
            window.location = "pls/Tamil/seo_tamil_tutorials.html";	
			
				else if(pname.toLowerCase()==="tamil_matlab")
					window.location = "pls/Tamil/MATLAB_tamil_tutorials.html";			 
				else if(pname.toLowerCase()==="tamil_asp")
					window.location = "pls/Tamil/asp_tamil_tutorials.html";
				else if(pname.toLowerCase()==="tamil_git")
					window.location = "pls/Tamil/git_tamil_tutorials.html";	
				else if(pname.toLowerCase()==="tamil_php")
					window.location = "pls/Tamil/php_tamil_tutorials.html";	
				else if(pname.toLowerCase()==="tamil_database")
					window.location = "pls/Tamil/Database.html";	
				else if(pname.toLowerCase()==="tamil_techtalks")
					window.location = "pls/Tamil/Technical_talks.html";	
				
				
				
				
					
			
				
				
				
				
		 // getdetails(pname);

	  if (!sessionStorage['pname']) {
			sessionStorage['pname'] = pname;
			
		
			} 
  
});

});


// for english videos

 $(function () {
	  $("#English").on('click', 'a', function() {
	  		var headTitle=$(this).find('.text2').text();
		sessionStorage['headTitle']=headTitle;
	  	  var pname =  $(this).attr( "pname" );
		  if(pname.toLowerCase()==="hacking_english")
		    window.location = "pls/English/hacking_tutorials.html";
		  else if(pname.toLowerCase()==="english_gameinjava")
            window.location = "pls/English/Game_Development_in_Java.html";
		  else if(pname.toLowerCase()==="english_mac")
            window.location = "pls/English/Mac_OS_Application_Development.html";
		 else if(pname.toLowerCase()==="english_ai")
            window.location = "pls/English/artificial_intelignce.html";
		  else if(pname.toLowerCase()==="english_hci")
            window.location = "pls/English/HCI.html";
		 else if(pname.toLowerCase()==="english_robotics")
            window.location = "pls/English/robotics_tutorials.html";
		  else if(pname.toLowerCase()==="english_ruby")
            window.location = "pls/English/ruby_on_rails.html";
		 else if(pname.toLowerCase()==="english_datamining")
            window.location = "pls/English/data_mining.html";
		  else if(pname.toLowerCase()==="english_c1")
            window.location = "pls/English/c_tutorials.html";
		 else if(pname.toLowerCase()==="english_c2")
            window.location = "pls/English/C_tutorials2.html";
		  else if(pname.toLowerCase()==="english_se")
            window.location = "pls/English/mobile_software_engineering.html";
		 else if(pname.toLowerCase()==="english_methodology")
            window.location = "pls/English/programming_methodology.html";
		  else if(pname.toLowerCase()==="english_photoshop")
            window.location = "pls/English/adobe_photoshop.html";
		    else if(pname.toLowerCase()==="english_javascript")
            window.location = "pls/English/javascript_tutorials.html";
		 else if(pname.toLowerCase()==="english_talks")
            window.location = "pls/English/talks.html";
		
			
		 // getdetails(pname);
 
	  if (!sessionStorage['pname']) {
			sessionStorage['pname'] = pname;
		
			} 
  
});

});

	/*   $(function () {
	  $("#telugu1").on('click', 'a', function() {
	  	  var pname =  $(this).attr( "pname" );
			
		  if(pname.toLowerCase()==="max_videos")
            window.location = "pls/telugu/3dmax.html";			
		  else if(pname.toLowerCase()==="java_videos")
            window.location = "pls/telugu/java.html";		
		  else if(pname.toLowerCase()==="c_videos")
            window.location = "pls/telugu/c.html";	
		  else if(pname.toLowerCase()==="tally_videos")
            window.location = "pls/telugu/tally.html";			
		  else if(pname.toLowerCase()==="cpp_videos")
            window.location = "pls/telugu/cpp.html";	
		  else if(pname.toLowerCase()==="java_videos")
            window.location = "pls/telugu/java.html";	
			
		 // getdetails(pname);
 
	  if (!sessionStorage['pname']) {
			sessionStorage['pname'] = pname;
		
			} 
  
});
});*/
