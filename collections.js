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
document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.template--collections .collectionssearch__filters .gi-disclosure--collectionsfilter .gi-disclosure__content input[type="checkbox"]');
    const checkboxesArray = Array.from(checkboxes);
    let lastFocusedIndex = null; // Keep the last index to determine the direction
  
    checkboxesArray.forEach((checkbox, index) => {
      checkbox.addEventListener('focus', function() {
        let targetIndex = index;
        
        // Determine the direction of movement
        if(lastFocusedIndex !== null) {
          const direction = index > lastFocusedIndex ? 'forward' : 'backward';
          
          // Calculate the target index according to the direction
          targetIndex = direction === 'forward' 
            ? Math.min(index + 2, checkboxesArray.length - 1)
            : Math.max(index - 2, 0);
        } else {
          // First focus - moving forward
          targetIndex = Math.min(index + 2, checkboxesArray.length - 1);
        }
  
        // Scroll to the target item
        checkboxesArray[targetIndex].scrollIntoView({ 
          behavior: 'smooth', 
          block: 'nearest',
          inline: 'nearest'
        });
  
        // Updating the latest index
        lastFocusedIndex = index;
      });
    });
  });