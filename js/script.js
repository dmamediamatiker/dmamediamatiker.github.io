/*jQuery(window).load(function() {
	jQuery("#preloader").delay(100).fadeOut("slow");
})
*/



jQuery(document).ready(function($) {

    $(document).ready(function (){
            $(".scrolldown-arrow").click(function (){
                $('html, body').animate({
                    scrollTop: $("#mdwie").offset().top
                }, 1000);
            });
        });

				
});