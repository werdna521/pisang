import { createStore, combineReducers } from 'redux';
import homeReducer from './reducers/home.reducer';
import sessionReducer from './reducers/session.reducer';
import automationReducer from './reducers/automation.reducer';

const reducers = combineReducers({
  home: homeReducer,
  session: sessionReducer,
  automation: automationReducer,
});

const store = createStore(reducers);

export default store;
