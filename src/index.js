import './styles.css';
import {home} from './home.js';

const clearContent = () => {
    document.querySelector('.content').replaceChildren();
}

clearContent();
home();