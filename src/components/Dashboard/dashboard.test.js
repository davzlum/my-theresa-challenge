/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Dashboard from './index';
import { render, screen } from '../../utils/testUtils';
import { loadMovies } from '../../redux/actions/actionCreators';
import actionTypes from '../../redux/actions/actionTypes';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../redux/actions/actionCreators');

describe('Dashboard component', () => {
  beforeEach(() => {
    loadMovies.mockReturnValue({
      type: actionTypes.LOAD_MOVIES,
      movies: [{
        poster_path: 'mola', isFavorite: false,
      }],
      category: 'popular',
    });
    const initialState = {
      movies: [{
        poster_path: 'mola', isFavorite: false,
      }],
      category: 'popular',
    };
    render(<Dashboard />, { initialState });
  });
  test('Must contain ', async () => {
    expect(screen.getByText(/popular/i)).toBeInTheDocument();
  });
});
