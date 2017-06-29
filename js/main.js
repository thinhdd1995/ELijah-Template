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

// counter
$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 9000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});


// 
 $(document).ready(function() {
      $('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
    });
