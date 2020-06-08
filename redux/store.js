import { createStore, combineReducers } from 'redux';
import homeReducer from './reducers/home.reducer';
import sessionReducer from './reducers/session.reducer';

const reducers = combineReducers({
  home: homeReducer,
  session: sessionReducer,
});

const store = createStore(reducers);

export default store;
