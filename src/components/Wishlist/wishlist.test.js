/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Wishlist from './index';
import { render, screen } from '../../utils/testUtils';
import '@testing-library/jest-dom/extend-expect';

describe('Wishlist component', () => {
  beforeEach(() => {
    const initialState = {
      wishlist: [{ original_title: 'hola lola' }],
    };
    render(<Wishlist />, { initialState });
  });
  test('Must contain ', () => {
    expect(screen.getByText(/hola/i)).toBeInTheDocument();
  });
  test('Must contain ', () => {
    expect(screen.getByText(/movies/i)).toBeInTheDocument();
  });
});
