/*jslint browser: true*/
/*global $, jQuery, alert*/
/*
$(document).ready(function(){	  
	  	   $.ajax({
		 type: "POST",
        url: "model/myplaylist.php",
		error: function (xhr, ajaxOptions, thrownError) {
		console.log("ajax error - arun");
        console.log(xhr.status);
        console.log(thrownError.message);
      },
		data: {fname:"test@gmail.com"}
    }).done(function(data){
        $('#data').append(JSON.stringify(data));
		//alert(data);        
    });
	  
			});
  
  */
$(function () {
    "use strict";

//alert(sessionStorage['lang']);
if(sessionStorage['lang']!='empty'){
	$("#wrap").load("playlist-" + sessionStorage.lang + ".html");
}

	/*
	var selectval =$("#language").val(sessionStorage['lang']);	
	if(selectval == "0"){
		$("#wrap").load("playlist-english.html"); 
	}
	
	if(selectval !=""){
		var selectval = $('#language').val();
		$("#wrap").load("playlist-"+selectval+".html");
	}
	*/
	/*$('#language').on('change', function () {
        var langid = $(this).val();alert(langid);
        if (langid === "0") {
		    $("#wrap").load("playlist-english.html");
	    } else {
		    $("#wrap").load("playlist-" + langid + ".html");
	    }
	});*/
	
	
	$(".listItem div").click(function () {
        var langid = $(this).attr('id');
        gsession.setSession('lang',langid);
        $('.listItem').removeClass('showList');
        $('.listItem').addClass('hideList');
        if (langid === "0") {
		    $("#wrap").load("playlist-english.html");
	    } else {
		    $("#wrap").load("playlist-" + langid + ".html");
	    }
		
    });
 
      
});

$("#test").click(function(){

  window.location = "online_test.html";
});


    
	/*function loadMyPlaylists() 
	{	
		alert('Anbu');
		alert(sessionStorage['hash_val']);
		$.ajax({
		type: "POST",
		url: "model/myplaylist.php",
		data: {creatorid:sessionStorage['hash_val']}
		}).done(function( result ) {
		//Removing the single quote in the bigining and end of the result (PHP returns the JSON encoded object with single quote in the first and last position
		var playlist_str = result.substring(1,result.length-1); 
		//Parsing the string(JSON) to object array
		var playlist_arr = JSON.parse(playlist_str);
		RenderPlaylist(playlist_arr);
		});
		
	}
	*//*
	function RenderPlaylist( playlists)
	{
	$("#mylistdiv").empty();
	playlists.forEach(function(playlist)
						{
							var anchorStyles = new Array("tile app bg-color-orange", "tile wide imagetext bg-color-pink", "tile app bg-color-purple", 
														 "tile imagetext widepeek bg-color-purple", "tile widepeek image bg-color-red", "tile app bg-color-green", 
														 "tile imagetext square bg-color-blue", "tile app bg-color-blue");
							// var divWrappers = new Array("textover-wrapper bg-color-red blueDark", 
														// "image-wrapper", "textover-wrapper transparent", 
														// "text-inner", "textover-wrapper transparent", 
														// "textover-wrapper transparent", 
														// "textover-wrapper transparent", 
														// "textover-wrapper transparent");
							// var spanStyles = new Array("icon icon-mail", "icon icon-chat-2", "icon icon-weather", "icon icon-linkedin");
							var divWrappers = new Array("image-wrapper", 
														"image-wrapper", "image-wrapper", 
														"text-inner", "image-wrapper", 
														"image-wrapper", 
														"image-wrapper", 
														"image-wrapper");
							
							
							var index = Math.floor((Math.random()*8)+1);
							var index = index-1;
							
							var $anchor = $("<a>", {class: anchorStyles[index], href: "#"});
							var $divWrap = $("<div>", {class: divWrappers[index]});
							var $img = $("<img>", {src: playlist.thumbimg.replace(/\\/g, ''), alt: ""}); // This is to remove the escape sequences before displaying.
							// var $img = $("<img>", {src: "https://i1.ytimg.com/vi/lyZQPjUT5B4/0.jpg", alt: ""});
							// var $span = $("<span>", {class: spanStyles[index]});
							var $divText = $("<div>", {class: "app-label", text: playlist.pllistname });
														
							// $img.append($span);
							$divWrap.append($img);
							$anchor.append($divWrap);
							$anchor.append($divText);
							$("#mylistdiv").append($anchor);
							});
	}*/
