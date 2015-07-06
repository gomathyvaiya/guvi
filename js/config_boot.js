

$.getJSON('model/config_admin.php?type=bootcamp', function(data) {

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
	 tr += "<td><a href='add_boot.html?type=edit&id="+ value.id +"' id='edit'><img src='images/edit.jpg' width=10% height=10%>&nbsp;&nbsp;<a href='model/delete.php?type=delete&id="+ value.id +"' onclick='return confirmDelete()'><img src='images/bin.png' width=10% height=10%></a></td>";
	 tr += "<td>" + value.bootcamp_name +"</td>";
	 tr += "<td>" + value.event_date +"</a></td>";
	 tr += "<td>" + value.price +"</td>";
	 tr += "<td>" + value.total_count +"</td>";
	 
	 tr += "</tr>";
	 });

 $('#tabledata').append(tr);
$('#example').dataTable();
})



function confirmDelete() 
{
 var agree=confirm('Are you sure want to delete Bootcamp?');
 if (agree)
  return true ;
 else
  return false ;
}


