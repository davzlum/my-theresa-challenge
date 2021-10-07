import actionTypes from '../actions/actionTypes';

const initialState = {
  popular: [],
  upcoming: [],
  top_rated: [],
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_MOVIES:
      return { ...state, [action.category]: action.movies };
    default:
      break;
  }
  return state;
}

export default moviesReducer;
