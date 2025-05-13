$(document).ready(function() {

    $("button.imagegalleryinline__button:first").prepend("<span class='gallery'>View gallery</span>");


    var urlParams = new URLSearchParams(window.location.search);

    //Department
    if (urlParams.has('toggleDepartment')) {
        var departmentList = urlParams.get('toggleDepartment');
        if (departmentList != "") {

            $(".gi-disclosure__toggle--i18ngicollectionsinputdepartmentheading").addClass("filter-selected");

            var departmentArray = departmentList.split("_");
            
            if (departmentArray.length > 1) {
                //console.log("More than 1 department");
                $(".gi-disclosure__toggle--i18ngicollectionsinputdepartmentheading span").text("Department • " + departmentArray.length);
            }
            else {
                //console.log("1 department");
                $(".gi-disclosure__toggle--i18ngicollectionsinputdepartmentheading span").text(departmentArray[0]);
            }
        }
    }
    else {
        $(".gi-disclosure__toggle--i18ngicollectionsinputdepartmentheading").removeClass("filter-selected");
    }

    //Displayed at
    if (urlParams.has('toggleLocation')) {
        var locationList = urlParams.get('toggleLocation');
        if (locationList != "") {

            $(".gi-disclosure__toggle--i18ngicollectionsinputlocationheading").addClass("filter-selected");

            var locationArray = locationList.split("_");

            if (locationArray.length > 1) {
                //console.log("More than 1 location");
                $(".gi-disclosure__toggle--i18ngicollectionsinputlocationheading span").text("Displayed at • " + locationArray.length);
            }
            else {
                //console.log("1 location");
                $(".gi-disclosure__toggle--i18ngicollectionsinputlocationheading span").text(locationArray[0]);
            }
        }
    }
    else {
        $(".gi-disclosure__toggle--i18ngicollectionsinputlocationheading").removeClass("filter-selected");
    }

    //Artist/Maker
    if (urlParams.has('toggleArtistMaker')) {
        var artistmakerList = urlParams.get('toggleArtistMaker');
        if (artistmakerList != "") {
            
            $(".gi-disclosure__toggle--i18ngicollectionsinputartistheading").addClass("filter-selected");

            var artistmakerArray = artistmakerList.split("_");

            if (artistmakerArray.length > 1) {
                //console.log("More than 1 artist/maker");
                $(".gi-disclosure__toggle--i18ngicollectionsinputartistheading span").text("Artist/Maker • " + artistmakerArray.length);
            }
            else {
                //console.log("1 artist/maker");
                $(".gi-disclosure__toggle--i18ngicollectionsinputartistheading span").text(artistmakerArray[0]);
            }
        }
    }
    else {
        $(".gi-disclosure__toggle--i18ngicollectionsinputartistheading").removeClass("filter-selected");
    }

});

// 5672 Focus behaviour - Museums Collections search
/**
 * Accessibility improvement for checkboxes in museum collections filters
 * Solves the issue of checkbox visibility when navigating through them
 * Special handling for first and last elements
 * Additional scrolling on tabulation for other elements
 */
document.addEventListener('DOMContentLoaded', function() {
    // Find all filter containers
    const filterContainers = document.querySelectorAll('.gi-disclosure__content--collectionsfilter');
    
    // For each filter container
    filterContainers.forEach(container => {
      // Find all checkboxes inside the container
      const checkboxes = container.querySelectorAll('.searchfilter__wrapper input[type="checkbox"]');
      const checkboxesArray = Array.from(checkboxes);
      
      if (checkboxesArray.length === 0) return;
      
      // Variable to track the last focused element (to determine direction)
      let lastFocusedIndex = null;
      
      // Get the fixed top and bottom elements once
      const topFilter = document.querySelector('.template--collections .collectionssearch__filters .searchfilter__search');
      const bottomFilter = document.querySelector('.template--collections .collectionssearch__filters .searchfilter__control');
      
      // Calculate scrolling offsets
      const topOffset = topFilter ? topFilter.offsetHeight + 10 : 10; // 10px additional offset
      const bottomOffset = bottomFilter ? bottomFilter.offsetHeight + 10 : 10;
      
      // Special handling for the first element
      const firstCheckbox = checkboxesArray[0];
      firstCheckbox.addEventListener('focus', function() {
        // Ensure visibility of the first element with additional upward scrolling
        setTimeout(() => {
          // Scroll the container to the very top
          smoothScroll(container, 0);
        }, 50);
        
        // Update the last focused element index
        lastFocusedIndex = 0;
      });
      
      // Special handling for the last element
      const lastCheckbox = checkboxesArray[checkboxesArray.length - 1];
      lastCheckbox.addEventListener('focus', function() {
        // Ensure visibility of the last element with additional downward scrolling
        setTimeout(() => {
          // Scroll the container to the very bottom
          smoothScroll(container, container.scrollHeight);
        }, 50);
        
        // Update the last focused element index
        lastFocusedIndex = checkboxesArray.length - 1;
      });
      
      // Process all elements for additional scrolling on tabulation
      checkboxesArray.forEach((checkbox, index) => {
        checkbox.addEventListener('focus', function() {
          // Skip special handling for first and last elements
          if (checkbox === firstCheckbox || checkbox === lastCheckbox) {
            lastFocusedIndex = index;
            return;
          }
          
          // Find the parent element of the checkbox (wrapper)
          const wrapper = this.closest('.searchfilter__wrapper');
          
          if (wrapper) {
            // Get the position of the current element
            const wrapperRect = wrapper.getBoundingClientRect();
            
            // Simple check if the element is visible within the scrollable area
            const isVisible = (
              wrapperRect.top >= topOffset &&
              wrapperRect.bottom <= window.innerHeight - bottomOffset
            );
            
            // If the element is not fully visible, scroll to make it visible
            if (!isVisible) {
              if (wrapperRect.top < topOffset) {
                // Scroll up if element is above the visible area
                const scrollAmount = container.scrollTop - (topOffset - wrapperRect.top + 20);
                smoothScroll(container, scrollAmount);
              } else if (wrapperRect.bottom > window.innerHeight - bottomOffset) {
                // Scroll down if element is below the visible area
                const scrollAmount = container.scrollTop + (wrapperRect.bottom - (window.innerHeight - bottomOffset) + 20);
                smoothScroll(container, scrollAmount);
              }
            } else {
              // Element is visible but we still want to scroll a bit in the direction of tab navigation
              // Determine the direction of movement
              const direction = lastFocusedIndex !== null ? (index > lastFocusedIndex ? 'forward' : 'backward') : 'forward';
              
              // Calculate scroll offset based on direction
              let scrollOffset = 0;
              if (direction === 'forward') {
                // When moving forward, scroll down a bit to show what's coming next
                scrollOffset = container.scrollTop + 50; // Scroll down by 50px
              } else {
                // When moving backward, scroll up a bit to show what's before
                scrollOffset = container.scrollTop - 50; // Scroll up by 50px
              }
              
              // Apply the scroll with bounds checking
              if (scrollOffset >= 0 && scrollOffset <= container.scrollHeight - container.clientHeight) {
                smoothScroll(container, scrollOffset);
              }
            }
            
            // Update the last focused element index
            lastFocusedIndex = index;
          }
        });
      });
    });
    
    /**
     * Function for smooth scrolling of an element
     * @param {HTMLElement} element - The element to scroll
     * @param {number} to - The scroll position
     */
    function smoothScroll(element, to) {
      const start = element.scrollTop;
      const change = to - start;
      const duration = 300; // animation duration in ms
      let startTime = null;
      
      function animateScroll(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easeInOutQuad = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        
        element.scrollTop = start + change * easeInOutQuad;
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      }
      
      requestAnimationFrame(animateScroll);
    }
});