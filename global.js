$(document).ready(function() {
	
	//Numbered steps
	$('.stepstart').each(function(){
		var $numberedStep = $(this).nextUntil('.stepend').add(this);
		$numberedStep.add($numberedStep.next()).wrapAll('<div class="numbered-step">');
	});
	
});