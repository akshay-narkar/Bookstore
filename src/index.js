import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import rootReducer from './Reducers/index';

const initstate = {
  filter: null,
  books: [{
    Id: Math.floor((Math.random() * 1000000)),
    Title: 'Harry Potter & The Prisoners of Askaban',
    Category: 'Kids',
  },
  { Id: Math.floor((Math.random() * 1000000)), Title: 'Shoe Dog', Category: 'Biography' },
  { Id: Math.floor((Math.random() * 1000000)), Title: 'The Great Gatsby', Category: 'Action' }],
};

const store = createStore(rootReducer, { bookupdateReducer: initstate });

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>

      <App />
    </React.StrictMode>

  </Provider>,

  document.getElementById('root'),
);
