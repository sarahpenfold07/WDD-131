function add(a, b) { //--> a and b are parameters  --> add(a, b) is the function signature or header (tells us the name of the function)
    return a + b;
}

function subtract (a, b) { //--> declaring a function 
    return a - b;
}

ans = add(3, 6) // --> calling the function, 3 and 6 are arguments 
ans = subtract(ans, 2) //--> updating ans 
console.log(ans)


let subtract = (a, b) => {
    return a - b;
};



let btn = document.querySelector('.menu-btn');

console.log(btn)

btn.addEventListener('click', function() {
    console.log('button clicked');
    btn.classList.toggle('open');
});


