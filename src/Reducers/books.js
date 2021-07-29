import { CREATE_BOOK, REMOVE_BOOK } from '../Actions';

const bookupdateReducer = (state = [], action) => {
  let statenew;
  switch (action.type) {
    case CREATE_BOOK:
      statenew = state.push(action.book);
      return statenew;
    case REMOVE_BOOK:
      statenew = [...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length)];
      return statenew;
    default:
      return state;
  }
};

export default bookupdateReducer;
