const hamburger = document.getElementsByClassName('bx-menu-wide');
const navLinks = document.getElementsByClassName('nav-links');

hamburger[0].addEventListener('click', hideNavLinks);

function hideNavLinks(event){
    if(navLinks[0].classList.contains('active')){
        navLinks[0].classList.remove('active');
    }else{
        navLinks[0].classList.add('active');
    }
}