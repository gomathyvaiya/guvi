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

$(document).ready(function(){

	var arr=new Array();
	var dat=getUrlParameter('bootcamp_id'); 
if(dat!=""){	
	var data = { dat:dat,type:'bootcamp_details',
		   }
			$.ajax({                                                                            
		    		type: "POST",
		    		url: "model/mentor_admin.php",
		    		data: data,
		    		success: function(output) { 
				var output=JSON.parse(output);
				
					for(var prop in output){
					arr.push(output[prop]);
					}
					var tr='';
					$.each(arr,function(index,value){
						 tr += "<tr>";
						 tr += "<td>" + value.name +"</td>";
						 tr += "<td>" + value.email +"</td>";
						 tr += "<td>" + value.phone +"</td>";
						 tr += "<td>" + value.mode_of_payment +"</td>";
						 tr += "</tr>";
					 });
					 $('#tabledata1').append(tr);
					$('#examples').dataTable();
				}
				});
		var data1 = { dat:dat,type:'bootcamp_details_name',
		   	}
			$.ajax({                                                                            
		    		type: "POST",
		    		url: "model/mentor_admin.php",
		    		data: data1,
		    		success: function(output) { 
				var output=JSON.parse(output);
					$.each(output,function(index,value){
				document.getElementById("boot_name").value = "Bootcamp : "+value.bootcamp_name ;
					 });
				}
			});
		
	}

});



