import { CREATE_BOOK, REMOVE_BOOK } from '../Actions';

const initstate = { books: [{ Id: Math.random(), Title: 'Harry Potter & The Prisoners of Askaban', Category: 'Kids' }, { Id: Math.random(), Title: 'Shoe Dog', Category: 'Biography' }, { Id: Math.random(), Title: 'The Great Gatsby', Category: 'Action' }] };

const bookupdateReducer = (state = initstate, action) => {
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
