/*jslint browser: true*/
/*global $, jQuery, alert*/

var listid = 0, temp = 0, myJSONText = 0, htmlString = '<ul id="videoslisting">', videotag, i = 0, inputstring; //global variables for transfer data to getdetails function

// function for substring playlist id from channel
function substring_playlist(videoid) {
    //	console.log("inside substring function");
    var videoid = videoid;
    var foccur = videoid.lastIndexOf(":") + 1;
    var loccur = videoid.length;
    var vid = videoid.substring(foccur, loccur);
    //	console.log(vid);
    return vid;
}

// function for playlist generation 
function channellist_generation(ytapiurl, inputstring) {
   // console.log("ragu");
   // console.log("test");
    //	alert("hi");
    var pmap = {};
    pmap['ytapiurl'] = ytapiurl;
    $.getJSON(ytapiurl, function (data) {
        $.each(data.feed.entry, function (i, item) {
            var title = item['title']['$t'];
            var videoid = item['id']['$t'];
            var thumbimg = item['media$group']['media$thumbnail'][0]['url'];
            var idname = ConvertHtml(thumbimg, title, substring_playlist(videoid), inputstring, title);
            idname = '#' + idname;

            writedata1(thumbimg, title, videoid);
            listid = document.getElementById('textinput').value;
            //getdetails(listid,temp,myJSONText);
            $('.cls').click(function () {
                // alert("hi");
                console.log("gggggg");
                // alert(this.id);

                sessionStorage.setItem("id", this.id);
                sessionStorage.setItem("pltitle", this.attributes["playlistname"].value);
                sessionStorage.setItem("status", "true");
                window.location = "playlist_generation.html";
            });

            //	console.log("playlist generation");
        });
    });
}

// function for convert to html string
function ConvertHtml(thumbimg, title, videoid, inputstring, plname) {
    //i=i+1;
    var temp;
    //var idname="chkbtn"+i;
	if (inputstring === "button") {
        temp = '<input type="button" id="' + videoid +
               '" playlistname="' + plname + '" value="Import" class="cls" style="float: right;"  />';
    }

    //	inputstring='<input type="button" id="chkbtn" class="cls" name="" value="View List" /> ';
	//console.log("winter");	
	htmlString += ' <li class="span3" id="border"> <div class="thumbnail"> ';
	htmlString += '<img  height="42" width="42" src="' + thumbimg + '"   alt="ALT NAME"> <h6>' + title + '</h6> ';
	htmlString += '<div class="make-switch" data-on="success" data-off="danger">';
	htmlString += temp;
    //htmlString+='<input type="hidden"  id="hdn"  value="'+substring_playlist(videoid)+'"  name="hdn" />';

	htmlString += '</div> </div>  </li>';
	videotag.html(htmlString + "</ul>");
	//return idname;
	//alert("kl");
	console.log(inputstring);
	console.log("inside html data function");
}

// function for data to write  into map 
function writedata1(title, videoid, thumbimg) {
    //console.log("a winter inside write data");
	var vmap = {}; // or var map = {};
	vmap['title'] = title;
	vmap['videoid'] = videoid;
	vmap['thumbimg'] = thumbimg;
	myJSONText = JSON.stringify(vmap);
	return vmap;
}

// function for php & db store 
function getdetails(listid, temp, myJSONText) {
    console.log(listid);
	console.log(temp);
	console.log(myJSONText);
	$.ajax({
        type: "POST",
        url: "model/playlist_info.php",
        data: {
            listid: listid,
            temp: temp,
            myJSONText: myJSONText
        }
    }).done(function (result) {});
}

function radio() {
    var listtype = 0;
	if (document.getElementById('ImportVideos-0').checked === true) {
        listtype = document.getElementById('ImportVideos-0').value;
    } else {
        listtype = document.getElementById('ImportVideos-1').value;
    }
    return listtype;
}


/*
//function Substring_url(vurl) {
    var listtype=radio();
    var ytplaylisturl =0;
	if(listtype=="Playlist") {
        // code for playlists
        ytplaylisturl='https://gdata.youtube.com/feeds/api/playlists/'+listidentifier+'?alt=json';
    } else {
        // code for channel  name
        ytplaylisturl = 'https://gdata.youtube.com/feeds/api/users/'+listidentifier+'/playlists?v=2&alt=json';
    }
	
$(function () {
    $("#btn_click").click( function() {
        console.log ( "Loading playlist");
        //var listtype=0;
        //listtype = radio();

        var listid=0;
        listid=document.getElementById('textinput').value;
        //lp1(listtype); 
    });
});
*/



function Substring_url(vurl) {
    var foccur = vurl.lastIndexOf("/") + 1;
    var loccur = vurl.indexOf("?");
    var vid = vurl.substring(foccur, loccur);
    return vid;
}

function generate_videolist1(listtype) {
    var listid = 0;
    listid = document.getElementById('textinput').value;
    var listidentifier = 0;
    listidentifier = listid;
    console.log(listidentifier);
    var listtype = 0;
    listtype = radio();
    var ytapiurl = 0;
    videotag = $('#videos');
    console.log("#video tag is initialized");
    if (listtype === "Playlist") {
        ytapiurl = 'https://gdata.youtube.com/feeds/api/playlists/' + listidentifier + '?alt=json';
        
        //playlist_generation(ytapiurl,inputstring);
        generate_videolist(listid);
    } else { // this code is for channel
        ytapiurl = 'https://gdata.youtube.com/feeds/api/users/' + listidentifier + '/playlists?v=2&alt=json';
        inputstring = "button";
        
        
        channellist_generation(ytapiurl, inputstring);
        console.log(inputstring);
        //	console.log(videoid);
        
        
        //getdetails(listid,temp,myJSONText);
        //console.log(" winter session");
    }
}

$(document).ready(function () {

    $("#fetch_det").click(function () {
        console.log("Loading playlist");
        var listtype = 0;
        listtype = radio();
        generate_videolist1(listtype);
    });
   
    $("#add_det").click(function () {
        function validate() {
            var remember = document.getElementById('add');
            if (remember.checked) {
                var test = function (event) {
                    event.preventDefault();
                    //do stuff
                };
            } else {
                alert("You didn't check it! Let me check it for you.");
            }
            //listtype=document.getElementById('ImportVideos-0').value;
        }
        /*else
        {
            listtype=document.getElementById('ImportVideos-1').value;
        }*/
        //validate();
        //getdetails(listid,temp,myJSONText);
    });
    
    if (window.sessionStoreage) {
        sessionStorage.removeItem('id');
    }

});