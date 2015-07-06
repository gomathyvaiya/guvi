
  
      $(function() {
        var playerEl, playlistEl, renderPlayer;
    
		
        playerEl   = $('.player');
        playlistEl = $('.playlist');
        
        renderPlayer = function(youtubeId) {
          //BN0JlMZCtNU
          var html = '<video id="' + youtubeId + '" width="640" ' + 
                     'height="360" data-uid="' + youtubeId + '" data-youtube-id="' +youtubeId + '" preload="none"></video>';
          
          return html;           
        };

        sublime.load();      
		$.getScript("c_key.js",function (){
		 var playlist_name =  $('#abc').attr("pid");
		//alert(c_key["1"]);
        playerEl.html( renderPlayer(c_key["1"]) );
        sublime.ready(function() {
          sublime.prepare(c_key["1"]);
		  
        });
        
        $('.playlist a').click(function(evt) {
          var videoId;
          
          evt.preventDefault();
          videoId = c_key[$(this).data('index')];
        
          playerEl.html( renderPlayer(videoId) );
          sublime.prepare(videoId);
        });
      });   
        }); 
  