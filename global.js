//Resize items
function resizeItems() {
    resizeBlock($(".item__content"));
    resizeBlock($(".item"));
}
$(window).on("load", function () { resizeItems(); });
$(window).on("resize", function () { resizeItems() });

// Colourise Museums locations
function museumsColour() {
	var museum = $('.event-location__link').html();

	if (museum.indexOf('Tolhouse') > -1) {
		$('.event-location__link').css('color', '#7E6B71');
	}
	else if (museum.indexOf('Gressenhall') > -1) {
		$('.event-location__link').css('color', '#597730');
	}
	else if (museum.indexOf('Cromer') > -1) {
		$('.event-location__link').css('color', '#0070A5');
	}
	else if (museum.indexOf('Elizabethan') > -1) {
		$('.event-location__link').css('color', '#CF171D');
	}
	else if (museum.indexOf('Museum of Norwich') > -1) {
		$('.event-location__link').css('color', '#CB4363');
	}
	else if (museum.indexOf('Castle') > -1) {
		$('.event-location__link').css('color', '#42145F');
	}
	else if (museum.indexOf('Stranger') > -1) {
		$('.event-location__link').css('color', '#B32017');
	}
	else if (museum.indexOf('Ancient') > -1) {
		$('.event-location__link').css('color', '#4C7285');
	}
	else if (museum.indexOf('Lynn') > -1) {
		$('.event-location__link').css('color', '#597730');
	}
	else if (museum.indexOf('Tide') > -1) {
		$('.event-location__link').css('color', '#161E69');
	}
	else {
		$('.event-location__link').css('color', 'black');
	}

};
$(window).on("load", function () { museumsColour(); });

$(document).ready(function() {
	//Numbered steps
	$('.stepstart').each(function(){
		var $numberedStep = $(this).nextUntil('.stepend').add(this);
		$numberedStep.add($numberedStep.next()).wrapAll('<div class="numbered-step">');
	});
	// BEGIN #1829
	$(".breadcrumb__nav").insertAfter(".header--nosticky");
	// END #1829


	// ANCHOR PAGE 
	if( $('.gi-jumplist').length )         // Check if jumplist exists on page, if so assume this is an anchor page
	{
	$("<div id='anchor-contents'></div>").appendTo(".a-body__inner"); 
	  $(".a-body__inner").children().not("#anchor-contents").appendTo("#anchor-contents");
	  $(".gi-jumplist").prependTo(".a-body__inner");
	}

});
