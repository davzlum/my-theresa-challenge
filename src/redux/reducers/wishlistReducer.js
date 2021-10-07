import actionTypes from '../actions/actionTypes';

function moviesReducer(wishlist = [], action) {
  switch (action.type) {
    case actionTypes.ADD_TO_WISHLIST:
      return [
        ...wishlist,
        action.movieData,
      ];
    case actionTypes.DELETE_FROM_WISHLIST:
      return wishlist.filter((favoriteItem) => favoriteItem.id !== action.movieData.id);
    default:
      break;
  }
  return wishlist;
}

export default moviesReducer;
