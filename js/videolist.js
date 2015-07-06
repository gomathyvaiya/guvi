/*jslint browser: true*/
/*global $, jQuery, alert*/

function render_v2(title, tmbnail, Vlink, Views) {
    var htmlString = '<li class="span3"> <div class="thumbnail thumbnailborder">' + 
                     ' <div class="caption"> <h4>' + title + 
                     '</h4> <p>This is a temp description</p>' +
                     '<p><a href="#" class="btn btn-inverse" rel="tooltip" title="Views">' + 
                     '<i class="icon-eye-open">' + Views + '</i></a>' + 
                     ' <a data-toggle="modal" href="#example" d="' + Vlink +
                     '" rel="tooltip" title="Visit Website" class="btn btn-inverse">' + 
                     '<i class="icon-share"></i></a></p> </div> <img src=' + tmbnail + 
                     '> <h5>' + title + '</h5></div> </li>';

    $('#hover-cap-4col').append(htmlString);
    $("[rel='tooltip']").tooltip();
    $('#hover-cap-4col .thumbnail').hover(function () {
        $(this).find('.caption').slideDown(250);
    }, function () {
        $(this).find('.caption').slideUp(250);
    });
}


$(document).ready(function () {
    console.log("Loading playlist");
    //alert("Loading playlist");
    lp();
    sessionStorage.removeItem('pid');
    //JSONDump('PLka4yzFOV_NkfOP3gp16uCZtLd7vwT2vI');
    //fillNode('This is C tuts','"https://i1.ytimg.com/vi/yU0QY7oEryM/0.jpg"');
});

function vtrim(vurl) {
    var foccur = vurl.lastIndexOf("/") + 1;
    var loccur = vurl.indexOf("?");
    var vid = vurl.substring(foccur, loccur);
    return vid;
}

function lp() {
    var listidentifier = sessionStorage.getItem('pid')
    console.log(listidentifier);

    JSONDump(listidentifier);
    var pmap = {}; // or var map = {};

    var htmlString = '<ul id="videoslisting">';
    // var channelname = $(this).attr('href').substring(1);
    //var ytapiurl    = 'http://gdata.youtube.com/feeds/api/users/'+channelname+'/uploads?alt=json&max-results=10';
    //	var ytapiurl    = 'http://gdata.youtube.com/feeds/api/users/'+channelname+'/uploads?alt=json';
    //https://gdata.youtube.com/feeds/api/users/reach2arunprakash/playlists?v=2&alt=json  /*For playlists*/
    var ytapiurl = 'https://gdata.youtube.com/feeds/api/playlists/' + listidentifier + '?alt=json';

    //pmap['channelname'] = channelname;
    pmap['ytapiurl'] = ytapiurl;

    $.getJSON(ytapiurl, function (data) {
        $.each(data.feed.entry, function (i, item) {
            var title = item['title']['$t'];
            var videoid = item['id']['$t'];
            var pubdate = item['published']['$t'];
            var fulldate = new Date(pubdate).toLocaleDateString();

            var category = item['category']['term'];
            var rating = item['gd$rating'] || {};
            var avgrating = rating['average'];
            //var maxrating = rating ['max'];
            var minrating = rating['min'];
            var numRaters = rating['numRaters'];

            var thumbimg = item['media$group']['media$thumbnail'][0]['url'];
            var tinyimg1 = item['media$group']['media$thumbnail'][1]['url'];
            var tinyimg2 = item['media$group']['media$thumbnail'][2]['url'];
            var tinyimg3 = item['media$group']['media$thumbnail'][3]['url'];
            var vlink = item['media$group']['media$content'][0]['url'];
            var ytlink = item['media$group']['media$player'][0]['url'];
            var duration = item['media$group']['yt$duration']['seconds'];

            var numviews = item['yt$statistics']['viewCount'];
            var numcomms = item['gd$comments']['gd$feedLink']['countHint'];

            htmlString += '<li class="clearfix">';
            htmlString += '<div class="videothumb morph pic"><target="_blank"><img src="' + 
                          thumbimg + '" width="120" height="580"></div>';

            //htmlString+= '<p><a data-toggle="modal" href="#example" class="btn btn-primary btn-large" vlink=''' + vlink + ''' >Launch demo modal</a></p>'
            //htmlString +='<div class="alert alert-block"> <h4> <a href="C:/A_MyFolder/guvi/bootbusiness/bootbusiness/Player.html" class="btn btn-large pull-right">Click to watch</a> </h4> <p>Single line of descriptive text.</p> </div>';

            htmlString += '<div id="spiderman"><p><a data-toggle="modal" href="#example" '+
                          ' class="btn btn-primary btn-large" vlink="' + vtrim(vlink) + 
                          '" >Watch Video</a></p></div>';
            
            htmlString += '<div class="meta"> <p><strong>' + title +
                          '</strong></p> <p>Total views: <strong>' + 
                          commafy(numviews) + '</strong></p>  </div>';

            //function fillNode(title,tmbnail,Vlink,Views)

            render_v2(title, thumbimg, vtrim(vlink), commafy(numviews));

            //Construct JSON dump
            var videoObj = '{';
            videoObj = videoObj + '"title":' + "\"" + title + "\"" + ','
            videoObj = videoObj + '"videoid":' + "\"" + videoid + "\"" + ',';
            videoObj = videoObj + '"pubdate":' + "\"" + pubdate + "\"" + ',';
            videoObj = videoObj + '"category":' + "\"" + category + "\"" + ',';
            videoObj = videoObj + '"avgrating":' + "\"" + avgrating + "\"" + ',';
            //videoObj = videoObj + '"maxrating":' + "\""+maxrating +"\""+ ',';
            videoObj = videoObj + '"minrating":' + "\"" + minrating + "\"" + ',';
            videoObj = videoObj + '"numRaters":' + "\"" + numRaters + "\"" + ',';
            videoObj = videoObj + '"thumbimg":' + "\"" + thumbimg + "\"" + ',';
            videoObj = videoObj + '"tinyimg1":' + "\"" + tinyimg1 + "\"" + ',';
            videoObj = videoObj + '"tinyimg2":' + "\"" + tinyimg2 + "\"" + ',';
            videoObj = videoObj + '"tinyimg3":' + "\"" + tinyimg3 + "\"" + ',';
            videoObj = videoObj + '"vlink":' + "\"" + vlink + "\"" + ',';
            videoObj = videoObj + '"ytlink":' + "\"" + ytlink + "\"" + ',';
            videoObj = videoObj + '"ytlink":' + "\"" + ytlink + "\"" + ',';
            videoObj = videoObj + '"numviews":' + "\"" + numviews + "\"" + ',';
            videoObj = videoObj + '"numcomms":' + "\"" + numcomms + "\"";
            videoObj = videoObj + '}';

            var vmap = {}; // or var map = {};
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
            //	var myJSONText = JSON.stringify(vmap);
            //console.log(myJSONText);

            // console.log(videoObj);
        }); // end each loop
        //$('#videos').html(htmlString + "</ul>");
    }); // end json parsing
}

function JSONDump(listidentifier) {
    var ytplaylisturl = 'https://gdata.youtube.com/feeds/api/playlists/' + listidentifier + '?alt=json&max-results=10';

    $.getJSON(ytplaylisturl, function (data) {
        $.each(data.feed.entry, function (i, item) {
            var title = item['title']['$t'];
            var videoid = item['id']['$t'];
            var pubdate = item['published']['$t'];
            var fulldate = new Date(pubdate).toLocaleDateString();
            var category = item['category']['term'];
            var rating = item['gd$rating'] || {};
            var avgrating = rating['average'];
            //var maxrating = rating ['max'];
            var minrating = rating['min'];
            var numRaters = rating['numRaters'];
            var thumbimg = item['media$group']['media$thumbnail'][0]['url'];
            var tinyimg1 = item['media$group']['media$thumbnail'][1]['url'];
            var tinyimg2 = item['media$group']['media$thumbnail'][2]['url'];
            var tinyimg3 = item['media$group']['media$thumbnail'][3]['url'];
            var vlink = item['media$group']['media$content'][0]['url'];
            var ytlink = item['media$group']['media$player'][0]['url'];
            var duration = item['media$group']['yt$duration']['seconds'];
            var numviews = item['yt$statistics']['viewCount'];
            var numcomms = item['gd$comments']['gd$feedLink']['countHint'];
            var vmap = {}; // or var map = {};
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
            var myJSONText = JSON.stringify(vmap);
            console.log(myJSONText);
        });
    });
}