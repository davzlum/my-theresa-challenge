import axios from 'axios';
import actionTypes from './actionTypes';

const API_KEY = '676fcc92f08e6b8bd969d6b857cce0c4';

export default function loadMovies(category) {
  return async (dispatch) => {
    try {
      const { data } = await axios(`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`);
      dispatch({
        type: actionTypes.LOAD_MOVIES,
        movies: data,
        category,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_MOVIES_ERROR,
      });
    }
  };
}
