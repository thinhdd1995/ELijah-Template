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


// Process bar
 $(document).ready(function() {
      $('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
    });




// // menu scroll
//       $(document).ready(function() {

//         $(window).scroll(function() {
//           var fromTop = $(document).scrollTop();
//           if ( fromTop > $('#header').height() ) $('.navbar').addClass('navbar-fixed-top');
//           else $('.navbar').removeClass('navbar-fixed-top');
//         });

//       });

// button Scroll down 
$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('div.contents').offset().top }, 'slow');
      return false;
    });
  });


 //Some JS to help with our search


$(function(){
  var $searchlink = $('#searchtoggl i');
  var $searchbar  = $('#searchbar');
  
  $('#menu ul li a').on('click', function(e){
    e.preventDefault();
    
    if($(this).attr('id') == 'searchtoggl') {
      if(!$searchbar.is(":visible")) { 
        // if invisible we switch the icon to appear collapsable
        $searchlink.removeClass('fa-search').addClass('fa-search-minus');
      } else {
        // if visible we switch the icon to appear as a toggle
        $searchlink.removeClass('fa-search-minus').addClass('fa-search');
      }
      
      $searchbar.slideToggle(300, function(){
        // callback after search bar animation
      });
    }
  });
  
  $('#searchform').submit(function(e){
    e.preventDefault(); // stop form submission
  });
});