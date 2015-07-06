/*jslint browser: true*/
/*global $, jQuery, alert*/

//global variables for transfer data to postplaylist function
var listid=0, temp=0, myJSONText=0, htmlString='<ul id="videoslisting">', videocnt = 0, videotag, i=0, inputstring, selectedid = [], vmap, username = "admin", language="tamil";      

var map = {}; // or var map = {};
var map1 = {};

$(document).ready(function(){
    console.log ( "test Loading playlist");
    //generate_videolist(sessionStorage.getItem("id"));
  //  language = document.getElementById("video_language").value;
    if( sessionStorage.getItem("status")==="true") {
        sessionStorage.removeItem('status');
        sessiondetails();
        generate_videolist(sessionStorage.getItem("id"));
        console.log ( "Loading playlist");
    }

    $('#add').click( function() {
		var index=0;
		for(j=1;j<videocnt;j++)	{
			if(document.getElementById("chkbtn"+j).checked===1) {
				var tempdata=document.getElementById("chkbtn"+j).value;
				selectedid[index]=(findElementVElement(map,tempdata));
				index++;
			} else {}
		}  
		postplaylist(myJSONText);     
    });
});
   
  
// function for substring playlist id from channel
function substring_playlist(videoid) {		
	//	console.log("inside substring function");
	var videoid=videoid;
	var foccur=videoid.lastIndexOf(":") + 1;
	var loccur=videoid.length;
	var vid = videoid.substring(foccur,loccur);
	//	console.log(vid);
	return vid;
}
 

function sessiondetails() {
    alert( "username = " + sessionStorage.getItem("username"));
    username = sessionStorage.getItem("username");
 
}

// function for playlist generation 
function playlist_generation(vmap,ytapiurl) {
    var j,k=1;
	var pmap = new Object();
	pmap['ytapiurl'] = ytapiurl;
    //alert(ytapiurl);
    $.getJSON(ytapiurl, function(data) {
        $.each(data.feed.entry, function(i, item) {       
            var title    = item['title']['$t'];
            var videoid  = item['id']['$t'];
            var pubdate  = item['published']['$t'];
            var fulldate = new Date(pubdate).toLocaleDateString();
		
            var category = item['category'][1].term;
		
            var rating = item['gd$rating'] || {};
            var avgrating = rating ['average'];
            //var maxrating = rating ['max'];
            var minrating = rating ['min'];
            var numRaters = rating ['numRaters'];
            
            var thumbimg = item['media$group']['media$thumbnail'][0]['url'];
            var tinyimg1 = item['media$group']['media$thumbnail'][1]['url'];
            var tinyimg2 = item['media$group']['media$thumbnail'][2]['url'];
            var tinyimg3 = item['media$group']['media$thumbnail'][3]['url'];
            var vlink    = item['media$group']['media$content'][0]['url'];
            var ytlink   = item['media$group']['media$player'][0]['url'];
            var duration = item['media$group']['yt$duration']['seconds'];
		
            var numviews = item['yt$statistics']['viewCount'];
            var numcomms = item['gd$comments']['gd$feedLink']['countHint'];
		
            var jsondata = writedata(thumbimg, title, videoid, pubdate, fulldate,
                                     category, rating, avgrating, minrating, numRaters,
                                     thumbimg, tinyimg1, tinyimg2, tinyimg3, vlink, ytlink,
                                     duration, numviews,  numcomms, username, language);
            
            //	myMap = {videoid: [title,videoid,thumbimg,numviews]};
            putVelems(vmap,videoid,videoid);
            //	console.log(myMap.videoid[0]);
            //alert(myMap["key"][1]); 

            ConvertHtml1(thumbimg,title,videoid);
            //videocnt = '#' + videocnt;
            substring_playlist(videoid);

            //	postplaylist(myJSONText);
        });
    });
} 

// function for convert to html string
function ConvertHtml1(thumbimg,title,videoid){
	videocnt = videocnt + 1;
	var checkboxid="chkbtn"+ videocnt;
	
	htmlString+=' <li class="span3"> <div class="thumbnail"> ';
    htmlString+='<img  height="30" width="30" src="'+thumbimg+'"   alt="ALT NAME"> <h6>'+title+'</h6> ';
	htmlString+='<div class="make-switch" data-on="success" data-off="danger">';
	//htmlString+=inputstring;
	
	htmlString+='<input type="checkbox" checked  id="'+ checkboxid +'" class="cls" value="'+videoid+'"   />';
	
	htmlString+='</div> </div>  </li>';
	videotag.html(htmlString + "</ul>"); 
}

// function for data to write  into map 
function  writedata(thumbimg, title, videoid, pubdate, fulldate, category,
                     rating, avgrating, minrating, numRaters,  tinyimg1, 
                     tinyimg2, tinyimg3, vlink, ytlink, duration, numviews,
                     numcomms, playlistcreator, language) {
	//console.log("a winter inside write data");
	var vmap = {}; // or var map = {};
    // vmap['title'] = title; Commented now to avoid duplication
	vmap['title'] = title;
	vmap['videoid'] = videoid;
	vmap['pubdate'] = pubdate;
	vmap['category'] = category;
	vmap['avgrating'] = avgrating;
	//vmap['maxrating'] = maxrating;
	vmap['minrating'] = minrating;
	vmap['numRaters'] = numRaters;
	vmap['thumbimg'] = thumbimg;
	vmap['tinyimg1'] = tinyimg1;
	vmap['tinyimg2'] = tinyimg2;
	vmap['tinyimg3'] = tinyimg3;		
	vmap['vlink'] = vlink;
	vmap['numviews'] = numviews;
	vmap['numcomms'] = numcomms;
	vmap['playlistcreator'] = sessionStorage['hash_val'];
	vmap['language'] = "tamil"; 
	vmap['playlistid'] = listid;

	myJSONText = JSON.stringify(vmap);
	
	console.log(myJSONText);
	return myJSONText;	
}

// function for php & db store 
function postplaylist(myJSONText) {	
	//myJSONText="test data";
	alert(sessionStorage.getItem("pltitle"));
	
	
    //alert(b);
	console.log(myJSONText);
	
	$.ajax({
        type: "POST",
	   url: "model/playlist_db.php",
	   data: {myJSONText:myJSONText, playlistname: sessionStorage.getItem("pltitle")}
	}).done(function(result) {});   

}

function Substring_url(vurl) {
	var foccur=vurl.lastIndexOf("/") + 1;
	var loccur=vurl.indexOf("?");
	var vid = vurl.substring(foccur,loccur);
	return vid;
}

function generate_videolist(listtype) {
    alert(listtype);
    var ytapiurl=0
	var vmap={};
	listid=listtype;
	vmap['playlistid'] = listtype;
    videotag = $('#videos') ;
	console.log("#video tag is initialized");
	
	ytapiurl= 'https://gdata.youtube.com/feeds/api/playlists/'+listtype+'?alt=json';
	//inputstring='<input type="checkbox" id="add" class="cls" checked />' ;
	//console.log(inputstring);
	playlist_generation(vmap,ytapiurl);
}    

function getVelems(map,k) {
    return map[k];
}

function putVelems(map,k,obj) {
    return map[k]=obj;
}

function findElementVElement(map,k) {
  return map[k];
}

function put1(map,k,obj) {
    return map1[k]=obj;
}

function findElement1(k) {
  return map1[k];
}