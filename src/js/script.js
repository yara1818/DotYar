var hamburgertitle = document.querySelector('.hamburger__title');
var hamburgermenu= document.querySelector('.hamburger__menu');

hamburgertitle.addEventListener('click', (e) => {
    if (hamburgermenu.style.display == 'none') {
        hamburgermenu.style.display = 'block';
    }
    else {
        hamburgermenu.style.display = 'none';
    }
});