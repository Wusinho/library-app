import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import './style/App.css';
import reducer from './reducers/reducer';
import * as actions from './actions/book';

const store = createStore(reducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch((actions.bookAdded('Anna Karenina', 'Learning')));
store.dispatch((actions.bookAdded('Lolita', 'Action')));
store.dispatch((actions.bookAdded('The Great Gatsby', 'Horror')));
store.dispatch((actions.bookAdded('Middlemarch', 'Sci-Fi')));
store.dispatch((actions.bookAdded('The Adventures of Huckleberry Finn', 'Kids')));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
