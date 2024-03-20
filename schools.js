$(document).ready(function() {
    
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