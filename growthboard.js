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

});
