$(document).ready(function(){

  const $sliderWrap=$('.sliderWrap'),
  $slides=$sliderWrap.find('.slides'),
  $slide=$slides.find('a');
  
  const $banner_arrow=$sliderWrap.find('.banner_arrow'),
  $banner_btnPrev=$banner_arrow.find('.banner_btnPrev'),
  $banner_btnNext=$banner_btnPrev.next('.banner_btnNext');
  
  const $indicators=$sliderWrap.find('.indicators'),
  indicator=$indicators.find('a'),
  slideCount=$slide.length; 
  
  console.log(slideCount);
  
  let currentIdx=0, 
  input='',
  timer;
  
  $slides.css('width',100*slideCount+'%');
  update();
  
  // indicator
  $indicators.find('a').click(function(e){
    e.preventDefault(); 
    let idx=$(this).index(); 
    gotoSlider(idx);
    $(this).addClass('active').siblings().removeClass('active');
  })
  
    // gotoSlider
    function gotoSlider(idx){
      $slides.animate({'left':-100*idx+'%'},3500);
      currentIdx=idx; 
      update(); 
    }
  
    $banner_arrow.find('a').click(function(){
      if($(this).hasClass('banner_btnPrev')){
        gotoSlider(currentIdx-1);
      } else {
        gotoSlider(currentIdx+1);
      }
    })
  
    function update(){
      if(currentIdx==0){
        $banner_btnPrev.addClass('disabled');
      } else {
        $banner_btnPrev.removeClass('disabled');
      }
  
      if(currentIdx==slideCount-1){
        $banner_btnNext.addClass('disabled');
      } else {
        $banner_btnNext.removeClass('disabled');
      }
  
    $indicators.find('a').eq(currentIdx).addClass('active').siblings().removeClass('active');
    }
  
    // start()
    function start(){
      timer=setInterval(function(){
        let nextIdx=(currentIdx+1)%slideCount; 
        gotoSlider(nextIdx)
      },4000)
    }
    start();
  
    // stop()
    function stop(){
      clearInterval(timer)
    }
  
    $sliderWrap.mouseenter(stop).mouseleave(start);

  // header
  const $header=$('header');
  let $headerOffset=$('#banner').offset().top;

  $(window).scroll(function(){
    if($(this).scrollTop()>=$headerOffset){
      $header.addClass('scroll');
    } else {
      $header.removeClass('scroll');
    }
  })

  // best
  let $bestOffset=$('#best').offset().top;

  $(window).scroll(function(){
    if($(this).scrollTop()>=$bestOffset){
      $('.best_img').addClass('line');
      $('.best_txt').addClass('move');
      $('.best2>.best_txt').addClass('move2');
    } else {
      $('.best_img').removeClass('line');
      $('.best_txt').removeClass('move');
      $('.best2>.best_txt').removeClass('move2');
    }
});


// youtube 
let $makeupOffset=$('#makeup').offset().top;

$(window).scroll(function(){
  if($(this).scrollTop()>=$makeupOffset){
    $('.youtube_txt').addClass('right');
    $('.youtube_mov').addClass('left');
  } else {
    $('.youtube_txt').removeClass('right');
    $('.youtube_mov').removeClass('left');
  }
});

  //sub_menu
  $('.gnb>li>a').mouseenter(function(){
    $(this).siblings('.black_bar').stop().slideDown();
  })
  $('.black_bar').mouseenter(function(){
    $(this).stop().slideDown();
  })
  $('.black_bar').mouseleave(function(){
    $(this).stop().slideUp();
  })
  $('.gnb>li>a').mouseout(function(){
    $(this).siblings('.black_bar').stop().slideUp();
  })

  //tab
  const $btn=$('.tone>li');
  const $img=$('.tone_img>li')
  $btn.find('a').css('color','black');
  $btn.first().css('border-bottom','2px solid #000');
  $btn.first().siblings().css('border-bottom','2px solid #ddd');
  $img.first().css('display','block');

  $btn.css('background-color','transparent').siblings().css('background-color','transparent')
  $btn.mouseover(function(){
    $(this).css('background-color','transparent').siblings().css('background-color','transparent');
    $btn.find('a').css('color','black');
  })
  $btn.mouseover(function(){
    $(this).css('border-bottom','2px solid #000').siblings().css('border-bottom','2px solid #ddd')
  })
  $btn.first().mouseover(function(){
    $img.first().css('display','block').siblings().css('display','none');
  })
  $('.tone>li:nth-child(2)').mouseover(function(){
    $('.tone_img>li:nth-child(2)').css('display','block').siblings().css('display','none');
  })
  $('.tone>li:nth-child(3)').mouseover(function(){
    $('.tone_img>li:nth-child(3)').css('display','block').siblings().css('display','none');
  })
  $btn.last().mouseover(function(){
    $img.last().css('display','block').siblings().css('display','none');
  })

  $(window).resize(function () {
    // window 487px 미만일떄
    if($(window).width()<470){
      $btn.first().css('background-color','black');
      $btn.css('border-bottom','0.5px solid #000');
      $btn.first().find('a').css('color','white');
      $img.first().css('display','block');

      $btn.mouseover(function(){
        $btn.css('border-bottom','0.5px solid #000');
        $(this).css('background-color','black').siblings().css('background-color','transparent');
        $(this).find('a').css('color','white');
        $(this).siblings().find('a').css('color','black');
      })
      $btn.first().mouseover(function(){
        $img.first().css('display','block').siblings().css('display','none');
      })
      $('.tone>li:nth-child(2)').mouseover(function(){
        $('.tone_img>li:nth-child(2)').css('display','block').siblings().css('display','none');
      })
      $('.tone>li:nth-child(3)').mouseover(function(){
        $('.tone_img>li:nth-child(3)').css('display','block').siblings().css('display','none');
      })
      $btn.last().mouseover(function(){
        $img.last().css('display','block').siblings().css('display','none');
      })
    // window 487px 이상일떄
    } else {
      $btn.find('a').css('color','black');
      $btn.first().css('border-bottom','2px solid #000');
      $btn.first().siblings().css('border-bottom','2px solid #ddd');

      $btn.css('background-color','transparent').siblings().css('background-color','transparent')
      $btn.mouseover(function(){
        $(this).css('background-color','transparent').siblings().css('background-color','transparent');
        $btn.find('a').css('color','black');
      })
      $btn.mouseover(function(){
        $(this).css('border-bottom','2px solid #000').siblings().css('border-bottom','2px solid #ddd')
      })
      $btn.first().mouseover(function(){
        $img.first().css('display','block').siblings().css('display','none');
      })
      $('.tone>li:nth-child(2)').mouseover(function(){
        $('.tone_img>li:nth-child(2)').css('display','block').siblings().css('display','none');
      })
      $('.tone>li:nth-child(3)').mouseover(function(){
        $('.tone_img>li:nth-child(3)').css('display','block').siblings().css('display','none');
      })
      $btn.last().mouseover(function(){
        $img.last().css('display','block').siblings().css('display','none');
      })
    }
  })

  //banner_resize
  const $banner=$('#banner'),
  $slider_Wrap=$banner.find('.sliderWrap'),
  $slides2=$slider_Wrap.find('.slides'),
  $slide2=$slides2.find('a'),
  $slideImg=$slide2.find('img'),
  $slideLength=$('.slides>a').length;

  console.log($slideLength)

  // let $slideImgHig=$slideImg.height();

  $(window).resize(function(){
    let win=$(this),
    winWid=win.width();

    // $slideImgHig=$slideImg.height();
    // $slider_Wrap.height($slideImgHig);

    if(winWid<=767){
      for(let i=0; i<$slideLength; i++){
        $slide2.eq(i).find('img').attr('src','img/banner_0'+(1+i)+'.png')
      }
    } else {
      for(let i=0; i<$slideLength; i++){
        $slide2.eq(i).find('img').attr('src','img/banner_'+(1+i)+'.png')
      }
    }
  })
  $(window).resize();
  
  // conts
  $('.conts>a').click(function(){
    $(this).css('background-color','black').siblings().css('background-color','#ddd');
  })
  let $scroll1=$('#new').offset().top;
  let $scroll2=$('#recom').offset().top;
  let $scroll3=$('#best').offset().top;
  let $scroll4=$('#makeup').offset().top;
  let $scroll5=$('#special').offset().top;
  let $scroll6=$('#insta').offset().top;


  $('.conts>a:nth-child(1)').click(function(){
    $('html,body').animate({'scrollTop':0},600);
  })
  $('.conts>a:nth-child(2)').click(function(){
    $('html,body').animate({'scrollTop':$scroll1-100},600);
  })
  $('.conts>a:nth-child(3)').click(function(){
    $('html,body').animate({'scrollTop':$scroll2-150},600);
  })
  $('.conts>a:nth-child(4)').click(function(){
    $('html,body').animate({'scrollTop':$scroll3+200},600);
  })
  $('.conts>a:nth-child(5)').click(function(){
    $('html,body').animate({'scrollTop':$scroll4+200},600);
  })
  $('.conts>a:nth-child(6)').click(function(){
    $('html,body').animate({'scrollTop':$scroll5+200},600);
  })
  $('.conts>a:nth-child(7)').click(function(){
    $('html,body').animate({'scrollTop':$scroll6+200},600);
  })

  $('.ham').click(function(){
    $('.header_bom').toggleClass('left');
  })


  // slide
  $('.recom_list').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});