$(document).ready(function(){

    // 3906 - Job search template
    // Moves the H1 into the form element
	function shiftH1() {
		if ($(".template--search")[0]){
            var form = $("form.gi-sitesearch--location")[0];
            $("h1.a-heading__title").detach().prependTo(form);
            $("h1.a-heading__title").addClass("shifted-heading");
        }
	}
	$(window).on("load", function () { shiftH1(); });
});