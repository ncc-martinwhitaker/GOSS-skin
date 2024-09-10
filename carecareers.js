$(document).ready(function(){

    
	function shiftH1() {
        
        // 3906 - Job search template
        // Moves the H1 into the form element
		if ($(".template--search")[0]){
            var form = $("form.gi-sitesearch--location")[0];
            $("h1.a-heading__title").detach().prependTo(form);
            $("h1.a-heading__title").addClass("shifted-heading");
        }

        // 4403 - shifs h1 into top panel
        if ($(".template--panel.body--h1-panel")[0]) {
            var panel = $(".a-panel")[0]; // first panel on page
            $("h1.a-heading__title").detach().prependTo(panel.children[0].children[0]);
            $("h1.a-heading__title").addClass("shifted-heading");
        }

	}


	$(window).on("load", function () { shiftH1(); });
});