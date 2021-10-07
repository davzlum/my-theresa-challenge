import actionTypes from '../actions/actionTypes';

function movieReducer(movie = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_MOVIE:
      return action.movie;
    default:
      break;
  }
  return movie;
}

export default movieReducer;
