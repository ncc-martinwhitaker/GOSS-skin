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