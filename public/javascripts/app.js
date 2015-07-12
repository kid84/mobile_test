$(function(){
  $(".container").on('click',function(){
    $("html").addClass("test");
    console.log("test");
  });

  var headerHeight = $(".header").innerHeight();
  console.log(headerHeight);
  $(".contents").css({top:headerHeight});

  $(".js-modal-trigger").on('click', function(){
    console.log("test");
    $(".js-modal-contents").show();
  });

});
