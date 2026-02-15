
const navJs = [
    {
        header: 'Kids Read for Fun',
        menu1: 'About', 
        menu2: 'Archive', 
        menu3: 'Search'
    }
];

const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
];

const footer = [
    {
        word: 'Jane Doe'
    }
];

const bookList = document.getElementById('book-list');
const menu = document.getElementById('nav');
const foot1 = document.getElementById('foot')

articles.forEach((book) => {
    console.log(book);
});

articles.forEach((book) => {
    const article = document.createElement('article');
    article.classList.add('book');
    article.id = `book-${book.id}`;
    article.innerHTML = `
        <div class="book-meta">
            <p><strong>Date:</strong> ${book.date}</p>
            <p><strong>Ages:</strong> ${book.ages}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Rating:</strong> ${book.stars}</p>
        </div>
        <div class="book-main">
            <h2>${book.title}</h2>
            <img src="${book.imgSrc}" alt="${book.imgAlt}">
            <p class="description">${book.description}</p>
        </div>

    `;

    bookList.appendChild(article);
});

let navJsHTML = ''

navJs.forEach((menu) => {
    navJsHTML += `
    <header>${menu.header}</header>
    <hr class="line-1">
    <nav>
        <li>${menu.menu1}</li>
        <li>${menu.menu2}</li>
        <li>${menu.menu3}</li>
    </nav>
        <hr class="line-2">
        <hr class="line-3">
    `
});

menu.innerHTML = navJsHTML

let footerHTML = ''

footer.forEach((bottomPage) => {
    footerHTML += `
    <p>${bottomPage.word}</p>
    `
});

foot1.innerHTML = footerHTML


