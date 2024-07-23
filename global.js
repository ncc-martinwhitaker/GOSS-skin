//Resize items
function resizeItems() {
    resizeBlock($(".item__content"));
    resizeBlock($(".item"));
}
$(window).on("load", function () { resizeItems(); });
$(window).on("resize", function () { resizeItems() });

// Colourise Museums locations
function museumsColour() {
	var museum = $('.event-detail--location .event-detail__value').html();

	if (museum.indexOf('Tolhouse') > -1) {
		$('.event-detail--location .event-detail__value').css('color', '#7E6B71');
	}
	else if (museum.indexOf('Gressenhall') > -1) {
		$('.event-detail--location .event-detail__value').css('color', '#597730');
	}
	else if (museum.indexOf('Cromer') > -1) {
		$('.event-detail--location .event-detail__value').css('color', '#0070A5');
	}
	else if (museum.indexOf('Elizabethan') > -1) {
		$('.event-detail--location .event-detail__value').css('color', '#CF171D');
	}
	else if (museum.indexOf('Museum of Norwich') > -1) {
		$('.event-detail--location .event-detail__value').css('color', '#CB4363');
	}
	else if (museum.indexOf('Castle') > -1) {
		$('.event-detail--location .event-detail__value').css('color', '#42145F');
	}
	else if (museum.indexOf('Stranger') > -1) {
		$('.event-detail--location .event-detail__value').css('color', '#B32017');
	}
	else if (museum.indexOf('Ancient') > -1) {
		$('.event-detail--location .event-detail__value').css('color', '#4C7285');
	}
	else if (museum.indexOf('Lynn') > -1) {
		$('.event-detail--location .event-detail__value').css('color', '#597730');
	}
	else if (museum.indexOf('Tide') > -1) {
		$('.event-detail--location .event-detail__value').css('color', '#161E69');
	}
	else {
		$('.event-detail--location .event-detail__value').css('color', 'black');
	}
};
/*
------------------------------------------------------------------------
Event Search - colour Location text by museum
------------------------------------------------------------------------
*/
function museumsSearchColour() {
	var mitems = document.getElementsByClassName('event-instances__link event-instances__link--location event-instances__link--suppressed');
	for (var i=0; i < mitems.length; i++) {
		
		if (mitems[i].innerHTML.indexOf('Lynn') > -1) {
			mitems[i].style.color = "#597730";
		}
		else if (mitems[i].innerHTML.indexOf('Tolhouse') > -1) {
			mitems[i].style.color = '#7E6B71';
		}
		else if (mitems[i].innerHTML.indexOf('Gressenhall') > -1) {
			mitems[i].style.color = '#597730';
		}
		else if (mitems[i].innerHTML.indexOf('Cromer') > -1) {
			mitems[i].style.color = '#0070A5';
		}
		else if (mitems[i].innerHTML.indexOf('Elizabethan') > -1) {
			mitems[i].style.color = '#CF171D';
		}
		else if (mitems[i].innerHTML.indexOf('Museum of Norwich') > -1) {
			mitems[i].style.color = '#CB4363';
		}
		else if (mitems[i].innerHTML.indexOf('Castle') > -1) {
			mitems[i].style.color = '#42145F';
		}
		else if (mitems[i].innerHTML.indexOf('Stranger') > -1) {
			mitems[i].style.color = '#B32017';
		}
		else if (mitems[i].innerHTML.indexOf('Ancient') > -1) {
			mitems[i].style.color = '#4C7285';
		}
		else if (mitems[i].innerHTML.indexOf('Lynn') > -1) {
			mitems[i].style.color = '#597730';
		}
		else if (mitems[i].innerHTML.indexOf('Tide') > -1) {
			mitems[i].style.color = '#161E69';
		}
		else {
			mitems[i].style.color = black;
		}
	}
};

function modifyEvenstDisclosure() {
	console.log('modifyEvenstDisclosure() fired');

	var discText = $(".gi-disclosure__toggle-text");
	var discToggle = $("#disclosure-1_toggle");

	if (discToggle.attr("aria-expaned") == "False") {
		console.log("disclosure opened");
	}
	else {
		console.log("disclosure closed");
	}
}

const mutationCallback = (mutationsList) => {

	if (mutationsList[0].target.childNodes[0].innerHTML === 'Show more dates') {
		mutationsList[0].target.childNodes[0].innerHTML = 'Hide more dates';
	} else {
		mutationsList[0].target.childNodes[0].innerHTML = 'Show more dates';
	}


	for (const mutation of mutationsList) {
	  if (
		mutation.type !== "attributes" ||
		mutation.attributeName !== "aria-expaned"
	  ) {
		return;
	  }
	}

  }

const observer = new MutationObserver(mutationCallback);

function disclosureListener() {
	var disc = $("#disclosure-1_toggle")[0];
	disc.childNodes[0].innerHTML = 'Show more dates';

	observer.observe(disc, { attributes: true });
}

$(window).on("load", function () { 
	if ($(".template--event")[0]){
		museumsColour();
		disclosureListener();
	}
	if ($(".template--eventsearch")[0]){
		museumsSearchColour(); 
	}
});

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

	// CONTACT TEMPLATE PAGE 
	if( $('.template--contact').length )         // Check if contact page
	{
	$(".grid__cell--contact-image").appendTo(".grid--contact"); 
	  $("aside.aside").appendTo("#maincontent > .container");
	  $(".a-intro--contact").remove();
	  $(".nvp__label--contact-name").text('Contact');
	  $(".nvp__label--contact-jobtitle").text('Position');
	  $(".panel--relarticles").remove();
	  $(".contactlist--right").appendTo(".contactlist--left").parent(); 

	  $(".nvp__label--contact-links").parent().appendTo(".contactlist--left").parent(); 


	  $(".grid__cell--right, .grid__cell--social").remove();





	  $("span.nvp__value").each(function(){
		if (!$(this).text().trim().length) {
			$(this).parent.remove();
		}
	});


	}
	


});




(function () {
    const configureHeaderSearch = () => {
       document.querySelectorAll(".gi-sitesearch--header, .gi-sitesearch--command, .gi-sitesearch--mobile, .gi-sitesearch--top").forEach(headerSearchConfigurationCallback);
    };

    const headerSearchConfigurationCallback = (siteSearch) => {
       if (!siteSearch) {
          return;
       }
       //    Choose whether the site search should toggle expanded and collapsed
       siteSearch.setAttribute("data-collapsible", "false");
       //    Choose if (when data-collapsible is true) the site search should have a collapse button
       // siteSearch.setAttribute("data-suppress-closebtn", "false");
       //    Choose if (when data-collapsible is true) tabbing to the site search should automatically expand it
       siteSearch.setAttribute("data-focus-open", "false");
    }

    document.addEventListener("DOMContentLoaded", configureHeaderSearch);
})(); 