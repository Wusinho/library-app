import store from '../reducers/store';
import * as actions from './book';

store.dispatch(actions.CREATE_BOOK('book1'));
