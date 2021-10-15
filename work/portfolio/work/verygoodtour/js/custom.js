$(document).ready(function(){

  // sliders
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 350,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
  });


  // menu
  $('.menu>li').first().find('a').css({'color':'#fff','background-color':'#0855b6'});

  $('.menu>li').mouseover(function(){
    $(this).find('a').css({'color':'#fff','background-color':'#0855b6'});
    $(this).siblings().find('a').css({'color':'#666','background-color':'transparent'});
  })

  // gnb
  $('.gnb > li').mouseover(function(){
    $(this).find('.bar').stop().slideDown(300)
  })
  $('.gnb > li').mouseout(function(){
    $(this).find('.bar').stop().slideUp(300)
  })

  // conts
  $('.conts>a').click(function(){
    $(this).css('background-color','black').siblings().css('background-color','#ddd');
  })

  let $scroll1=$('#main1').offset().top;
  let $scroll2=$('#main2').offset().top;
  let $scroll3=$('#main3').offset().top;
  let $scroll4=$('#main4').offset().top;
  let $scroll5=$('#main5').offset().top;
  let $scroll6=$('#main6').offset().top;
  let $scroll7=$('#main7').offset().top;

  $('.conts>a:nth-child(1)').click(function(){
    $('html,body').animate({'scrollTop':$scroll1},600);
  })
  $('.conts>a:nth-child(2)').click(function(){
    $('html,body').animate({'scrollTop':$scroll2},600);
  })
  $('.conts>a:nth-child(3)').click(function(){
    $('html,body').animate({'scrollTop':$scroll3},600);
  })
  $('.conts>a:nth-child(4)').click(function(){
    $('html,body').animate({'scrollTop':$scroll4},600);
  })
  $('.conts>a:nth-child(5)').click(function(){
    $('html,body').animate({'scrollTop':$scroll5},600);
  })
  $('.conts>a:nth-child(6)').click(function(){
    $('html,body').animate({'scrollTop':$scroll6},600);
  })
  $('.conts>a:nth-child(7)').click(function(){
    $('html,body').animate({'scrollTop':$scroll7},600);
  })

// menu
// 변수
const $imgWrap=$('.img_wrap'),
$prevImg=$('.prev_img'),
$nextImg=$('.next_img');

// notice
$('.notice').css('visibility','visible');
$('.trip').css('visibility','hidden');

$('.center').click(function(){
  $('.notice').css('visibility','visible');
  $('.trip').css('visibility','hidden');
})
$('.request').click(function(){
  $('.notice').css('visibility','hidden');
  $('.trip').css('visibility','visible');
})

// main6
$('.global_close').click(function(){
  $('.global_txt').css('display','none');
})
$('.global_btn').click(function(){
  $(this).siblings('.global_txt').css('display','flex');
})

$('.global_etc>li').first().addClass('color').siblings().removeClass('color');
$('.global_etc>li').mouseover(function(){
  $(this).addClass('color').siblings().removeClass('color');
})

// youtube
let $youtube=$('.youtube'),
$youtube_list=$youtube.find('.youtube_list'),
$youtube_listA=$youtube_list.find('div');

let $etc=$('.etc'),
$etcA=$etc.find('a'),
$youtubeCount=$youtube_listA.length;

let cidx=0,
input='',
time=0;
$youtube_list.css('height',100*$youtubeCount+'%');

$etc.find('a').click(function(e){
  e.preventDefault();
  let ndx=$(this).index(); 
  goSlider(ndx);
  $(this).addClass('list').siblings().removeClass('list');
})

$etc.find('a').eq(0).addClass('list').siblings().removeClass('list');
function goSlider(ndx){
  $youtube_list.animate({'top':-100*ndx+'%'},2000);
  cidx=ndx; 
  $etc.find('a').eq(cidx).addClass('list').siblings().removeClass('list');
}
// start()
function starts(){
  time=setInterval(function(){
    let ndx=(cidx+1)%$youtubeCount;
    goSlider(ndx)
  },3500)
}
starts();
// stop()
function stops(){
  clearInterval(time)
}
$youtube.mouseenter(stops).mouseleave(starts);

//map
$('.asian').css('display','block');
$('.africa').css('display','block');
$('.america').css('display','block');
$('.europe').css('display','block');
$('.aust').css('display','block');

$('.all_btn').click(function(){
  $('.asian').css('display','block');
  $('.africa').css('display','block');
  $('.america').css('display','block');
  $('.europe').css('display','block');
  $('.aust').css('display','block');
})
$('.asia_btn').click(function(){
  $('.asian').css('display','block');
  $('.africa').css('display','none');
  $('.america').css('display','none');
  $('.europe').css('display','none');
  $('.aust').css('display','none');
})
$('.america_btn').click(function(){
  $('.asian').css('display','none');
  $('.africa').css('display','none');
  $('.america').css('display','block');
  $('.europe').css('display','none');
  $('.aust').css('display','none');
})
$('.africa_btn').click(function(){
  $('.asian').css('display','none');
  $('.africa').css('display','block');
  $('.america').css('display','none');
  $('.europe').css('display','none');
  $('.aust').css('display','none');
})
$('.europe_btn').click(function(){
  $('.asian').css('display','none');
  $('.africa').css('display','none');
  $('.america').css('display','none');
  $('.europe').css('display','block');
  $('.aust').css('display','none');
})
$('.aust_btn').click(function(){
  $('.asian').css('display','none');
  $('.africa').css('display','none');
  $('.america').css('display','none');
  $('.europe').css('display','none');
  $('.aust').css('display','block');
})

// conts
$('.top_icon').click(function(){
  $('html,body').animate({'scrollTop':0},400);
})

})