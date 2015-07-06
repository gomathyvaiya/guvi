function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}   



$("#submit").click(function () {
			
       signup();
    });
function signup(){
var dat=getUrlParameter('id');
var name=document.getElementById('name').value;
var event=document.getElementById('event_date').value;
var price=document.getElementById('price').value;
var count=document.getElementById('count').value;
//var id=document.getElementById('bootcamp_id').value;
if(name=='')
{
document.getElementById('name').placeholder="Enter your name";
document.getElementById('name').focus();
}
else if(event=='')
{
document.getElementById('event_date').placeholder="select date";
document.getElementById('event_date').focus();
}
else if(price=='')
{
document.getElementById('price').placeholder="Enter price";
document.getElementById('price').focus();
}
else if(count=='')
{
document.getElementById('count').placeholder="Enter count value";
document.getElementById('count').focus();
}
else
getdetails(name,event,price,count,dat);
}


function getdetails(name,event,price,count,dat) {
    'use strict';
    
	var vmap={};
	vmap['name']= name;
	vmap['event'] = event;
	vmap['price'] = price;
	vmap['count']= count;
	vmap['id']=dat;
	
		ajaxcall.send_data(vmap,'bootadmin',function(result){ 
        result = result.substring(1, result.length - 1);
        var t = JSON.stringify(result);	
		
	     window.location = "config_boot.html";   
        });
        
} 
