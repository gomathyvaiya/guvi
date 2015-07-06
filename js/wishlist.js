/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    'use strict';
    //for randomly getting class for styling of topic box

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function renderTopic(topicName) {
        var node, html;

        node = document.createElement('div');
        html = '';
        html += '<div class="box' + getRandomInt(1, 7) + '">';
        html += '<h3>' + topicName + '</h3>';
        html += '<p align="center">';
        html += '<span class="label label-warning" data-original-title="" title="">';
        html += '<a class="follow" class="label label-info tip" title="' + topicName + '">follow me</a>';
        html += '</span>';
        html += '</p>';
        html += '</div>';

        return $(node).addClass('serviceBox').html(html);
    }

    

    function sendfollow(topic, mailid, hash) {
       var vmap={};
	vmap['topic']=topic;
	vmap['mailid']=mailid;
	vmap['hash']=hash;
	ajaxcall.send_data(vmap,'wishlist_db');
    }

	
    function sendrequest(topic, mailid, hash) {

	var vmap={};
	vmap['topic']=topic;
	vmap['mailid']=mailid;
	vmap['hash']=hash;
	ajaxcall.send_data(vmap,'wishlist_request');


    }	



    function renderTopics() {

        //to be fetched from server
        var topicsList = ["HTML5", "MySQL", "C++ 11", "CMOCK", "Orcale Virtual Box",
                          "STL", "Ubuntu", "CCNA", "OOAD", "AWS", "GIMP", "Testing",
                          "Selenium", "Architecture", "Unix",
                          "OS", "DSP",  "MongoDB", "iOS",
                          "Objective-C", "Ruby", "JSON", "AJAX", "WPF", "ARRAY",
                          "Django", "Spring", "Algorithm", "Hibernate", "Debugging"],
            i,
            l,
            parent = $('#wrapper'),
            node;

        for (i = 0, l = topicsList.length; i < l; i += 1) {
            node = renderTopic(topicsList[i]);
            $(node).appendTo(parent);
        }
    }

    renderTopics();

	
	
	
    $('.follow').click(function () {

        var topic = this.title,
            mailid = gsession.getSession('mail'), // took this information from session variable . 
		    hash = gsession.getSession('hash_val');
			
       alert("Thanks");
        sendfollow(topic, mailid, hash);
        //window.location.href = "http://stackoverflow.com";
    });

    $('#goBtn').click(function () {
        var node, html,
            topic = $("#newTopic").val(),
            mailid = gsession.getSession('mail'), // took this information from session variable . 
            hash =gsession.getSession('hash_val');
		
        if (topic !== '') {
            node = renderTopic(topic);
            $('.addNewTopic').after(node);
            node.hide().fadeIn(1000);


            sendrequest(topic, mailid, hash);
 document.getElementById('info').style.display='block';        
		//alert("Your Topic will Update Soon");
            return;
    
           
        }
    });
});

