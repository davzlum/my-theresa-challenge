import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
  moviesReducer,
  movieReducer,
});

export default rootReducer;
