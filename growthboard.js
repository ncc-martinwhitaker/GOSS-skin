$(document).ready(function() {

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
	}

    // if "partners panel" present, find partner logos and move to the panel (not good)
    // if ($(".a-panel--partners-panel")[0]) {
    //     const images = document.querySelectorAll(".a-heading.a-heading--panel .a-body__image.a-body__image--thumbnail");
    //     images.forEach(i => console.log(i));

    //     const parent = document.querySelector(".a-panel--partners-panel  .a-panel__body.a-body.a-body--panel");
        
    //     let html = "";
    //     images.forEach(i => {
    //         html += `<p>${i.outerHTML}</p>`;
    //     });
    //     parent.innerHTML = html;

    //     const pictureElements = document.querySelectorAll(".a-panel--partners-panel picture.gi-responsiveimage__imagewrapper");
    //     images.pictureElements(p => p.classList.remove("gi-responsiveimage__imagewrapper--waiting"));

    // }
});
