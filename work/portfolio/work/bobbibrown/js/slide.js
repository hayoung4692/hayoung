$(document).ready(function(){

  const $sliderWrap=$('.sliderWrap'),
  $slides=$sliderWrap.find('.slides'),
  $slide=$slides.find('a');
  
  const $arrow=$sliderWrap.find('.arrow'),
  $btnPrev=$arrow.find('.btnPrev'),
  $btnNext=$btnPrev.next('.btnNext');
  
  const $indicators=$sliderWrap.find('.indicators'),
  indicator=$indicators.find('a'),
  slideCount=$slide.length; 
  
  console.log(slideCount);
  
  let currentIdx=0, 
  input='',
  timer;
  
  // 바로실행
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
  
    // .hasClass() 결과값이 참인지 거짓인지 조건문에서 많이 사용
    $arrow.find('a').click(function(){
      if($(this).hasClass('btnPrev')){
        gotoSlider(currentIdx-1);
      } else {
        gotoSlider(currentIdx+1);
      }
    })
  
    // 좌우 버튼에 currentIdx=0이면 btnPrev에 disabled 클래스 추가     
    // CurrentIdx=2이면 btnNext에 disabled 클래스 추가
    function update(){
      if(currentIdx==0){
        $btnPrev.addClass('disabled');
      } else {
        $btnPrev.removeClass('disabled');
      }
  
      if(currentIdx==slideCount-1){
        $btnNext.addClass('disabled');
      } else {
        $btnNext.removeClass('disabled');
      }
  
    // indicator의 a의 currentIdx번째에 addClass('active') 그외 형제는 removeClass('.active')
    $indicators.find('a').eq(currentIdx).addClass('active').siblings().removeClass('active');
    }
  
    // start()
    function start(){
      timer=setInterval(function(){
        let nextIdx=(currentIdx+1)%slideCount; 
        gotoSlider(nextIdx)
      },3500)
    }
    start();
  
    // stop()
    function stop(){
      clearInterval(timer)
    }
  
    // 마우스를 떠나면 start(), 마우스가 올라가면 stop()
    $sliderWrap.mouseenter(stop).mouseleave(start);
  
  })