import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovie, toggleFavorite } from '../../redux/actions/actionCreators';
import favoriteEmpty from '../../assets/heart-regular.svg';
import favoriteSolid from '../../assets/heart-solid.svg';
import './style.scss';

const Detail = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  let movieData = useSelector((store) => store.movieReducer);
  const wishlist = useSelector((store) => store.wishlistReducer);
  const baseImgUrl = 'https://image.tmdb.org/t/p/original';
  movieData = {
    ...movieData,
    isFavorite: wishlist.some((fav) => fav.id === movieData.id),
  };

  useEffect(() => {
    dispatch(loadMovie(movieId));
  }, []);
  return (
    <>
      <h1>{movieData.original_title}</h1>
      <p>{movieData.overview}</p>
      <img className="detail__img" src={`${baseImgUrl}${movieData.poster_path}`} alt="" />
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
      <button type="button"><Link to="/">Go to collection</Link></button>
    </>
  );
};

export default Detail;
