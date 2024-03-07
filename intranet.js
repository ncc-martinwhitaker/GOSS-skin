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