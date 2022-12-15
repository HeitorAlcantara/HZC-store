var URL = window.origin;

const botaoMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu-lateral');

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo');
    console.log(URL);
})

const inicio = document.querySelector('.menu-lateral__link--inicio');
const picos = document.querySelector('.menu-lateral__link--picos');
const videos = document.querySelector('.menu-lateral__link--videos');

const picosHtml = URL + "picos.html";
const videosHtml = URL + "videos.html";

if(picosHtml == window.location.href){
    inicio.classList.remove('menu-lateral__link--ativo');
    picos.classList.toggle('menu-lateral__link--ativo');
}

if(videosHtml == window.location.href){
    inicio.classList.remove('menu-lateral__link--ativo');
    picos.classList.remove('menu-lateral__link--ativo');

    videos.classList.toggle('menu-lateral__link--ativo');
}