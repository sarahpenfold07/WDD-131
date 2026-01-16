
let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');
let boxSize = document.getElementById('logo');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'shire') {
        document.body.style.backgroundImage = "url('https://sarahpenfold07.github.io/WDD-131/week_2/images/Shire.avif')";
        pageContent.style.color = "white"
        pageContent.style.fontFamily = "'Big Caslon', serif";
        boxSize.style.transform = 'scale(0, 0)'
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
        boxSize.style.transform = 'scale(0, 0)'
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
        boxSize.style.transform = 'scale(0, 0)'
    } else {
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
        boxSize.style.transform = 'scale(1, 1)'
    }
} 