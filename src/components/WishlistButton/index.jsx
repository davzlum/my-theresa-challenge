import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { toggleFavorite } from '../../redux/actions/actionCreators';
import favoriteEmpty from '../../assets/heart-regular.svg';
import favoriteSolid from '../../assets/heart-solid.svg';
import './style.scss';

function WishlistButton({ movieData }) {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className="favorite-button"
      onClick={() => {
        dispatch(toggleFavorite(movieData));
      }}
    >
      <img
        src={movieData.isFavorite
          ? favoriteSolid : favoriteEmpty}
        alt="favorite"
      />
    </button>
  );
}

WishlistButton.propTypes = {
  movieData: PropTypes.shape({
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
};

export default WishlistButton;
