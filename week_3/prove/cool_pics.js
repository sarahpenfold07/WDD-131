let nav = document.querySelector('nav');
let showList = document.querySelector('.menu');

showList.addEventListener('click', () => {
    nav.classList.toggle('active');
})

window.addEventListener('resize', () => {
    if(window.innerWidth >= 700) {
        nav.classList.remove('active');
    }
})