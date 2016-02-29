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
    
    // Mit der folgenden Funktion wird die Seite bis zu einem gewünschten Element (in diesem Fall dem #mdwie) gescrollt, wenn auf den kleinen Pfeil auf dem Startscreen geklickt wird. Der Scrollvorgang wird dabei animiert.
    $(".scrolldown-arrow").click(function (){
        $('html, body').animate({
            scrollTop: $("#mdwie").offset().top
        }, 1000);
    });    
    
    // Mit dieser Funktion wird der Hintergrund der Navigationsleiste von transparent zu einem halbtranspartenten Weiss umgestellt, wenn der User eine gewisse Position gescrollt hat.
    $(window).scroll(function(){
        // Bei einer Scrollhöhe von über 1000px wird die Funktion ausgelöst und der Hintergrund eingeblendet. Die Einblendanimation läuft über css.
        if($(window).scrollTop() >= 1000){
            $("#mdheader").css("background-color","rgba(255,255,255,0.75)");
        }
        // Scrollt der Nutzer wieder nach oben und an eine Scrollposition kleiner als 1000px, wird der Hintergrund wieder ausgeblendet.
        else {
            $("#mdheader").css("background-color","rgba(0,0,0,0)");
        }
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
        // Wenn das Element im sichtbaren Bereich ist, wird ein Befehl ausgefüht. In diesem Fall habe ich die Klasse hinzugefügt, in der via css alle Einstellungen zur Animation definiert sind.
        if (visible == true) {
            $(this).addClass('animatedballon');
        }
    });
});

