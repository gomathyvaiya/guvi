$(document).ready(function() {
	
				var username=gsession.getSession('mail');
						var data={
							type:'save',
							var_1:username,
						}

				      $.ajax({
						type: "POST",
		        			url: "model/sendmail1.php",
		        			data: data,
		        			success: function(output){

						},			

					   });

			});
