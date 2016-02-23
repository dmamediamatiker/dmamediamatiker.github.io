jQuery(window).load(function() {
	jQuery("#mdloader").delay(1000).fadeOut("slow", function(){
                                            
        $("body").removeClass("noscroll");
        $("#mdhome-skyline").removeClass("vhidden"); 
        $("#mdhome-skyline").addClass("fadeIn");
        $("#mdhometext").removeClass("vhidden"); 
        $("#mdhometext").addClass("fadeInUp"); 
        $(".scrollhint").addClass("bounce");
        $("#skyline").addClass("animatedskyline");
    });
    
});

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
        $(".overlaywrapper").addClass("fadeInUp");
    } );
    $('.closeoverlay').click( function() {        
        $(".overlaywrapper").removeClass("fadeInUp");
    } );
    $('.footercloseoverlay').click( function() {        
        $(".overlaywrapper").removeClass("fadeInUp");
    } );
				
});

$(document).ready(function(){
    

                
    $('.notanimated').bind('inview', function (event, visible) {
       
        if (visible == true) {
            // element is now visible in the viewport
            $(this).addClass('animatedballon');
        }
    });
    
});

