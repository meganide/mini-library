function displayBook(e, book) {
    populateBook(book);
    toggleShowPages();
}
function populateBook(book) {
    const arrow = document.querySelector('.arrow');
    arrow.addEventListener('click', toggleShowPages);
    const bookCover = document.querySelector('.single-book__book');
    bookCover.style.backgroundColor = book === null || book === void 0 ? void 0 : book.color;
    const bookName = document.querySelector('.single-book__name');
    const bookAuthor = document.querySelector('.single-book__author');
    bookName.textContent = book === null || book === void 0 ? void 0 : book.title;
    bookAuthor.textContent = book === null || book === void 0 ? void 0 : book.author;
    const bookNameSecondary = document.querySelector('.single-book__name--secondary');
    const bookAuthorSecondary = document.querySelector('.single-book__author--secondary');
    bookNameSecondary.textContent = book === null || book === void 0 ? void 0 : book.title;
    bookAuthorSecondary.textContent = book === null || book === void 0 ? void 0 : book.author;
    const bookPlot = document.querySelector('.single-book__desc');
    bookPlot.textContent = book === null || book === void 0 ? void 0 : book.plot;
    const pointKeys = [book.audience, book.year, book.pages, book.publisher];
    const points = document.querySelectorAll('.single-book__span-value');
    points.forEach((point, index) => {
        if (pointKeys[index]) {
            point.textContent = pointKeys[index].toString();
        }
    });
}
function toggleShowPages() {
    const singleBookPage = document.querySelector('.single-book');
    const allBooksPage = document.querySelector('.books');
    const search = document.querySelector('.search');
    singleBookPage.classList.toggle('hide');
    allBooksPage.classList.toggle('hide');
    search.classList.toggle('hide');
}
export { displayBook };
