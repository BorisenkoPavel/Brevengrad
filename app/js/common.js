$(function() {

	$('.project-carousel').owlCarousel({
		items: 2,
		nav: true,
		dots: false,
	
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			}
		}
	});

	$('[data-fancybox="gallery"]').fancybox({
		hideScrollbar: false
	});

	$("#phone").mask("+7(999) 999-9999");
	
});
