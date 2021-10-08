import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { toggleFavorite } from '../../redux/actions/actionCreators';
import './style.scss';

function WishlistButton({ movieData, style }) {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className={style === 'popular' ? 'button-popular' : style === 'upcoming' ? 'button-upcoming' : 'button-top-rated'}
      onClick={() => {
        dispatch(toggleFavorite(movieData));
      }}
    >
      {movieData.isFavorite ? '- Remove from wishlist' : '+ Add to wishlist'}

    </button>
  );
}

WishlistButton.propTypes = {
  movieData: PropTypes.shape({
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
  style: PropTypes.string.isRequired,
};

export default WishlistButton;
