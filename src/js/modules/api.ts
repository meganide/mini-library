const API_URL = 'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books';

async function httpGetBooks() {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data;
}

export { httpGetBooks };
