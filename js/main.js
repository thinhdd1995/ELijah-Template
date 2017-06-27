var $gallery = $('.image-gallery');

$gallery.isotope({
  // options
  itemSelector: '.gallery-item',
  layoutMode: 'masonry'
});

$(".js-controls button").click(function() {
	'use strict';
	var filterValue = $(this).attr('data-filter');
	$(".js-controls button").removeClass('checked');
	$(this).addClass('checked');
	$gallery.isotope({
		filter: filterValue
	});
});

// tooltip
	$(document).ready(function(){
		    $('[data-toggle="tooltip"]').tooltip();   
		});