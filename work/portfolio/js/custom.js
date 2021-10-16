$(document).ready(function(){

  // header
  const $header = $('#header'),
  $headerH = $header.height();

  const $about = $('#about').offset().top,
  $skill = $('#skill').offset().top,
  $website = $('#website').offset().top,
  $design = $('#design').offset().top,
  $detail = $('#detail').offset().top,
  $contact = $('#contact').offset().top;

  $(window).scroll(function(){

    // header
    if($(this).scrollTop()>$headerH){
      $header.addClass('color');
    } else {
      $header.removeClass('color');
    }

    // website
    if($(this).scrollTop()>=$website){
      $('.wb_img').addClass('move')
      $('.wb_txt').addClass('move2')
      $('.wb2>.wb_img').addClass('move3')
      $('.wb2>.wb_txt').addClass('move4')
    } else {
      $('.wb_img').removeClass('move')
      $('.wb_txt').removeClass('move2')
      $('.wb2>.wb_img').removeClass('move3')
      $('.wb2>.wb_txt').removeClass('move4')
    }

    // about
    if($(this).scrollTop()>=$about){
      $('.about_l').addClass('up')
      $('.about_r').addClass('up')
    } else {
      $('.about_l').removeClass('up')
      $('.about_r').removeClass('up')
    }

    // design
    if($(this).scrollTop()>=$design){
      $('.design_box>div').addClass('up')
    } else {
      $('.design_box>div').removeClass('up')
    }

    // about
    if($(this).scrollTop()>=$detail-60){
      $('.detail_r>div').addClass('up')
      $('.detail_r>div').addClass('up')
    } else {
      $('.detail_r>div').removeClass('up')
      $('.detail_r>div').removeClass('up')
    }


  })


  // gnb
  $('.gnb>li:nth-child(1)').click(function(){
    $('html,body').animate({'scrollTop':$about},600)
  })
  $('.gnb>li:nth-child(2)').click(function(){
    $('html,body').animate({'scrollTop':$skill},600)
  })
  $('.gnb>li:nth-child(3)').click(function(){
    $('html,body').animate({'scrollTop':$website+120},600)
  })
  $('.gnb>li:nth-child(4)').click(function(){
    $('html,body').animate({'scrollTop':$design+160},600)
  })
  $('.gnb>li:nth-child(5)').click(function(){
    $('html,body').animate({'scrollTop':$detail},600)
  })
  $('.gnb>li:nth-child(6)').click(function(){
    $('html,body').animate({'scrollTop':$contact},600)
  })

  // popup
  $('.close_btn1').click(function(){
    $('#popup1').css('display','none')
  })
  $('.con_btn1').click(function(){
    $('#popup1').css('display','block')
  })

  $('.close_btn2').click(function(){
    $('#popup2').css('display','none')
  })
  $('.con_btn2').click(function(){
    $('#popup2').css('display','block')
  })

  $('.close_btn3').click(function(){
    $('#popup3').css('display','none')
  })
  $('.con_btn3').click(function(){
    $('#popup3').css('display','block')
  })
})