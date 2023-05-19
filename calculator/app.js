const hambuger = document.querySelector('.top-screen .nav-list .hambuger ');
const mobile_menu = document.querySelector('.top-screen .nav-list ul ');
const top_screen = document.querySelector('.top-screen');

hambuger.addEventListener('click',()=>{
    hambuger.classList.toggle ('active');
    mobile_menu.classList.toggle ('active');
});