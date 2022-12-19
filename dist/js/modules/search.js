import { displayBook } from './displayBook.js';
function search(allBooks) {
    const query = document.querySelector('#searchBook');
    const searchedBook = allBooks.filter((book) => {
        return book.title.toLowerCase().includes(query.value.toLowerCase());
    });
    if (searchedBook[0]) {
        displayBook(undefined, searchedBook[0]);
        query.value = '';
    }
}
export { search };
