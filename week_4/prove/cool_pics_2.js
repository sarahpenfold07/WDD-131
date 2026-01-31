let nav = document.querySelector('nav');
let showList = document.querySelector('.menu');

let gallery = document.querySelector('main')
let modal = document.querySelector('dialog')
let modalImg = document.querySelector('img')
let button = document.querySelector('.close-viewer')


gallery.addEventListener('click', openModal)

function openModal(e) {
if (e.target.tagName != 'IMG') {
    return
}

let fullImage = e.target.src.replace (' ', 'full')
    modal.src = fullImage

    modal.showModal();
}

button.addEventListener('click', () => {
    modal.close()
})

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

showList.addEventListener('click', () => {
    nav.classList.toggle('active');
})

window.addEventListener('resize', () => {
    if(window.innerWidth >= 700) {
        nav.classList.remove('active');
    }
})