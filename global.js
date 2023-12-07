//Resize items
function resizeItems() {
    resizeBlock($(".item__content"));
    resizeBlock($(".item"));
}
$(window).on("load", function () { resizeItems(); });
$(window).on("resize", function () { resizeItems() });


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
