$(document).ready(function(){

  let $place_left=$('.place_left'),
  $place_list=$place_left.find('.place_list'),
  $place_listA=$place_list.find('a');

  let $place_right=$('.place_right'),
  $place_rightA=$place_right.find('a'),
  $slideCount=$place_listA.length;

  let currentIdx=0,
  input='',
  timer=0;
  $place_list.css('height',100*$slideCount+'%');

  $place_right.find('a').click(function(e){
  e.preventDefault(); // a에 href 링크값으로 이동하는것 방지
  let idx=$(this).index(); // 0부터 시작
  gotoSlider(idx);
  $(this).addClass('active').siblings().removeClass('active');
})
$place_right.find('a').eq(0).addClass('active').siblings().removeClass('active');
function gotoSlider(idx){
  $place_list.animate({'top':-100*idx+'%'},2000);
  currentIdx=idx; // 현재 slider index번호
  $place_right.find('a').eq(currentIdx).addClass('active').siblings().removeClass('active');
}
// start()
function start(){
  timer=setInterval(function(){
    let nextIdx=(currentIdx+1)%$slideCount;
    gotoSlider(nextIdx)
  },3500)
}
start();
// stop()
function stop(){
  clearInterval(timer)
}
$place_left.mouseenter(stop).mouseleave(start);

//slide
const $main3_box=$('.main3_box'),
$prev=$('.prev'),
$next=$('.next');
let currentidx=0;

$next.click(function(){
  $main3_box.css('left',(-100)+'%');
})
$prev.click(function(){
  $main3_box.css('left',(0)+'%');
})

$('.top').click(function(){
  $('html,body').animate({'scrollTop':0},400);
})


})