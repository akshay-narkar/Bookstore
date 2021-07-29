import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import rootReducer from './Reducers/books';

const initstate = {
  books: [{
    Id: Math.random(),
    Title: 'Harry Potter & The Prisoners of Askaban',
    Category: 'Kids',
  },
  { Id: Math.random(), Title: 'Shoe Dog', Category: 'Biography' },
  { Id: Math.random(), Title: 'The Great Gatsby', Category: 'Action' }],
};

const store = createStore(rootReducer, initstate);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>

      <App />
    </React.StrictMode>

  </Provider>,

  document.getElementById('root'),
);
