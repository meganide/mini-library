import { displayBook } from './displayBook.js';
import { Book } from './interfaces';

function search(allBooks: Book[]) {
  const query = document.querySelector('#searchBook') as HTMLInputElement;
  const searchedBook = allBooks.filter((book) => {
    return book.title.toLowerCase().includes(query.value.toLowerCase());
  });

  if (searchedBook[0]) {
    displayBook(undefined, searchedBook[0]);
    query.value = '';
  }

}

export { search };
