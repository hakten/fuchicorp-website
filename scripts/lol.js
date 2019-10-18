define(function(require){
	var $ = require('jquery.min');
	var anime = require('anime.min');
	var th = require('throttle');
  var scroll = function(event){
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
  };
	
  	jQuery(document).ready(function($){
  		window.scrollTo({top: 0,});
  		var nextEl = 0;
  		var scrollTowards;
  		var sections = jQuery.makeArray($(".section"));
      
  	if(!(window.Cowboy)){
  	   window.addEventListener("mousewheel", $.debounce(300, true, scroll(event)), false);
    }
      	
  


  	});
});
