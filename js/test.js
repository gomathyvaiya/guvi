

$( document ).ready(function() {

        $.ajax({
	type: "GET",
    
	url: "model/display.php"
	}).done(function(json)  {
  	//json = json.substring(1, json.length - 1);
	var parsed=JSON.parse(json);
	var arr = [];
		for( var x in parsed){
		 	arr.push(parsed[x])

		 	
		 
				}

$.each(arr,function(index,value){
					$('#qno').text(value.Question_No);
 					$('#qus1').text(value.Question1);
					 $('#qus2').text(value.Question2);
					 $('#qus3').text(value.Question3);
					 $('#qus4').text(value.Question4);
					 $('#qus5').text(value.Question5);
});
		
});



});

