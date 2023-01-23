import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { applyMiddleware, createStore, compose } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

//custom imports below
import reducers from '../reducer';

const enhancers = [
  applyMiddleware(
    thunkMiddleware,
    createLogger({
      collapsed: true,
      // predicate: () => _DEV_,
    }),
  ),
];

const enhancer = compose(...enhancers);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ["userDetail"],
};

const persistedReducer = persistReducer(persistConfig, reducers);
//@ts-ignore
export const store = createStore(persistedReducer, {}, enhancer);
export const persistor = persistStore(store);