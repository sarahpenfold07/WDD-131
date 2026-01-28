let nav = document.querySelector('nav');
let toggleButton = document.querySelector('.menu-btn');

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active');
})

window.addEventListener('resize', () => {
    if(window.innerWidth >= 700) {
        nav.classList.remove('active');
    }
})

let btn = document.querySelector('.menu-btn');

console.log(btn)

btn.addEventListener('click', function() {
    console.log('button clicked');
    btn.classList.toggle('open');
});

