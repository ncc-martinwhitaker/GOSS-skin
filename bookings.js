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
4637 If Expired - then display:none - calendar occurnaces + 5216 Hide Expired Full events
=======================================================================*/

/*document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.cta-link--eventresults.cta-link--book').forEach(function(item) {
        if (item.innerText.includes('Expired')||item.innerText.includes('Full')) {
            
          // Find the nearest parent with the .event-instances__item class
            const parentItem = item.closest('.event-instances__item');
            if (parentItem) {
                parentItem.style.display = 'none'; // Hide the entire unit
            }
        }
    });
});*/

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.cta-link--eventresults.cta-link--book').forEach(function(item) {
      const parentItem = item.closest('.event-instances__item');
      const statusText = item.innerText.trim().toLowerCase();

      if (parentItem) {
          if (statusText.includes('expired')) {
              // Hide all events with status Expired
              parentItem.style.display = 'none';
          } else if (statusText.includes('full')) {
              // Handling events with status Full
              const dateText = parentItem.querySelector('.event-instances__date')?.textContent.trim();
              const timeText = parentItem.querySelector('.event-instances__from .event-instances__time')?.textContent.trim();

              if (dateText && timeText) {
                  const eventTime = parseDateTimeUTC(dateText, timeText);
                  const nowUTC = new Date();

                  if (eventTime < nowUTC) {
                      // Hide if the event is Full and the time has already passed
                      parentItem.style.display = 'none';
                  }
              }
          }
      }
  });

  // Helper function to parse date and time into a Date object in UTC
  function parseDateTimeUTC(dateText, timeText) {
      const months = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
      const [ , day, monthAbbr ] = dateText.toLowerCase().split(' ');
      const [hours, minutes] = timeText.split(':').map(Number);
      const year = new Date().getUTCFullYear();

      return new Date(Date.UTC(year, months[monthAbbr], parseInt(day, 10), hours, minutes));
  }
});

// Full cards styling
function styleFullCards() {
    // Iterate over each event result link
    document.querySelectorAll('.cta-link--eventresults.cta-link--book').forEach(function (item) {
        const statusText = item.innerText.trim().toLowerCase();
        const parentItem = item.closest('.event-instances__item');

        if (parentItem) {
            const calendarAvailability = parentItem.querySelector('.calendar .event-instances__value--availability');

            if (statusText.includes('full')) {
                // Add a class for styling Full cards
                parentItem.classList.add('event-instances__item--full');

                // Hide the pseudo-element for Full cards
                if (calendarAvailability) {
                    calendarAvailability.style.setProperty('--pseudo-display', 'none');
                }

                // Apply disabled styles for Full buttons
                item.style.backgroundColor = '#ccc';
                item.style.color = '#767676';
                item.style.pointerEvents = 'none'; // Disable hover, focus, and clicks
                item.style.cursor = 'not-allowed'; // Show disabled cursor
                item.setAttribute('tabindex', '-1'); // Remove from tab order
                item.setAttribute('aria-disabled', 'true'); // Accessibility improvement
            } else {
                // Remove Full-specific class if not applicable
                parentItem.classList.remove('event-instances__item--full');

                // Show the pseudo-element for non-Full cards
                if (calendarAvailability) {
                    calendarAvailability.style.setProperty('--pseudo-display', 'inline');
                }

                // Reset styles for non-Full buttons
                item.style.backgroundColor = '';
                item.style.color = '';
                item.style.pointerEvents = '';
                item.style.cursor = '';
                item.removeAttribute('tabindex');
                item.removeAttribute('aria-disabled');
            }
        }
    });

    // Add CSS styles dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        /* Control pseudo-element visibility using CSS variable */
        .calendar .event-instances__value--availability::after {
            display: var(--pseudo-display, inline);
        }

        /* Hide pseudo-elements for Full cards */
        .event-instances__item--full .cta-link.cta-link--eventresults:after {
            display: none;
        }

        /* Styles for the last cta-link in Full cards */
        .cta-link--eventresults:last-child {
            border-radius: 10px;
        }
    `;
    document.head.appendChild(style);
}

// Call the function after the document has fully loaded
document.addEventListener('DOMContentLoaded', styleFullCards);





