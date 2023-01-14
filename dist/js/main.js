const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-Nav');
const menuBranding = document.querySelector('.menu-Branding');

const navItems = document.querySelectorAll('.navItem');

let showMenu = false;

menuBtn.addEventListener('click', toddleMenu);

function toddleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');

        navItems.forEach(item => item.classList.add('show'));

        showMenu='true';
    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');

        navItems.forEach(item => item.classList.remove('show'));

        showMenu='false';
    }
}