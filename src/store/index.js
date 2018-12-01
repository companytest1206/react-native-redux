import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer/index';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';

  const config = {
      key: 'root',
      storage: AsyncStorage
  }

  const persistedReducer = persistReducer(config, reducer);

  const composeEnhancers = composeWithDevTools({ 
      realtime: false,
      port: 8000
  });

  export const store = createStore(
    persistedReducer,
      composeEnhancers(
        applyMiddleware(logger,thunk),
      ));
  
  
  export const pStore = persistStore(store);

// const zupu = createStore(
//   reducer,
//   composeEnhancers(
//     applyMiddleware(logger,thunk),
//   ));

//   import { createStore } from 'redux'

// const persistConfig = {
//   key: 'root',
//   storage,
// }
 
// const persistedReducer = persistReducer(persistConfig, reducer);
 

//   export let store = createStore(persistedReducer,
//                             composeEnhancers(
//                                 applyMiddleware(logger,thunk),
//                             ));
//   export let persistor = persistStore(store)
