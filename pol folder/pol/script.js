const btn = document.querySelector('.menu',);
const logo = document.querySelector('.logoLink');
const menu = document.querySelector('.right-menu');
const settings = document.getElementById('setting');

btn.addEventListener('click', function () {
    btn.classList.toggle('active');
    if (btn.classList.contains('active')) {
        menu.style.width = '4.3rem';
        logo.style.opacity = '0';

        
    }
    else {
        menu.style.width = '15rem';
        logo.style.opacity = '1';
    }
})
