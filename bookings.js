/*======================================================================
4670 Calendar occurrences - Remove date/time link to Event template - JS
======================================================================*/

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.event-instances__link--date');
  
  links.forEach(link => {
    // Create a new <span> element
    const span = document.createElement('span');
    
    // Add to the new <span> the same classes as in <a>
    span.className = link.className;

    // Copy content from <a> to a new <span>
    span.innerHTML = link.innerHTML;

    // Add styles to remove underlining
    span.style.textDecoration = 'none';
    
    // Replace <a> with a new one <span>
    link.parentNode.replaceChild(span, link);
  });
});

/*=======================================================================
4637 If Expired - then display:none - calendar occurnaces
=======================================================================*/

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.cta-link--eventresults.cta-link--book').forEach(function(item) {
        if (item.innerText.includes('Expired')) {
            
          // Find the nearest parent with the .event-instances__item class
            const parentItem = item.closest('.event-instances__item');
            if (parentItem) {
                parentItem.style.display = 'none'; // Hide the entire unit
            }
        }
    });
});