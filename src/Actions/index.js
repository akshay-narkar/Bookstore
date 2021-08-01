const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';


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

const changeFilter = (category) => ({
  type: CHANGE_FILTER,
  category,
});


export {
  CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER, createBook, removeBook, changeFilter,
};
