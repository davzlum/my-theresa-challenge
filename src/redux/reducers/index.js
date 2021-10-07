import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import movieReducer from './movieReducer';
import wishlistReducer from './wishlistReducer';

const rootReducer = combineReducers({
  moviesReducer,
  movieReducer,
  wishlistReducer,
});

export default rootReducer;
