/*jQuery(window).load(function() {
	jQuery("#preloader").delay(100).fadeOut("slow");
})
*/



jQuery(document).ready(function($) {

    $(".scrolldown-arrow").click(function (){
        $('html, body').animate({
            scrollTop: $("#mdwie").offset().top
        }, 1000);
    });
				
});

$(document).ready(function(){
                
                    $('.notanimated').bind('inview', function (event, visible) {
       
                  if (visible == true) {
                    // element is now visible in the viewport
                    $(this).addClass('animatedsvg');
                  }
                });
                //$('.myclass').trigger('inview');
                
            });

