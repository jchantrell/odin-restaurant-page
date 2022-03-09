import './styles.css';
import {home} from './home.js';
import {menu} from './menu.js';
import {gallery} from './gallery.js';
import {contact} from './contact';

const clearContent = () => {
    document.querySelector('.content').replaceChildren();
    clearLinks();
}

const clearLinks = () => {
    const links = document.querySelectorAll('.link')
    links.forEach (link => {
        link.classList.remove('ul');
    });
}

const changePage = (() => {
    document.body.addEventListener('click', function(event){
        if(event.target.classList.contains('homeLink')) {
            clearContent();
            home();
        };
        if(event.target.classList.contains('menuLink') || event.target.classList.contains('menuButton')) {
            clearContent();
            menu();   
        };
        if(event.target.classList.contains('galleryLink')) {
            clearContent();
            gallery();     
        };
        if(event.target.classList.contains('contactLink') || event.target.classList.contains('reserveButton')) {
            clearContent();
            contact();    
        };

      });
})();
