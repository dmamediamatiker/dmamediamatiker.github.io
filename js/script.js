jQuery(window).load(function() {
	jQuery("#mdloader").delay(500).fadeOut("slow");
    //$(".loaderbar").addClass("loaded");
	$("body").removeClass("noscroll");
})



jQuery(document).ready(function($) {
    

    $(".scrolldown-arrow").click(function (){
        $('html, body').animate({
            scrollTop: $("#mdwie").offset().top
        }, 1000);
    });
    
    $('.text-extender').click( function() {
        $("#aboutme").addClass("text-visible");
    } );
    
    $('.overlay').click( function() {
        $(".overlaywrapper").addClass("animated");
    } );
    $('.closeoverlay').click( function() {        
        $(".overlaywrapper").removeClass("animated");
    } );
				
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

