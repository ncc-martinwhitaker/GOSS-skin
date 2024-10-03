/*======================================================================
4670 Calendar occurrences - Remove date/time link to Event template - JS
======================================================================*/

document.addEventListener("DOMContentLoaded", function(){
    // Check if the page has the .body--hide-event-link modifier
    if(document.querySelector('.body--hide-event-link')){
        // Get all elements with class .event-instances__link--date
        const dateLinks = document.querySelectorAll('.event-instances__link--date');

        // Go through each of them and hide the link
        dateLinks.forEach(function(link){
            link.style.pointerEvents = 'none'; //Turning off clickability
            link.style.color = 'inherit'; //Set a standard colour so that it doesn't look like a link
            link.style.textDecoration = 'none'; //Remove the underline
        });
        
    }
});