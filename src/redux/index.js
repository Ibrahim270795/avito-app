import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import imagesReducer from './images';
import modalReducer from './modal';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  images: imagesReducer,
  modal: modalReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
