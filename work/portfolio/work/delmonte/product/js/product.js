$(document).ready(function(){
  
  // gnb
  $('.gnb>li').mouseover(function(){
    $('.sub').stop().slideDown(300);
    $('.black_bar').stop().slideDown(300);
  })
  $('.gnb>li').mouseout(function(){
    $('.sub').stop().slideUp(300);
    $('.black_bar').stop().slideUp(300);
  })

  // header
  const $header = $('header'),
  $headerHeight = $header.height();

  $(window).scroll(function(){
    if($(this).scrollTop()>=$headerHeight) {
      $header.css('background-color','#fff');
    } else {
      $header.css('background-color','rgba(255,255,255,0.4)');
    }
  })

  $header.mouseover(function(){
    $(this).css('background-color','#fff');
  })
  $header.mouseout(function(){
    $(this).css('background-color','rgba(255,255,255,0.4)');
  })
})