$.getJSON('model/boot_table.php?type=bootcamp', function(data) {

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
	 tr += "<td>" + value.event_date +"</td>";
	 tr += "<td>" + value.bootcamp_name +"</td>";
	 tr += "<td>" + value.price +"</td>";
	 tr += "<td>" + +"</td>";
	 tr += "</tr>";
	 });

 $('#tabledata').append(tr);

})
