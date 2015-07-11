$(function(){
  $(".container").on('click',function(){
    $("html").addClass("test");
    console.log("test");
  });

  var headerHeight = $(".header").innerHeight();
  console.log(headerHeight);
  $(".contents").css({top:headerHeight});
});
