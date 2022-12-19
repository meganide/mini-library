import { httpGetBooks } from './modules/api.js';
import { Book } from './modules/interfaces.js';
import { populateBooks } from './modules/populateBooks.js';
import { search } from './modules/search.js';

async function main() {
  const allBooks: Book[] = await httpGetBooks();
  populateBooks(allBooks);

  const searchButton = document.querySelector('.search__submit') as HTMLButtonElement;
  searchButton.addEventListener('click', () => search(allBooks));
}

main();
