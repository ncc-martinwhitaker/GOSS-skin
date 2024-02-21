



$(document).ready(function() {

console.log('test');

//$(".breadcrumb__nav").insertAfter(".header--nosticky");

$("form.gi-sitesearch--top").insertAfter("a.gi-sitelogo__link");
$("ol.utilitymenu.utilitymenu--top").appendTo(".gi-sitelogo--header");


$("<div id='headermainmenu'><div class='container'></div></div>").appendTo(".header.header--nosticky"); 
$("nav.gi-sitenav--desktop").appendTo("#headermainmenu .container");


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