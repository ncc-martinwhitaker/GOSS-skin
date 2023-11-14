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
});