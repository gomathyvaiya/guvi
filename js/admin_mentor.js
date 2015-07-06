/*function getUrlParameter(sParam)
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



$(document).ready(function(){
var dat=getUrlParameter('usertype');
var data = { dat:dat,
	type:'admin',
				}
		$.ajax({
                                                                                                 
	    		type: "POST",
	    		url: "model/mentor_admin.php",
	    		data: data,
	    		success: function(output) {
			var obj=$.parseJSON(output); 
			$("#mentor").html(obj.option);
				//alert(output);
			
			},


		});
});*/


$.getJSON('model/admin_mentor.php', function(data) {


var arr=[];
for(var prop in data){
arr.push(data[prop]);
}


var tr='';
var no=1;
$.each(arr,function(index,value){
if(value.status==1)
{
var a="Approved";
}
else if(value.status==2)
{
var a="Rejected";
}
else
{
var a="Pending";

}
 tr += "<tr>";
 tr += "<td>" + no +"</td>";
 tr += "<td><a href='mentor_ans.html?email="+ value.userid +"'>" + value.userid +"</a></td>";
 tr += "<td>" + value.created +"</td>";
 tr += "<td>" + a +"</td>";
 tr += "</tr>";
no++;
 });

 $('#tabledata').append(tr);

})


