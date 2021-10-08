/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import WishlistButton from './index';
import { render, screen, fireEvent } from '../../utils/testUtils';
import actionTypes from '../../redux/actions/actionTypes';
import { toggleWishlist } from '../../redux/actions/actionCreators';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../redux/actions/actionCreators');

describe('Wishlist button component', () => {
  describe('When is added one movie in wishlist store', () => {
    const movieData = {
      original_title: 'hola',
      isFavorite: true,
    };
    describe('And delete from wishlist when button is clicked', () => {
      test('toggleWishlist function is invoked', () => {
        const { getByTestId } = render(<WishlistButton movie={movieData} />);
        const button = getByTestId('wishlist-button');

        toggleWishlist.mockImplementationOnce(() => ({
          type: actionTypes.DELETE_FROM_WISHLIST,
          movieData: {
            original_title: 'hola',
            isFavorite: true,
          },
        }));
        fireEvent.click(button);
        expect(screen.getByText(/wishlist/i)).toBeInTheDocument();
      });
    });
  });
});
