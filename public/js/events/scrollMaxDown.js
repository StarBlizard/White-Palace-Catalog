app.events.scrollMaxDown = document.createEvent('Event');
app.events.scrollMaxDown.initEvent('scrollMaxDown', true, true);

document.addEventListener('scrollMaxDown', function(e, b){

	$(window).scroll(function(){
		var altura = $(document).height();

		if($(window).scrollTop() + $(window).height() == altura) {
			$(window).trigger('scrollMaxDown');
		}
                
	});
}, false);

document.dispatchEvent(app.events.scrollMaxDown);
