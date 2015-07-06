/*
This is the instructions on how to build your own social share toolbar using jQuery and CSS3. The toolbar should be visible at the bottom right corner of your browser. If you hover over the toolbar it will slide up, click the minimize button it will all but disappear, click one of the icons and you will be taken to either the login page or the share page of that social site.

http://www.jquery4u.com/tutorials/jquery-socialize-sharing-tool

*/
(function( $ ) {
  $(document).ready(function() { 
    var url = window.location.href;
    var host =  window.location.hostname;
    var title = $('title').text();
    title = escape(title); //clean up unusual characters
 
    var twit = 'http://twitter.com/home?status='+title+'%20'+url;
    var facebook = 'http://www.facebook.com/sharer.php?u='+url
  /*  var digg = 'http://digg.com/submit?phase=2&url='+url+'&amp;title='+title;
    var stumbleupon = 'http://stumbleupon.com/submit?url='+url+'&amp;title='+title;
    var buzz = 'http://www.google.com/reader/link?url='+url+'&amp;title='+title+'&amp;srcURL='+host;
    var delicious  = 'http://del.icio.us/post?url='+url+'&amp;title='+title;
 */
    var tbar = '<div id="socializethis"><span>Share on <br /></span><div id="sicons">';
    tbar += '<a href="'+twit+'" id="twit" title="Share on twitter"><img src="../../img/share/twitter.png" alt="Share on Twitter" width="32" height="32" /></a>';
    tbar += '<a href="'+facebook+'" id="facebook" title="Share on Facebook"><img src="../../img/share/facebook.png"  alt="Share on facebook" width="32" height="32" /></a>';
   
    tbar += '</div></div>';
    // Add the share tool bar.
    $('body').append(tbar); 
    $('#socializethis').css({opacity: .7}); 
    // hover.
    $('#socializethis').bind('mouseenter',function(){
      $(this).animate({height:'35px', width:'140px', opacity: 1}, 300);
      $('#socializethis img').css('display', 'inline');   
    });
    //leave
    $('#socializethis').bind('mouseleave',function(){
      $(this).animate({ opacity: .7}, 300);
	  minshare();
    });  
   
 
    if(('minshare') == 1){
      minshare();
    }  
 
    function minshare(){
      $('#socializethis').animate({height:'25px', width: '60px', opacity: .7}, 300); 
      $('#socializethis img').css('display', 'none');
      return false;
    }  
  });
})(jQuery);