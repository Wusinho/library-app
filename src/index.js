import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
// import * as actions from './actions/book';
// import store from './reducers/index';
import './style/App.css';

// import configureStoreApp from './reducers/configureStore';

// const store = configureStoreApp();

// store.dispatch(actions.bookAdded('1', 'book 1', 'description of book 1', 'Horror'));
// store.dispatch(actions.bookAdded('2', 'book 2', 'description of book 2', 'Action'));
// store.dispatch(actions.bookAdded('3', 'book 3', 'description of book 3', 'Kids'));
// store.dispatch(actions.bookRemoved('1'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
