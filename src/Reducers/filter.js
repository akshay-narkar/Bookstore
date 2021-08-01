// import { CHANGE_FILTER } from '../Actions';

const filterReducer = (state = null, action) => {
  const statenew = state;
  switch (action.category) {
    case 'All':
    //   statenew.books = [...statenew.books, action.book];
      return statenew;
    // case REMOVE_BOOK:
    //   statenew.books = [...statenew.books.slice(0, action.index),
    //     ...statenew.books.slice(action.index + 1, state.length)];
    //   return statenew;
    default:
      return state;
  }
};

export default filterReducer;
