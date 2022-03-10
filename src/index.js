import './styles.css';
import {home} from './home.js';
import {menu} from './menu.js';
import {gallery} from './gallery.js';
import {contact} from './contact';

const clearLinks = () => {
    const links = document.querySelectorAll('.link')
    links.forEach (link => {
        link.classList.remove('ul');
    });
};

const showMobileMenu = (() => {
    document.body.addEventListener('click', function(event){
        if(event.target.classList.contains('mobileMenuButton')) {
            document.querySelector('.mobileMenu').style.display = 'flex';
        }
        else document.querySelector('.mobileMenu').style.display = 'none';
    })

})();

const initialisePage = () => {
    home();
    menu();
    gallery();
}

const loadPage = (page) => {
    document.querySelector('.home').style.display = 'none';
    document.querySelector('.menu').style.display = 'none';
    document.querySelector('.gallery').style.display = 'none';
    document.querySelector('.contact').style.display = 'none';

    if (page == 'home'){
        document.querySelector('.home').style.display = 'block';
        document.querySelector('.homeLink').classList.add('ul');
    }
    if (page == 'menu'){
        document.querySelector('.menu').style.display = 'flex';
        document.querySelector('.menuLink').classList.add('ul');
    }
    if (page == 'gallery'){
        document.querySelector('.gallery').style.display = 'block';
        document.querySelector('.galleryLink').classList.add('ul');
    }
    if (page == 'contact'){
        document.querySelector('.contact').style.display = 'block';
        document.querySelector('.contactLink').classList.add('ul');
    }

}

const changePage = (() => {
    document.body.addEventListener('click', function(event){
        if(event.target.classList.contains('homeLink') || event.target.classList.contains('homeLinkMobile')) {
            clearLinks();
            loadPage('home');
        };
        if(event.target.classList.contains('menuLink') || event.target.classList.contains('menuButton') || event.target.classList.contains('menuLinkMobile')) {
            clearLinks();
            loadPage('menu');   
        };
        if(event.target.classList.contains('galleryLink') || event.target.classList.contains('galleryLinkMobile')) {
            clearLinks();
            loadPage('gallery');
        };
        if(event.target.classList.contains('contactLink') || event.target.classList.contains('reserveButton') || event.target.classList.contains('contactLinkMobile')) {
            clearLinks();
            loadPage('contact');   
        };

      });
})();

`initialisePage();
loadPage('home');`