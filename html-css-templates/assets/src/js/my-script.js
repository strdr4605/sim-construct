$(document).ready(function(){
  $(".category").mouseover(function(){
    $(this).addClass("active-cat")
  });
  $(".category").mouseout(function(){
    $(this).removeClass("active-cat")
  });
  $(".category").click(function(){
    $(".category").removeClass("selected-cat");
    $(this).addClass("selected-cat");
  });

  $("#contacte").mouseover(function(){
    $(this).addClass("active-cont")
  });
  $("#contacte").mouseout(function(){
    $(this).removeClass("active-cont")
  });

  $(".product").mouseover(function(){
    $(this).addClass("active-prod")
  });
  $(".product").mouseout(function(){
    $(this).removeClass("active-prod")
  });

  var cw = $('.product-image').width() * 0.6;
  $('.product-image').css({'height':cw+'px'});
})
