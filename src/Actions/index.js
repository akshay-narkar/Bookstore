const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

function createBook(book) {
  return ({
    type: CREATE_BOOK,
    book,
  });
}
const removeBook = (index) => ({
  type: REMOVE_BOOK,
  index,
});

export {
  CREATE_BOOK, REMOVE_BOOK, createBook, removeBook,
};
