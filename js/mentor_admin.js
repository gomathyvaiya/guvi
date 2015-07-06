



$.getJSON('model/mentor_admin.php?type=bootcamp', function(data) {

//<a href='mentor_ans.html?email="+ value.userid +"'>"
var arr=[];
for(var prop in data){
arr.push(data[prop]);
}

var tr='';
	$.each(arr,function(index,value){

	var total=value.total_register;
	if(total==null){
		total=0;
	}
	
	
	 tr += "<tr>";
	 tr += "<td><a id='boot' href='bootcamp_details.html?bootcamp_id="+ value.id +"'>" + value.bootcamp_name +"</td>";
	 tr += "<td>" + value.event_date +"</a></td>";
	 tr += "<td>" + value.total_count +"</td>";
	 tr += "<td>" + total +"</td>";
	 tr += "</tr>";
	 });

 $('#tabledata').append(tr);
$('#examples').dataTable();



})

$.getJSON('model/mentor_admin.php?type=mentor', function(data) {
var arr=[];
for(var prop in data){
arr.push(data[prop]);
}

var tr='';
var n=0;
var app=0;
	$.each(arr,function(index,value){

if(value.status==1)
{
var a="Approved";
app++;
 
}
else if(value.status==2)
{
var a="Rejected";

}
else
{
var a="Pending";

}
 var data = {"date_created":value.created};
var date = new Date(parseInt(data.date_created, 10) * 1000);
// example representations
//alert(date);color:#428bca
//alert(date.toLocaleString());
	//gsession.setSession('email',value.userid);
	var curr_date = date.getDate();
	var curr_month = date.getMonth()+1;
	var curr_year = date.getFullYear();
	var newdate=curr_date+"/"+curr_month+"/"+curr_year;
	 tr += "<tr>";
	 tr += "<td>" + value.name +"</td>";
	if(value.comments==null)
	{
	tr += "<td style='color:blue'> "+ value.userid +"</td>";
	}
	else
	{
	 tr += "<td><a id='mentor' class='mentor_detail' mentor_id='"+ value.userid +"'>" + value.userid +"</td>";
	}
	 tr += "<td>" + newdate +"</td>";
	 tr += "<td>" + value.language +"</td>";
	if(value.comments==null)
	{
	tr += "<td> Didnt attend test </td>"; 
	}
	else
	{
	 tr += "<td>" + a +"</td>"; 
	}
	tr += "<td> 0 </td>";	
	tr += "<td> 0 </td>";
	if(value.status==0)
	{
	tr += "<td> ---- </td>";
	}
	else if(value.comments==null)
	{
	tr += "<td> ---- </td>";
	}
	else
	{
	tr += "<td>" + value.comments +"</td>";
	}
	 tr += "</tr>";
	n+=1;
	 });




 $('#tabledata1').append(tr);
 document.getElementById("apply").value = n;
document.getElementById("approve").value = app;
$('#example').dataTable();



})


$(document).on('click','.mentor_detail',function(){

var mentor_id=$(this).attr('mentor_id');
gsession.setSession('email',mentor_id);
gsession.setSession('men_active',0);
gsession.setSession('men_active',1);
window.location.href="mentor_details.html";

});



