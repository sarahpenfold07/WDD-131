<span aria-label = "5 out of 5 stars" role = "img">star star </span>
getAttribute('aria-label')

innerText

innerText.length

setAttribute('aria-label', `${rating} out of 5 stars);

let allRatingElems = document.querySelectorAll('article.movie p span')

allRatingElems.forEach((elem) => {
    let rating = elem.innerText.length;
    elem.setAttribute('aria-label', `${rating} out of 7 starts' );
});



