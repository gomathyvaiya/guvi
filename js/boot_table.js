$.getJSON('model/boot_table.php?type=bootcamp', function(data) {

//<a href='mentor_ans.html?email="+ value.userid +"'>"
var arr=[];
for(var prop in data){
arr.push(data[prop]);
}

var tr='';
	$.each(arr,function(index,value){
	var id=value.id;
	var totalcount=value.total_count;
	var regcount=value.bcr_reg_count;
	/*var d = new Date(value.event_date);
	var curr_date = d.getDate();
	var curr_month = d.getMonth()+1;
	var curr_year = d.getFullYear();
	var newdate=curr_date+"/"+curr_month+"/"+curr_year;*/
	{
	 tr += "<tr>";
	 tr += "<td>" + value.event_date +"</td>";
	 tr += "<td>" + value.bootcamp_name +"</td>";
	 tr += "<td>" + value.price +"</td>";
	if(regcount < totalcount)
	 tr += "<td>" +'<a href="bootcamp_register.html?id='+id+'"><input type="button" class="btn btn-success" value="Apply"></a>' +"</td>";
	else
	tr += "<td>" +'<input type="button"  class="btn btn-danger" style="background-color:red;cursor:none" value="Filled">' +"</td>";
	 tr += "</tr>";
	 }
	
	 });

 $('#tabledata').append(tr);

})


