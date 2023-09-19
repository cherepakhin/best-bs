import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

// import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import appReducer from '../reducers/appReducer';
import modalReducer from '../reducers/modalReducer';
import { saleReducer } from '../reducers/saleReducer';
import docReducer from '../reducers/docReducer';
import docsReducer from '../reducers/docsReducer';
import paymentsReducer from '../reducers/paymentsReducer';

const configureStore = function (initialState) {
  // const logger = createLogger();
  let rootReducer = combineReducers({
    app: appReducer,
    modal: modalReducer,
    sale: saleReducer,
    doc: docReducer,
    docs: docsReducer,
    payments: paymentsReducer
  });
  let store = {};
  /*  if (process.env.NODE_ENV !== 'production') {
      store = createStore(
        rootReducer,
        initialState,
        compose(
          applyMiddleware(thunk, logger),
          window.devToolsExtension ? window.devToolsExtension() : f => f)
      );
      if (module.hot) {
        module.hot.accept('../reducers/appReducer', () => {
          const nextRootReducer = require('../reducers/appReducer').rootReducer;
          store.replaceReducer(nextRootReducer);
        });
      }
    } else {
  */    store = createStore(
      rootReducer,
      initialState,
      compose(applyMiddleware(thunk))
    );
  /*  }*/

  return store;
};

export default configureStore;
