import { httpGetBooks } from './modules/api.js';
import { Book } from './modules/interfaces.js';
import { populateBooks } from './modules/populateBooks.js';

async function main() {
  const allBooks: Book[] = await httpGetBooks();
  populateBooks(allBooks);
}

main();
