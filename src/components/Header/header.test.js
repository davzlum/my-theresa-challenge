/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '../../utils/testUtils';
import Header from './index';
import '@testing-library/jest-dom/extend-expect';

describe('Header Component', () => {
  test('should contain button go to wishlist', () => {
    render(<Header />);
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument();
  });
});
