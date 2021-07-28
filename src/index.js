import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/Presentational/App';
import rootReducer from './Reducers/index';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>

      <App />
    </React.StrictMode>

  </Provider>,

  document.getElementById('root'),
);
