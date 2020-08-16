import { combineReducers } from 'redux';
import countReducer from './counterReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['count'],
};

const rootReducer = combineReducers({
  count: countReducer,
});

export default persistReducer(persistConfig, rootReducer);
