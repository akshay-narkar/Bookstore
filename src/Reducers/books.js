import { CREATE_BOOK, REMOVE_BOOK } from '../Actions';

const bookupdateReducer = (state = [], action) => {
  const statenew = { ...state };
  switch (action.type) {
    case CREATE_BOOK:
      statenew.books = [...statenew.books, action.book];
      return statenew;
    case REMOVE_BOOK:
      statenew.books = [...statenew.books.slice(0, action.index),
        ...statenew.books.slice(+action.index + 1, state.books.length)];
      return statenew;
    default:
      return state;
  }
};

export default bookupdateReducer;
