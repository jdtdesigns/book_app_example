const storeHeader = document.querySelector('#store-name');
const bookWrapper = document.querySelector('#books');

async function getBooks() {
  const store_id = window.location.pathname.split('/').pop();

  const store = await fetch(`/api/stores/${store_id}?include_books=true`).then(res => res.json());

  storeHeader.innerText = store.name;
  console.log(store);
  store.books.forEach(book => {
    bookWrapper.insertAdjacentHTML('beforeend', `
    <div class="book">
      <h2>${book.title}</h2>
      <p>Written By: ${book.author}</p>
    </div>
    `);
  })
}

getBooks();