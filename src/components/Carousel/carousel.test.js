/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Carousel from './index';
import { render, screen } from '../../utils/testUtils';
import '@testing-library/jest-dom/extend-expect';

describe('Carousel component', () => {
  const movies = [{
    original_title: 'hola',
  }];
  render(<Carousel categoryMovies={movies} category="popular" />);
  test('Must contain ', () => {
    expect(screen.getByAltText(/hola/i)).toBeInTheDocument();
  });
});
