import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import * as actions from './actions/book';
import store from './reducers/index';
import './style/App.css';

store.dispatch(actions.bookAdded('book 1', 'description of book 1', 'Horror'));
store.dispatch(actions.bookAdded('book 2', 'description of book 2', 'Action'));
store.dispatch(actions.bookAdded('book 3', 'description of book 3', 'Kids'));
store.dispatch(actions.bookAdded('book 3', 'description of book 3', 'Kids'));
// store.dispatch(actions.bookRemoved('e07277'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
