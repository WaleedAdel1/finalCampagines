

$(function(){

/* ==================== Start Change Direction Function ====================*/

  $("#changeLanguages").click(function(){
    var toggle =  document.getElementsByTagName('Body')[0].style.direction;
    if(toggle == "ltr") {
      $("html").children().css("direction","rtl");
      $("html").children().css("text-align","right");
      $('#changeLanguages').text('En');
    } else {
      $("html").children().css("direction","ltr");
      $("html").children().css("text-align","left");
      $('#changeLanguages').text('العربية');
    }
  });
/* ===================== End Change Direction Function ====================*/





/* ======================= Start toggle filter  Function ====================*/

  $(".buttonsFilter button").click(function()
  {
    $("button.btn").removeClass("filterButtons");
    $(this).addClass("filterButtons");
  });
/* ======================= End toggle filter  Function ====================*/



});




