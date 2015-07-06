			function DropDown(el) {
				this.dd = el;
				this.initEvents();
			}
			DropDown.prototype = {
				initEvents : function() {

					$('#dd').hover( function(event){
					
						$(this).toggleClass('active');
						event.stopPropagation();
					});	
				}
			}

			$(function() {

				var dd = new DropDown( $('#dd') );

				/*$(document).click(function() {
					// all dropdowns
					
					$('.wrapper-dropdown-5').removeClass('active');
				});*/

			});

    var flag=1;
	$(".chooseLanguage").click(function () {
		if(flag==1){
			$('.listItem').removeClass('hideList');
        	$('.listItem').addClass('showList');
        	flag=2;
        }else{
        	$('.listItem').removeClass('showList');
        	$('.listItem').addClass('hideList');
        	flag=1;
        }
	});

			