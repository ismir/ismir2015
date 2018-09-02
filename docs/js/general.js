$(document).ready(function() {
	

	// Click para desplegar botones
	// $(".menu-option").click(function(e) {
		// e.preventDefault();
		
		// var submenu = $(this).find(".submenu-navigation");
		// if(submenu.css("display") == "block")
		// {
			// $(submenu).slideUp(500);
		// }
		// else
		// {
			// $(".submenu-navigation").slideUp(500);
			// $(submenu).slideDown(500);
		// }
	// });
	
	// $(".submenu-navigation a").click(function(e) {
		// e.stopPropagation();		
	// });
	
	$(function() {
		var body = $('#slideshow-bg');
		var backgrounds = [
	   		'url(./css/images/gibralfaro.png)', 
	   		'url(./css/images/larios.png)', 
	   		'url(./css/images/malagueta.png)', 
			'url(./css/images/aduana.png)', 
			'url(./css/images/alcazaba.png)', 
			'url(./css/images/palmeral.png)', 
			'url(./css/images/panorama.png)',
			'url(./css/images/picasso.png)',
			'url(./css/images/puerto.png)',
			'url(./css/images/thyssen.png)'
		];
		var current = 0;

		function nextBackground() {
		
		body.fadeTo(500, 0.3, function()
		{
			body.css(
			   'background-image',
				backgrounds[current = ++current % backgrounds.length]
			 );
		}).fadeTo(500, 1);

		 setTimeout(nextBackground, 5000);
		 }
		 setTimeout(nextBackground, 5000);
		   body.css('background-image', backgrounds[0]);
		 });
});

