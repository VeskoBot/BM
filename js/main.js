const menuBtn = document.querySelector('.menu-btn')
const header = document.querySelector('header')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen){
    menuBtn.classList.add('open');
    header.classList.add('open');
    menuOpen = true;
  } else{
    menuBtn.classList.remove('open');
    header.classList.remove('open');
    menuOpen = false;
  }
});
var cw = $('.menu-btn').width();
$('.menu-btn').css({
    'height': cw + 'px'
});
  // $('.menu-btn').click(function(){
  //   $('.logo').css("margin","0px").css("margin-left","auto");
  //   $('.menu').css("left","25%").css("opacity","1").css("transition","1s");
  // });
  // $('.menu-btn.open').click(function(){
  //   $('.logo').css("margin","0px").css("margin-left","auto");
  //   $('.menu').css("left","-25%").css("opacity","1").css("transition","1s");
  // });
