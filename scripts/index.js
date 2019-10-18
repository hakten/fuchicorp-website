define(function(require){
	var $ = require('jquery.min');
	var anime = require('anime.min');
	var th = require('throttle');

	
  	jQuery(document).ready(function($){
  		$(window).scrollTop(0);
  		var nextEl = 0;
  		var scrollTowards;
  		var sections = jQuery.makeArray($(".section"));
  
  	if(!(window.Cowboy)){
  			$(window).on('wheel', $.debounce(50, true, function(event) {
  			if (event.originalEvent.wheelDelta < 0) {

  				switch (nextEl){
  					case 2: 
  					break;
  					default: 
  					nextEl++;
			   		scrollTowards = $(sections[nextEl]).position().top;
					window.scrollTo({
						top: scrollTowards,
						behavior: 'smooth',
					});
					$(window).focus();
  				}
			}
			else if(event.originalEvent.wheelDelta > 0){
				switch (nextEl){
  					case 0: 
  					break;
  					default: 
  					nextEl--;
			   		scrollTowards = $(sections[nextEl]).position().top;
					window.scrollTo({
						top: scrollTowards,
						behavior: 'smooth',
					});
  				}
			}
  		}));
  	}
    
  	else{
  		$(window).on('wheel', Cowboy.debounce(50, true, function(event) {
  			if (event.originalEvent.wheelDelta < 0) {

  				switch (nextEl){
  					case 2: 
  					break;
  					default: 
  					nextEl++;
			   		scrollTowards = $(sections[nextEl]).position().top;
					window.scrollTo({
						top: scrollTowards,
						behavior: 'smooth',
					});
					$(window).focus();
  				}
			}
			else if(event.originalEvent.wheelDelta > 0){
				switch (nextEl){
  					case 0: 
  					break;
  					default: 
  					nextEl--;
			   		scrollTowards = $(sections[nextEl]).position().top;
					window.scrollTo({
						top: scrollTowards,
						behavior: 'smooth',
					});
  				}
			}
  		}));
  	}
  	
  


  	});
});
