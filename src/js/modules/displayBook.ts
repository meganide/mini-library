import { Book } from './interfaces';

function displayBook(e: MouseEvent, book: Book) {
  populateBook(book);
  toggleShowPages();
}

function toggleShowPages() {
  const singleBookPage = document.querySelector('.single-book') as HTMLElement;
  const allBooksPage = document.querySelector('.books') as HTMLElement;
  singleBookPage.classList.toggle('hide');
  allBooksPage.classList.toggle('hide');
}

function populateBook(book: Book) {
  const arrow = document.querySelector('.arrow') as HTMLElement;
  arrow.addEventListener('click', toggleShowPages);

  const bookCover = document.querySelector('.single-book__book') as HTMLElement;
  bookCover.style.backgroundColor = book?.color;

  const bookName = document.querySelector('.single-book__name') as HTMLElement;
  const bookAuthor = document.querySelector('.single-book__author') as HTMLElement;
  bookName.textContent = book?.title;
  bookAuthor.textContent = book?.author;

  const bookNameSecondary = document.querySelector('.single-book__name--secondary') as HTMLElement;
  const bookAuthorSecondary = document.querySelector(
    '.single-book__author--secondary'
  ) as HTMLElement;
  bookNameSecondary.textContent = book?.title;
  bookAuthorSecondary.textContent = book?.author;

  const bookPlot = document.querySelector('.single-book__desc') as HTMLElement;
  bookPlot.textContent = book?.plot;

  const pointKeys = [book.audience, book.year, book.pages, book.publisher];
  const points = document.querySelectorAll('.single-book__span-value') as NodeListOf<HTMLElement>;
  points.forEach((point, index) => {
    if (pointKeys[index]) {
      point.textContent = pointKeys[index].toString();
    }
  });
}

export { displayBook };
