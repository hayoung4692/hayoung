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

  // slide
  const $slides_wrap = $('.slides_wrap'),
  $slides = $slides_wrap.find('.slides'),
  $slide = $slides.find('a');

  const $arrow = $slides_wrap.find('.arrow'),
  $prev_btn = $arrow.find('.prev_btn'),
  $next_btn = $arrow.find('.next_btn');

  const $indicators = $slides_wrap.find('.indicators'),
  $indicator = $indicators.find('a');

  let $slidelength = $slide.length;
  // console.log($slidelength)

  let currentIdx = 0,
  input = '',
  timer;

  $slides.css('width',$slidelength*100+'%'); // slides 길이 자동으로 설정
  update();

  // indicators
  $indicators.find('a').click(function(){
    e.preventDefault();
    let idx = $(this).index();
    gotoSlider(idx);
    $(this).addClass('active').siblings().removeClass('active');
  })

  // gotoSlider
  function gotoSlider(idx) {
    $slides.animate({'left':-100*idx+'%'},3500);
    currentIdx = idx;
    update();
  }

  // arrow
  $arrow.find('a').click(function(){
    if($(this).hasClass('prev_btn')){
      gotoSlider(currentIdx-1);
    } else {
      gotoSlider(currentIdx+1);
    }
  })

  // update 
  function update() {

    // prev
    if(currentIdx==0){
      $prev_btn.addClass('disabled');
    } else {
      $prev_btn.removeClass('disabled');
    }

    // next
    if(currentIdx==$slidelength-1){
      $next_btn.addClass('disabled');
    } else {
      $next_btn.removeClass('disabled');
    }

    $indicators.find('a').eq(currentIdx).addClass('active').siblings().removeClass('active');
  }

  // start
  function start() {
    timer = setInterval(function(){
      let nextIdx = (currentIdx+1)%$slidelength;
      gotoSlider(nextIdx);
    },4000)
  }
  start();

  // stop
  function stop() {
    clearInterval(timer);
  }

  $slides_wrap.mouseover(stop).mouseout(start);


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