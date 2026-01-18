let selectElem = document.querySelector('select');
let doc = document.querySelector('body');
let mish = document.querySelector('.statement');
let info = document.querySelector('.info');
let logo = document.querySelector('img'); 

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        doc.style.background = "black"
        mish.style.color = "#fff"
        info.style.color = "#fff"
        logo.src = "../images/byui-logo-black.png"
    } else {
        doc.style.background = "#fff"
        mish.style.color = "#000"
        info.style.color = "#000"
        logo.src = "../../week_1/mission/images/byui-logo-white.webp"
    }
}        