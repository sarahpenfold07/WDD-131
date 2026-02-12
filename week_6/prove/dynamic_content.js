const nav = [
    {
    header: "Flick Picks",
    menu1: "Home",
    menu2: "About",
    menu3: "Contact"
    }
];

const movies = [
    {
        title: "Spider-Man: Into the Spider-Verse",
        date: "Dec 14, 2018",
        description: "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/spiderman.png",
        imgAlt: "Miles Morales swinging through the city",
        ages: "10+",
        genre: "Action/Adventure",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "The Other Side of Heaven",
        date: "December 14, 2001",
        description: "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/heaven.png",
        imgAlt: "Poster for The Other Side of Heaven showing a missionary and tropical landscape",
        ages: "10+",
        genre: "Drama/Religious",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "Luca",
        date: "June 18, 2021",
        description: "Two sea monsters experience a life-changing summer on the Italian Riviera.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/luca.png",
        imgAlt: "Luca and Alberto standing on the beach",
        ages: "6+",
        genre: "Family/Fantasy",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "17 Miracles",
        date: "June 3, 2011",
        description: "A moving depiction of the Willie Handcart Company's journey west in 1856, focusing on the miraculous events that helped early pioneers survive one of the harshest migrations in history.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/miracles.jpg",
        imgAlt: "Movie poster for 17 Miracles showing handcart pioneers walking through snow",
        ages: "12+",
        genre: "Historical/Religious",
        stars: "⭐⭐⭐⭐"
    }
    ];

const footer = [
    {
        elem1: "&copy; Flick Picks"
    }
];

const moviesList = document.getElementById('movie-list');
const navMenu = document.getElementById('header');
const foot1 = document.getElementById('footer')

let navHTML = '';

nav.forEach((menu) => {
    navHTML += `
        <h1>${menu.header}</h1>
        <nav>
            <a href="#">${menu.menu1}</a>
            <a href="#">${menu.menu2}</a>
            <a href="#">${menu.menu3}</a>
        </nav>
    `;
});

navMenu.innerHTML = navHTML;

movies.forEach((movie) => {
    console.log(movie);
});

movies.forEach((movie) => {
    const article = document.createElement('article');
    article.classList.add('movie');
    article.id = `movie-${movie.id}`
    article.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="${movie.imgSrc}" alt="${movie.imgAlt}">
        <p><strong>Release Date: </strong>${movie.date}</p>
        <p><strong>Recommended Age: </strong>${movie.ages}</p>
        <p><strong>Genre: </strong>${movie.genre}</p>
        <p><strong>Rating: </strong>${movie.stars}<span aria-label=""></p>
        <p id="desc">${movie.description}</p>
    `;

    moviesList.appendChild(article);

});

let footerHTML = ''

footer.forEach((foot) => {
    footerHTML += `
    <footer>
        <p>&copy; Flick Picks</p>
    </footer>
    `;
});

foot1.innerHTML = footerHTML;




