/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Detail from './index';
import { render, screen } from '../../utils/testUtils';
import { loadMovie } from '../../redux/actions/actionCreators';
import actionTypes from '../../redux/actions/actionTypes';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../redux/actions/actionCreators');
const initialState = {
  movieData: {
    movieId: 1, isFavorite: false, original_title: 'dune',
  },
};

describe('Detail component', () => {
  beforeEach(() => {
    loadMovie.mockReturnValue({
      type: actionTypes.LOAD_MOVIE,
      movie: {
        movieId: 1, isFavorite: false, original_title: 'dune',
      },
    });
    render(<Detail />, { initialState });
  });
  test('Must contain ', async () => {
    expect(screen.getByText(/dune/i)).toBeInTheDocument();
  });
});
