import contact from './contact';
import home from './home';
import load from './load';
import menu from './menu';

load();
home();

span1.addEventListener('click', function () {
    const element = document.querySelector('.display')
    element.remove();
    home();
});

span2.addEventListener('click', function () {
    const element = document.querySelector('.display')
    element.remove();
    menu();
});

span3.addEventListener('click', function () {
    const element = document.querySelector('.display')
    element.remove();
    contact();
});