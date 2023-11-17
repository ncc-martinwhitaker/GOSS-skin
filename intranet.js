



$(document).ready(function() {

console.log('test');

//$("form.gi-sitesearch--top").insertAfter(".gi-sitelogo--header");

$("form.gi-sitesearch--top").insertAfter("a.gi-sitelogo__link");
$("ol.utilitymenu.utilitymenu--top").appendTo(".gi-sitelogo--header");


$("<div id='headermainmenu'><div class='container'></div></div>").appendTo(".header.header--nosticky"); 
$("nav.gi-sitenav--desktop").appendTo("#headermainmenu .container");

});



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