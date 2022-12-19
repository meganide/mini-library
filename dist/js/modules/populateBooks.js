import { displayBook } from './displayBook.js';
function populateBooks(allBooksInfo) {
    const allBooks = document.querySelectorAll('.books__book');
    allBooks.forEach((book, index) => {
        var _a, _b, _c;
        const bookName = book.querySelector('.books__name');
        const bookAuthor = book.querySelector('.books__author');
        book.style.backgroundColor = (_a = allBooksInfo[index]) === null || _a === void 0 ? void 0 : _a.color;
        bookName.textContent = (_b = allBooksInfo[index]) === null || _b === void 0 ? void 0 : _b.title;
        bookAuthor.textContent = (_c = allBooksInfo[index]) === null || _c === void 0 ? void 0 : _c.author;
        book.addEventListener('click', (e) => displayBook(e, allBooksInfo[index]));
    });
}
export { populateBooks };
