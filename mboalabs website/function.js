const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#navbar-logo');


//mobile menu js
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}
menu.addEventListener('click', mobileMenu);


//active menu things
const highlightMenu = () => {
    const thing1 = document.querySelector('.highlight');
    const home = document.querySelector('#home-page');
    const about = document.querySelector('#about-page');
    const blog = document.querySelector('#blog-page');
    let scrollPos = window.scrollY;
    

    if(window.innerWidth > 960 && scrollPos < 600) {
        home.classList.add('highlight')
        about.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        about.classList.add('highlight')
        home.classList.remove('highlight')
        blog.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 2123) {
        blog.classList.add('highlight')
        about.classList.remove('highlight')
        return
    }


    if((thing1 && window.innerWidth < 960 && scrollPos < 600) || thing1) {
        thing1.classList.remove('highlight')
    }
}


window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);


//closing mobile menu
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);