
//$(document).ready(function initMap() {
//        var location = {lat: 51.5100756, lng: -0.1427526};
//        var map = new google.maps.Map(document.getElementById('map'), {
//          zoom: 14,
//          center: location,
//          scrollwheel: false
//        });
//        var marker = new google.maps.Marker({
//          position: location,
//          map: map
//        });
//      });
//initMap();
      
$(document).ready(function(){
$('.submit').click(function(){
    $('.input').hide();
    $('.submitted').show();
});

});

$(document).ready(function(){
    $('.blog-p').hide();
    $('.blogai').click(function(){
        $('.blog-p', this).slideToggle(400);
  });
});
  
                  $(document).ready(function(){                
    $('.burger').click(function(){
        $('.lol').slideToggle(400, function(){
            $('.lol').toggleClass('menu'); 
        })
    })
 }); 

$(document).ready(function(){

    $(".peleda > .owl-carousel").owlCarousel({
         items: 1,
         loop: true,
         autoplay: true,
         autoplayTimeout: 3000,
         autoplayHoverPause: true,
         margin: 50
         });
    
      $(".project-galery > .owl-carousel").owlCarousel({
         items: 3,
         loop: true,
         autoplay: true,
         autoplayTimeout: 3000,
         autoplayHoverPause: true,
         margin: 50
         });
    
    $(".enlarge").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
    
    
     $(".youtube").fancybox({
			'padding'		: 0,
			'autoScale'		: true,
			'transitionIn'	: 'none',
			'transitionOut'	: 'none',
			'width'			: 640,
			'height'		: 385,
//			'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
			'type'			: 'swf',
			'swf'			: {
			'wmode'			: 'transparent',
			'allowfullscreen'	: 'true'
			}
		});

		return false;
	});
    
        
  $(document).ready(function(){  
   $('.job').slice(0, 3).show();
    $('#loadMore').on('click', function(){
       $('.job:hidden').slice(0, 3).slideDown(300);
        if ($('.job:hidden').length == 0) {
            $('#loadMore').fadeOut(500);
        };
        
    });
    $('.job').on('click',function(){
        $('p', this).slideToggle(300).show();
    });
});

