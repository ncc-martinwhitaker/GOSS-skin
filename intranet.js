$(document).ready(function() {

$('#urlcopy').on('click', function () {
  var dummy = document.createElement('input'), text = window.location.href; 
  document.body.appendChild(dummy); 
  dummy.value = text; dummy.select(); 
  document.execCommand('copy'); 
  document.body.removeChild(dummy);
  $(this).find('span').text("Link copied to clipboard"); 
  setTimeout(function () { 
    $('#urlcopy span').text("Copy link to this page"); 
  }, 2000); 
});

//*** News page - add older than three months text ***//
var ThreeMonths = new Date();
ThreeMonths.setMonth(ThreeMonths.getMonth() - 3);

if (new Date($('.nvp--blog-created .nvp__date').text()) < ThreeMonths) {
  //console.log("Older than three months");
  $(".nvp--blog-created .nvp__time").after("<span class='over-three-months'>This news story is over 3 months old</span>");
}
/*else {
  console.log("Not older than three months");
}*/

}); // end of doc ready

/*===========================================================
4077 Hover menu for MyNet task dropdown
===========================================================*/
/*document.addEventListener('DOMContentLoaded', function() {

  const links = document.querySelectorAll(".gi-sitenav__list--lvl2 .gi-sitenav__link--lvl2");

  let viewAllPeopleLink = null;
  links.forEach(link => {
    if(link.textContent.trim()==="View all People"){
      viewAllPeopleLink = link.parentElement;
    }
  });

  if(viewAllPeopleLink){
    const parentList = document.querySelector(".gi-sitenav__list--lvl2");
    parentList.prepend(viewAllPeopleLink);
  }
});*/

document.addEventListener("DOMContentLoaded", function() {
  // Array of text values and corresponding sections from MyNet
  const viewAllItems = [
      { lvl1Text: "People", lvl2Text: "View all People" },
      { lvl1Text: "Learning and skills", lvl2Text: "View all Learning and skills" },
      { lvl1Text: "Digital", lvl2Text: "View all Digital" },
      { lvl1Text: "Working at NCC", lvl2Text: "View all Working at NCC" },
      { lvl1Text: "Finance and budgets", lvl2Text: "View all Finance and budgets" },
      { lvl1Text: "Comms and insight", lvl2Text: "View all Comms and insight" },
      { lvl1Text: "Democratic services", lvl2Text: "View all Democratic services" },
      { lvl1Text: "Information governance", lvl2Text: "View all Information governance" }
  ];

  // Go through each object in the viewAllItems array
  viewAllItems.forEach(item => {
      // Find an element with class lvl1 that contains the required text
      const lvl1Link = [...document.querySelectorAll(".gi-sitenav__link--lvl1")].find(link => 
          link.textContent.trim() === item.lvl1Text
      );

      if (lvl1Link) {
          // Find a list (parent element) that contains a lvl2 link
          const parentList = lvl1Link.closest(".gi-sitenav__item").querySelector(".gi-sitenav__list--lvl2");

          // Find a lvl2 link with the desired text
          const lvl2Link = [...parentList.querySelectorAll(".gi-sitenav__link--lvl2")].find(link =>
              link.textContent.trim() === item.lvl2Text
          );

          if (lvl2Link) {
              // Get the li-element of a lvl2 link and move it to the top of the list
              const listItem = lvl2Link.parentElement;
              parentList.prepend(listItem);
          }
      }
  });
});


