$(document).ready(function() {

    // KO bug fix - use "shift-image" article MM to activate

    if ($(".body--shift-image")[0]) {
        //4967
        $(".grid__cell--searchitem").each(function() {
            //document search page
            var $searchcard = $(this).find('.card--searchresult');
            $(this).find('.card__imagecontainer').detach().prependTo($searchcard); //move the image before the searchcard
            $($(this).find('.card__heading')).next(".card__content").addBack().wrapAll("<div class='card__body' />") //wrap the heading and content in a div
        });

        //4967
        //$(".a-body__image").detach().insertBefore(".a-heading"); //article page - move image before the heading div
        $(".a-body__image").detach().prependTo(".a-heading"); //article page - move image within the heading div
    }
    

    // if email component present, add div to layout
    if ($(".a-panel--email-card")[0]) {

        // select second <p> element - this should be the one containing email details
        var emailContainer = document.querySelector(".a-panel--email-card .a-panel__body p:nth-of-type(2)");

        // wrap <p> element
        var pWrapper = document.createElement("div");
        pWrapper.className = "email-card__wrapper";
        emailContainer.parentNode.insertBefore(pWrapper, emailContainer);
        pWrapper.appendChild(emailContainer);


        var emailLink = emailContainer.querySelector("a");
        var linkWrapper = document.createElement("div");
        linkWrapper.className = "email-card__link-wrapper";
        emailLink.parentNode.insertBefore(linkWrapper, emailLink);
        linkWrapper.appendChild(emailLink);

        
        // 5231 - applying the same functionality to the website link

        // select FIRST <p> element
        var linkContainer = document.querySelector(".a-panel--email-card .a-panel__body p:nth-of-type(1)");

        // wrap <p> element
        var pWrapperLink = document.createElement("div");
        pWrapperLink.className = "link-card__wrapper";
        linkContainer.parentNode.insertBefore(pWrapperLink, linkContainer);
        pWrapperLink.appendChild(linkContainer);


        var webLink = linkContainer.querySelector("a");
        var linkWrapper = document.createElement("div");
        linkWrapper.className = "link-card__link-wrapper";
        webLink.parentNode.insertBefore(linkWrapper, webLink);
        linkWrapper.appendChild(webLink);
	}


    // if image gallery is being used, modify the markup to make it work properly
    if ($(".a-panel--image-gallery")[0]) {

        // select grid parent element
        var gridContainer = document.querySelector(".a-panel--image-gallery .grid.grid--imagegalleryinline");

        // get number of images
        var numberOfImages = gridContainer.childElementCount;

        if (numberOfImages < 1) return;
        if (numberOfImages > 5) numberOfImages = 5;
        
        gridContainer.classList.add(`grid--items${numberOfImages}`);
	}

    // for a relevant panel, remove the links from the icons
    const removeLinks = function(parent) {

        // select icons from parent element
        var icons = Array.from(parent.children);

        icons.forEach(i => {
            var title = i.querySelector("h3");
            title.innerHTML = title.querySelector("a").innerHTML;
        });
    };

    // if no-links is used on the icon panel, shift the link text out of the <a> tag and delete the tag
    if ($(".a-panel--no-links")[0]) {

        var selected = document.querySelectorAll(".a-panel--list.a-panel--icon-panel.a-panel--no-links .grid.grid--list");
        
        // iterate over the relevant panels and remove the links
        selected.forEach(s => removeLinks(s));
	}

});

/*=============================================
5352 GNGB - document search page images
=============================================*/
// Function to reorder elements within each card
function reorderCardElements() {
    document.querySelectorAll('.template--search .card.card--searchresult').forEach(card => {
        // Select the elements
        const imageContainer = card.querySelector('.template--search .card__imagecontainer');
        const heading = card.querySelector('.card__heading');
        const summary = card.querySelector('.template--search .card__summary');
        
        // Apply border-radius to the top corners of the image
        if (imageContainer) {
            imageContainer.style.borderTopLeftRadius = '8px';
            imageContainer.style.borderTopRightRadius = '8px';
            imageContainer.style.overflow = 'hidden'; // Ensure rounded corners apply properly
        }
        
        // Append elements in the desired order
        if (imageContainer && heading && summary) {
            card.appendChild(imageContainer);
            card.appendChild(heading);
            card.appendChild(summary);
        }
    });
}

// Run the function after the DOM has loaded
document.addEventListener('DOMContentLoaded', reorderCardElements);
