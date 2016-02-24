/*  
    Die folgende Funktion ist für den Loadingscreen. Wenn die Seite vollständig geladen ist, wird dieser    nach einer Sekunde ausgeblendet. Mit den Einstellungen in der weiteren Funktion werdenverschiedenen Elemente Klassen entfernt und hinzugefügt, dass sie Seite richtig funktioniert und so erscheint, wie es vorgesehen ist.
*/
jQuery(window).load(function() {
	jQuery("#mdloader").delay(1000).fadeOut("slow", function(){
                                            
        $("body").removeClass("noscroll");              // Entfernt die Klasse, die verhindert dass man im Loadinscreen scrollen kann.
        $("#mdhome-skyline").removeClass("vhidden");    // Blendet das Objekt ein
        $("#mdhome-skyline").addClass("fadeIn");        // Fügt die Animate.css-Klasse für die Animation hinzu
        $("#mdhometext").removeClass("vhidden");        // Blendet das Objekt ein
        $("#mdhometext").addClass("fadeInUp");          // Fügt die Animate.css-Klasse für die Animation ein
        $(".scrollhint").addClass("bounce");            // Fügt dem Element einen Bounce-Effekt hinzu
        $("#skyline").addClass("animatedskyline");      // Fügt dem Element die Klasse für die SVG-Animation zu, damit die Animation erst startet, wenn der Nutzer die Webseite und nicht mehr den Loadingscreen sieht.
    });
    
});

/*
    In der folgenden Funktion werden alle jQuery-Befehle ausgeführt, wenn das Dokument bereit ist.
*/
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

