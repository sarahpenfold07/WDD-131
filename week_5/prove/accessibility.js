let allRatingElems = document.querySelectorAll('article.movie p span')

function addStars(span) {
    let stars = span.innerText.length 
    span.setAttribute('aria-label', `${stars} out of 5 stars`);
}

let spans = document.querySelectorAll('atricle.movie p span')

spans.forEach((span) => {
    let stars = span.innerText.length 
    span.setAttribute('aria-label', `${stars} out of 5 stars`);
});

//for (let i = 0; i < spans.length; i = i + 1) { // starts at the beginning; sets the condition; goes by 1;
   // addStars(spans[i]);
//}

