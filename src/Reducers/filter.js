import { CHANGE_FILTER } from '../Actions';

const filterReducer = (state = [], action) => {
  let statenew = { ...state };
  switch (action.type) {
    case CHANGE_FILTER:
      statenew = { ...statenew, filter: action.category };
      return statenew;
    default:
      return state;
  }
};

export default filterReducer;
