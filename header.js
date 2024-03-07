$(document).ready(function() {

$("form.gi-sitesearch--top").insertAfter("a.gi-sitelogo__link");
$("ol.utilitymenu.utilitymenu--top").appendTo(".gi-sitelogo--header");


$("<div id='headermainmenu'><div class='container'></div></div>").appendTo(".header.header--nosticky"); 
$("nav.gi-sitenav--desktop").appendTo("#headermainmenu .container");

}); // end of doc ready


/*
document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World!");

    var elementToMove = document.querySelector('ol.utilitymenu ');
    var elementToMove2 = document.querySelector('form.gi-sitesearch--top');
    
    var newParentElement = document.querySelector('.gi-sitelogo--header');
    
    console.log(newParentElement);
    console.log(elementToMove);
    console.log(elementToMove2);

    newParentElement.appendChild(elementToMove);
    newParentElement.appendChild(elementToMove2);



  });
  */