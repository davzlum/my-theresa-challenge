import axios from 'axios';
import actionTypes from './actionTypes';
import {
  loadMovies,
  loadMovie,
  toggleWishlist,
} from './actionCreators';

jest.mock('axios');

describe('loadMovies function', () => {
  test('should dispatch LOAD_MOVIES', async () => {
    const dispatch = jest.fn();
    const category = 'Popular';
    const data = { results: [{ movie: 'Star Wars' }] };
    axios.mockResolvedValue({ data });
    await loadMovies(category)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_MOVIES,
      movies: [{ movie: 'Star Wars' }],
      category: 'Popular',
    });
  });
  test('should dispatch LOAD_MOVIES_ERROR', async () => {
    axios.mockRejectedValue();
    const dispatch = jest.fn();

    await loadMovies()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_MOVIES_ERROR,
    });
  });
});

describe('loadMovie function', () => {
  test('should dispatch LOAD_MOVIE', async () => {
    const dispatch = jest.fn();
    const movieId = '1234';
    const data = { movie: 'Star Wars' };
    axios.mockResolvedValue({ data });
    await loadMovie(movieId)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_MOVIE,
      movie: { movie: 'Star Wars' },
    });
  });
  test('should dispatch LOAD_MOVIE_ERROR', async () => {
    axios.mockRejectedValue();
    const dispatch = jest.fn();

    await loadMovie()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_MOVIE_ERROR,
    });
  });
});

describe('toggleWishlist function', () => {
  test('should dispatch DELETE_FROM_WISHLIST', () => {
    const result = toggleWishlist({
      isFavorite: true, movie: 'Star Wars',
    });
    expect(result).toEqual({
      type: actionTypes.DELETE_FROM_WISHLIST,
      movieData: { isFavorite: true, movie: 'Star Wars' },
    });
  });

  test('should dispatch ADD_TO_WISHLIST', () => {
    const result = toggleWishlist({
      isFavorite: false, movie: 'Star Wars',
    });
    expect(result).toEqual({
      type: actionTypes.ADD_TO_WISHLIST,
      movieData: { isFavorite: false, movie: 'Star Wars' },
    });
  });
});
