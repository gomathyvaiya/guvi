


$(document).ready(function(){
	var dat=document.getElementById("email");
	var data = { dat:dat,
		type:'mail',
					}
			$.ajax({
		                                                                                         
		    		type: "POST",
		    		url: "model/mentor_ans.php",
		    		data: data,
		    		success: function(output) {


	var arr=[];
	for(var prop in data){
	arr.push(data[prop]);
	}

	var tr='';
	$.each(arr,function(index,value){
		 tr += "<tr>";
		 tr += "<td>" + value.answer1 +"</td>";
		 tr += "<td>" + value.answer2 +"</td>";
		 tr += "<td>" + value.answer3 +"</td>";
		 tr += "<td>" + value.answer4 +"</td>";
		 tr += "<td>" + value.answer5 +"</td>";
		 tr += "</tr>";
	 });

	 $('#tabledata').append(tr);
	}

	})
});


$("#approve").click(function(){
var dat=getUrlParameter('email');
var data = { dat:dat,
	type:'accept',
				}
		$.ajax({
                                                                                                 
	    		type: "POST",
	    		url: "model/mentor_status.php",
	    		data: data,
	    		success: function(output) {
			window.location.href="admin_mentor.html";
				//alert(output);
			
			},


		});
});


$("#reject").click(function(){
var dat=getUrlParameter('email');
var data = { dat:dat,
	type:'reject',
				}
		$.ajax({
                                                                                                 
	    		type: "POST",
	    		url: "model/mentor_status1.php",
	    		data: data,
	    		success: function(output) {
			window.location.href="admin_mentor.html";
				//alert(output);
			
			},


		});
});
