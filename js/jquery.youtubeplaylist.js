jQuery.fn.ytplaylist = function(options) {
 
  // default settings
  var options = jQuery.extend( {
    holderId: 'ytvideo',
	playerHeight: '640',
	playerWidth: '800',
	addThumbs: false,
	thumbSize: 'small',
	showInline: false,
	autoPlay: true,
	showRelated: false,
	allowFullScreen: true
  },options);
 
  return this.each(function() {
							
   		var selector = $('.Playlist .accordion-frame');
		
		var autoPlay = "";
		var showRelated = "&rel=0";
		var fullScreen = "";
		if(options.autoPlay) autoPlay = "&autoplay=1"; 
		if(options.showRelated) showRelated = "&rel=1"; 
		if(options.allowFullScreen) fullScreen = "&fs=1"; 
		
		//throw a youtube player in
		function play(id)
		{
		   var html  = '';
	
		   html += '<object height="'+options.playerHeight+'" width="'+options.playerWidth+'">';
		   html += '<param name="movie" value="http://www.youtube.com/v/'+id+autoPlay+showRelated+fullScreen+'"> </param>';
		   html += '<param name="wmode" value="transparent"> </param>';
		   if(options.allowFullScreen) { 
		   		html += '<param name="allowfullscreen" value="true"> </param>'; 
		   }
		   html += '<embed src="http://www.youtube.com/v/'+id+autoPlay+showRelated+fullScreen+'"';
		   if(options.allowFullScreen) { 
		   		html += ' allowfullscreen="true" '; 
		   	}
		   html += 'type="application/x-shockwave-flash" wmode="transparent"  height="'+options.playerHeight+'" width="'+options.playerWidth+'"></embed>';
		   html += '</object>';
			
		   return html;
		   
		};
		
		
		
		function youtubeid(url) {
			var ytid = url.match("[\\?&]v=([^&#]*)");
			ytid = ytid[1];
			return ytid;
		};
		
		
		//load inital video
		var firstVid = selector.children("li:first-child").addClass("currentvideo").children("a").attr("href");
		
		$("#"+options.holderId+"").html(play(youtubeid(firstVid)));
		
		//load video on request
		selector.children("li").children("a").click(function() {
			
			if(options.showInline) {
				$("li.currentvideo").removeClass("currentvideo");
				$(this).parent("li").addClass("currentvideo").html(play(youtubeid($(this).attr("href"))));
			}
			else {
				

$("#"+options.holderId+"").html(play(youtubeid($(this).attr("href"))));
				$(this).parent().parent("ul").find("li.currentvideo").removeClass("currentvideo");
				$(this).parent("li").addClass("currentvideo");
			}
				
			return false;
		});
		
		//do we want thumns with that?
		if(options.addThumbs) {
			
			selector.children().each(function(i){
											  
				var replacedText = $(this).text();
				
				if(options.thumbSize == 'small') {
					var thumbUrl = "http://img.youtube.com/vi/"+youtubeid($(this).children("a").attr("href"))+"/2.jpg";
				}
				else {
					var thumbUrl = "http://img.youtube.com/vi/"+youtubeid($(this).children("a").attr("href"))+"/0.jpg";
				}
				
				
				$(this).children("a").empty().html("<img src='"+thumbUrl+"' alt='"+replacedText+"' />"+replacedText).attr("title", replacedText);
				
			});	
			
		}
			
		
   
  });
 
};