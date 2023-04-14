const storesWrapper = document.querySelector('.stores');

async function getStores() {
  const stores = await fetch('/api/stores').then(res => res.json());

  stores.forEach(store => {
    storesWrapper.insertAdjacentHTML('beforeend', `
      <div class="store">
        <h2>${store.name}</h2>
        <p>${store.location}</p>
        <a href="/store/${store.id}">View Books</a>
      </div>
    `);
  })
}

function init() {
  getStores();
}

// Load the front end view
init();