// 배너 이미지 슬라이드
var swiper = new Swiper('.swiper-container',{
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
  },
});

// 영화차트 슬라이드
var mySwiper = new Swiper('.swiper-container2', {
  slidesPerView: 4,
  spaceBetween: 24,
  keyboard: {
      enabled: true,
      onlyInViewport: false,
  },
  breakpoints: {
    600: {
        slidesPerView: 1.4,
        spaceBetween: 24
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 24
    },
    960: {
        slidesPerView: 3,
        spaceBetween: 24
    }
  }
});

// 영화차트 탭 메뉴
var movBtn = $(".movie_title > ul > li");
var movCont = $(".movie_chart > div");

movCont.hide().eq(0).show();

movBtn.click(function(e){
  e.preventDefault();
  var target = $(this);
  var index = target.index();
  movBtn.removeClass('active');
  target.addClass('active');
  movCont.css('display','none');
  movCont.eq(index).css('display','block');
});

// gnb 사라지기
$(window).resize(function(){

  var gnbBtn = $('.header_bom .icon a');
  var gnbAll = $('.header_bom .gnb');
  gnbAll.addClass('open');

  let win=$(this),
  winWid=win.width();

  if(winWid<=1024){
    gnbAll.removeClass('open');
  } else {
    gnbAll.addClass('open');
  }

  var gnblong = $('.header_bom .gnb_l');
  var gnbBtn = $('.header_bom .icon a');
  gnblong.removeClass('open2');

  // gnbBtn.click(function(){
  //   if(gnblong.hasClass('open2')){
  //     gnblong.removeClass('open2')
  //   } else {
  //     gnblong.addClass('open2')
  //   }
  // })
  gnbBtn.click(function(){
    if(gnblong.hasClass('open2')){
      gnblong.removeClass('open2')
    } else {
      gnblong.addClass('open2')
    }
  })

  gnbBtn.click(function(){
    if(gnblong.hasClass('open2')){
      gnblong.animate({'left':0+'%'},400);
    } else {
      gnblong.animate({'left':-100+'%'},400);
    }
  })

  if(winWid<=600){
    $('.slider .ss3').css({"background": "url(../img/banner1-1.png)", "background-position": "center center"})
    $('.slider .ss1').css({"background": "url(../img/banner1-2.png)", "background-position": "center center"})
    $('.slider .ss2').css({"background": "url(../img/banner1-3.png)", "background-position": "center center"})
  } else {
    $('.slider .ss1').css({"background": "url(../img/banner1.jpg)", "background-position": "center center","background-size": "cover"})
    $('.slider .ss2').css({"background": "url(../img/friend1.png)", "background-position": "center center","background-size": "cover"})
    $('.slider .ss3').css({"background": "url(../img/banner3.jpg)", "background-position": "center center","background-size": "cover"})
  }

  if(winWid<=600){
    $('.grand .opening').find('img').attr('src','img/grand1.png')
  } else {
    $('.grand .opening').find('img').attr('src','img/grand.png')
  }

})
$(window).resize();


var gnbList = $('.header_bom .gnb.open ul li a');
var subsub = $('.sub_sub');
var subblack = $('.sub_black');
subsub.css('display','none')

gnbList.mouseenter(function(){
  $(this).siblings('.sub_sub').stop().slideDown();
  subblack.stop().slideDown();
})

gnbList.mouseout(function(){
  $(this).siblings('.sub_sub').stop().slideUp();
  subblack.stop().slideUp();
})

subblack.mouseenter(function(){
  $(this).stop().slideDown();
})
subblack.mouseleave(function(){
  $(this).stop().slideUp();
})

var todayPoster = $('.today_left .today_poster');
var todayP = $('.right_main p');
var todayH = $('.right_main h3');
var todayS = $('.right_main span');
var todayP2 = $('.right_infor');

$('.rm1').click(function(){
  todayPoster.find('img').attr('src','img/today2.jpg');
  todayP.text('# 미국 애니메이션 영화');
  todayH.text('신데렐라');
  todayS.text('Cinderella (2021)');
  todayP2.text('저주에 걸린 왕자를 구하라! 크리스마스의 기적같은 애니메이션 영화');
})
$('.rm2').click(function(){
  todayPoster.find('img').attr('src','img/today3.jpg');
  todayP.text('# 미국 판타지 영화');
  todayH.text('끝없음에 관하여');
  todayS.text('About Endlessness (2021)');
  todayP2.text('슬프도록 아름다운 삶의 멜랑콜리아');
})
$('.rm3').click(function(){
  todayPoster.find('img').attr('src','img/today4.jpg');
  todayP.text('# 미국 멜로 영화');
  todayH.text('아멜리에');
  todayS.text('Amelie (2007)');
  todayP2.text('슬프도록 아름다운 삶의 멜랑콜리아');
})
$('.rm4').click(function(){
  todayPoster.find('img').attr('src','img/today5.jpg');
  todayP.text('# 미국 드라마 영화');
  todayH.text('노웨어 스페셜');
  todayS.text('Nowhere Shecial (2021)');
  todayP2.text('내 아이를 키워줄 새로운 부모를 찾습니다.');
})

var bestA1 = $('.best_lm > a:nth-child(1)');
var bestA2 = $('.best_lm > a:nth-child(2)');
var bestA3 = $('.best_lm > a:nth-child(3)');
var bestM = $('.best_lt iframe');

bestA1.click(function(e){
  e.preventDefault();
  bestM.attr('src','https://www.youtube.com/embed/8AUXRGIjUXk');
})
bestA2.click(function(e){
  e.preventDefault();
  bestM.attr('src','https://www.youtube.com/embed/dKy5B-PSYZo');
})
bestA3.click(function(e){
  e.preventDefault();
  bestM.attr('src','https://www.youtube.com/embed/CfYolB0hoa0');
})

