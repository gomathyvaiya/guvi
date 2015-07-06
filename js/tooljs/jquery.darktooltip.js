
$(document).ready( function(){



(function($) {

	function DarkTooltip(element, options){
		this.bearer = element;
		this.options = options;
		this.hideEvent;
		this.mouseOverMode=(this.options.trigger == "hover" || this.options.trigger == "mouseover" || this.options.trigger == "onmouseover");
	}

	DarkTooltip.prototype = {
		show: function(){
			var dt = this;
			//Close all other tooltips
			this.tooltip.css('display', 'block');
			//Set event to prevent tooltip from closig when mouse is over the tooltip
			
		},

	
		
		hide1: function(){
			var dt=this;
			this.hideEvent = setTimeout( function(){
				dt.tooltip.hide();
			}, 1000);
		},

		addAnimation: function(){
			switch(this.options.animation){
				case 'none':
					break;
				case 'fadeIn':
					this.tooltip.addClass('animated');
					this.tooltip.addClass('fadeIn');
					break;
				case 'flipIn':
					this.tooltip.addClass('animated');
					this.tooltip.addClass('flipIn');
					break;
			}
		},

		setContent: function(){
			$(this.bearer).css('cursor', 'pointer');
			//Get tooltip content
			if(this.options.content){
				this.content = this.options.content;
			}else if(this.bearer.attr("data-tooltip")){
				this.content = this.bearer.attr("data-tooltip");
			}else{
				// console.log("No content for tooltip: " + this.bearer.selector);
				return;
			}
			if(this.content.charAt(0) == '#'){
				$(this.content).hide();
				this.content = $(this.content).html();
				this.contentType='html';
			}else{
				this.contentType='text';
			}
			//Create tooltip container
			this.tooltip = $("<ins class = 'dark-tooltip " + this.options.theme + " " + this.options.size + " " 
				+ this.options.gravity + "'><div>" + this.content + "</div><div class = 'tip'></div></ins>");
			this.tip = this.tooltip.find(".tip");
			
			$("body").append(this.tooltip);
			
			//Adjust size for html tooltip
			if(this.contentType == 'html'){
				this.tooltip.css('max-width','none');
			}
			
		},

		setPositions: function(){
			var leftPos = this.bearer.offset().left;
			var topPos = this.bearer.offset().top;

			switch(this.options.gravity){
				case 'south':
					leftPos += this.bearer.outerWidth()/2 - this.tooltip.outerWidth()/2;
					topPos += -this.tooltip.outerHeight() - this.tip.outerHeight()/2;
					break;
				case 'west':
					leftPos += this.bearer.outerWidth() + this.tip.outerWidth()/2;
					topPos += this.bearer.outerHeight()/2 - (this.tooltip.outerHeight()/2);
					break;
				case 'north':
					leftPos += this.bearer.outerWidth()/2 - (this.tooltip.outerWidth()/2);
					topPos += this.bearer.outerHeight() + this.tip.outerHeight()/2;
					break;
				case 'east':
					leftPos += -this.tooltip.outerWidth() - this.tip.outerWidth()/2;
					topPos += this.bearer.outerHeight()/2 - this.tooltip.outerHeight()/2;
					break;
			}
			this.tooltip.css('left', leftPos);
			this.tooltip.css('top', topPos);
		},

		setEvents: function(){
			var dt = this;
			if(dt.mouseOverMode){
				this.bearer.mouseover( function(){
					dt.setPositions();
					//$('.dark-tooltip').fadeOut(1000);
					dt.show();
				}),
				
				$('html').click(function(){
					
					dt.hide1();
					
				});
				$('.offer').hover(function(){
					//	alert("d");
						$('.dark-tooltip').fadeOut(1000);
					
				});
			}
		},

		activate: function(){
			this.setContent();
			if(this.content){
				this.setEvents();
			}
		},

		

		

		

		
	}

	$.fn.darkTooltip = function(options) {
		this.each(function(){
			options = $.extend({}, $.fn.darkTooltip.defaults, options);
			var tooltip = new DarkTooltip($(this), options);
			tooltip.activate();
		});	
	}

	$.fn.darkTooltip.defaults = {
        opacity: 0.9,
        content:'',
        size: 'medium',
        gravity: 'south',
        theme: 'dark',
        trigger: 'hover',
        animation: 'none',
       
        finalMessage: '',
        finalMessageDuration: 1000,
        onYes: function(){},
        onNo: function(){}
    };

})(jQuery);


/*
	$('#small-s').darkTooltip({
		size:'small',
		gravity: 'south'
	});
	$('#medium-s').darkTooltip({
		gravity: 'south'
	});    */
	$('div').darkTooltip({
		size:'large',
		gravity: 'south'
	});

});
