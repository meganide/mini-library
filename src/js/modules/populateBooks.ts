import { displayBook } from './displayBook.js';
import { Book } from './interfaces';

function populateBooks(allBooksInfo: Book[]) {
  const allBooks = document.querySelectorAll('.books__book') as NodeListOf<HTMLElement>;

  allBooks.forEach((book, index) => {
    const bookName = book.querySelector('.books__name') as HTMLElement;
    const bookAuthor = book.querySelector('.books__author') as HTMLElement;
    book.style.backgroundColor = allBooksInfo[index]?.color
    bookName.textContent = allBooksInfo[index]?.title
    bookAuthor.textContent = allBooksInfo[index]?.publisher

    book.addEventListener('click', (e) => displayBook(e, allBooksInfo[index]))
  });
}


export { populateBooks };
