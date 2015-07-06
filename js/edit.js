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

var dat=getUrlParameter('id');
if(dat!='')
{
//var bootcamp_id=0;
var name='';
var date='';
var price='';
var count='';
var data = { dat:dat,
	type:'edit',
				}
		$.ajax({
                                                                                                 
	    		type: "POST",
	    		url: "model/edit.php",
	    		data: data,
	    		success: function(output) {
			var data=JSON.parse(output);
			var arr=[];
			for(var prop in data){

			arr.push(data[prop]);
			}
				$.each(arr,function(index,value){
				//id=value.id;
				name=value.bootcamp_name;
				 date=value.event_date;
				 price=value.price;
				 count=value.total_count;
				});
				document.getElementById("name").value=name;
				document.getElementById("event_date").value=date;
				document.getElementById("price").value=price;
				document.getElementById("count").value=count;
				//document.getElementById("bootcamp_id").value=dat;
			},


});
}
