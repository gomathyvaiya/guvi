  //Video Player
  $(document).ready(function() 
 {
    var headTitle=gsession.getSession('headTitle');
    var head= document.getElementsByTagName('head')[0];
    var flag=1;
    document.getElementById('divHead').style.marginLeft = '22px';
    document.getElementById('divHead').innerHTML=headTitle;
    document.getElementById('divTopic').style.marginLeft = '10px';
    document.getElementById('divTopic').innerHTML="  / " +$('.carousel p').eq(0).text();;
    //Auto Play
    if(flag==1){
      var user_link=$('#thumbs img').eq(0).attr('id');
    //  var $img = document.getElementsByTagName("img")[0].alt;
      
      $("#layer").html(""); 
        /*var tag=$('<video id="vid" class="video-js vjs-default-skin" controls preload="auto" width="100%" height="100%" data-setup=\'{ "techOrder": ["youtube", "html5", "flash"], "src": "'+user_link+'" }\'></video>');
        $('#thumbs img:eq(0)').addClass('selected');
        $(tag).appendTo('#layer');
*/
          /* Style sheet  */
  /*         var link1= document.createElement('link');
           link1.type= 'text/css';
           link1.id= 'video';
           link1.rel='stylesheet';
           link1.href= '../../css/video-js.css';
           head.appendChild(link1);
*/
          /* Video.js 
           var script1= document.createElement('script');
           script1.type= 'text/javascript';
           script1.src= '../../js/video.js';
           head.appendChild(script1);
           Youtube.js 
           var script2= document.createElement('script');
           script2.type= 'text/javascript';
           script2.src= '../../js/youtube.js';
           head.appendChild(script2);*/
        flag++;
      }
    //Play event happens on list click
    $('.carousel p').click(function() 
    {
      /* Video type */  
      var start=0;
      var user_link=this.id;
      var length = $( "#thumbs img" ).length;
      var topic=$(this).text();
      if(topic!='Menu'){
        document.getElementById('divTopic').innerHTML="/ " +topic;
      }

      while(start<length){
        var imgUrl=$('#thumbs img').eq(start).attr('id');
          if(imgUrl==this.id){
            $('#thumbs img').eq(start).addClass('selected');
          }else{
            $('#thumbs img').eq(start).removeClass('selected');
          }
         start++;
      }
      //$('#thumbs img').attr(this.id).addClass='selected';
      var actual=document.getElementById('vid1_youtube_api').src;
      var clickSrc= user_link;
      var url = "https://www.youtube.com/embed/";
      var newSrc = clickSrc.indexOf("=");
      var paramsclick = clickSrc.slice(newSrc+1,clickSrc.length);//alert(actual);
      var paramstart = actual.indexOf("?");
      var params = actual.slice(paramstart,actual.length);
      var newUrl = url+paramsclick+params;
      $('#homepage-sidebar-ads').remove();
      $('#vid').eq(start).addClass('vjs-play-control vjs-control  vjs-playing');
      document.getElementById("vid1_youtube_api").src=newUrl;
      flag++;
    });


    $('#thumbs').carouFredSel({
          synchronise: ['#box', false, false],
          auto: false,
          width: 540,
          height: 120,
          circular: false,
          infinite: false,
          items: {
            visible: 4,
            start: 0,
            //end:$('#thumbs').length

          },
          pagination: "#pager",
          prev: '#prev',
          next: '#next',

        });
    $('.carousel').each(function() {
    var $cfs = $(this);
    $cfs.carouFredSel({
      direction: 'up',
      circular: false,
      infinite: false,
      align: false,
      width: 130,
      height: 90,
      items: 1,
      auto: false,
      scroll: {
        queue: 'last'
      }
    });
    $cfs.hover(
      function() {
        $cfs.trigger('next');
      },
      function() {
        $cfs.trigger('prev');
      }
    );
  });
        
    $('#divHead').click(function() 
    {  
      window.location = "../../PublicPlaylists.html";
    });
});
