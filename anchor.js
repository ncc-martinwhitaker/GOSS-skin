




$(document).ready(function() {

  
    if( $('.gi-jumplist').length )         // Check if jumplist exists on page, if so assume this is an anchor page
{
    
  $("<div id='anchor-contents'></div>").appendTo(".a-body__inner"); 
  $(".a-body__inner").children().not("#anchor-contents").appendTo("#anchor-contents");
  $(".gi-jumplist").prependTo(".a-body__inner");


}
    
    
    
    }); // end of doc ready