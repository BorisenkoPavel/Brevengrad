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
});
