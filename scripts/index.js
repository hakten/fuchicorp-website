
	jQuery(document).ready(function($){
		var nextEl = 0;
		var scrollTowards;
		var sections = jQuery.makeArray($(".section"));
		//scroll up and down
    var scroll = function (event){
      if (Math.sign(event.wheelDelta) < 0) {
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
          };
        }
        else if(Math.sign(event.wheelDelta) > 0){
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
        };
      }
			$(window).focus();
    };
		//
			$(window).on('wheel', debounce(function(){
        scroll(event);
      }, 50, true));

	});
