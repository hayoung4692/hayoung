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

  // hugi
  $('.hugi_arrow>a:nth-child(3)').click(function(){
    // $('.hugi_box').css('left',898+'px');
    $('.hugi_box').animate({'left':-898+'px'},1000)
    $('.hugi_t').text('2/2');
  })

  $('.hugi_arrow>a:nth-child(1)').click(function(){
    $('.hugi_box').animate({'left':0+'px'},1000)
    $('.hugi_t').text('1/2');
  })

  // product
  $('.button>a:nth-child(1)').addClass('circle').siblings().removeClass('circle');
  $('.down1').css('display','flex');
  $('.down2').css('display','none');

  $('.button>a:nth-child(1)').click(function(){
    $(this).addClass('circle').siblings().removeClass('circle');
    $('.down1').css('display','flex');
    $('.down2').css('display','none');
  })

  $('.button>a:nth-child(2)').click(function(){
    $(this).addClass('circle').siblings().removeClass('circle');
    $('.down2').css('display','flex');
    $('.down1').css('display','none');
  })

  // best
  $('.best_left>a:nth-child(1)').css('opacity',1).siblings().css('opacity',0);

  $('.best_right_box>a:nth-child(1)').click(function(){
    $('.best_left>a:nth-child(2)').css('opacity',1).siblings().css('opacity',0);
  })
  $('.best_right_box>a:nth-child(2)').click(function(){
    $('.best_left>a:nth-child(3)').css('opacity',1).siblings().css('opacity',0);
  })
  $('.best_right_box>a:nth-child(3)').click(function(){
    $('.best_left>a:nth-child(4)').css('opacity',1).siblings().css('opacity',0);
  })

})