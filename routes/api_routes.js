const router = require('express').Router();
const { Book, Store } = require('../models');

// Route to GET one book
router.get('/books/:book_id', async (req, res) => {
  const book_id = req.params.book_id;

  const book = await Book.findByPk(book_id);

  if (book) {
    res.send(book);
  } else res.send('No books found with that id.');
});

// Route to GET all books
// GET http://localhost:3000/api/books
router.get('/books', async (req, res) => {
  const books = await Book.findAll();

  res.send(books);
});

// Route to CREATE a book
// POST http://localhost:3000/api/books
router.post('/books', async (req, res) => {
  const bookData = req.body;

  const newBook = await Book.create(bookData);

  res.send(newBook);
});

// Route to GET one store
router.get('/stores/:store_id', async (req, res) => {
  const store_id = req.params.store_id;
  const include_books = req.query.include_books;

  if (include_books) {
    const store = await Store.findOne({
      include: Book,
      where: {
        id: store_id
      }
    });

    return res.send(store);
  }

  const store = await Store.findByPk(store_id);

  if (store) {
    res.send(store);
  } else res.send('No stores found by that id.');
});

// Route to GET all stores
router.get('/stores', async (req, res) => {
  const stores = await Store.findAll();

  res.send(stores);
});

// Route to Add book to a store
router.post('/stores/add/:store_id', async (req, res) => {
  const store_id = req.params.store_id;
  const book_id = req.query.book_id;

  const store = await Store.findByPk(store_id);
  const book = await Book.findByPk(book_id);

  await store.addBook(book);

  res.send('Book added successfully!');
});

// Route to CREATE a store
router.post('/stores', async (req, res) => {
  const storeData = req.body;

  const newStore = await Store.create(storeData);

  res.send(newStore);
});

module.exports = router;