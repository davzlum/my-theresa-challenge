import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovie } from '../../redux/actions/actionCreators';
import favoriteEmpty from '../../assets/heart-regular.svg';
import favoriteSolid from '../../assets/heart-solid.svg';

const Detail = () => {
  const { movieId, category } = useParams();
  const dispatch = useDispatch();
  let movieData = useSelector((store) => store.movieReducer);
  const baseImgUrl = 'https://image.tmdb.org/t/p/original';

  movieData = {
    ...movieData,
    isFavorite: wishlist[category]?.some((fav) => fav.id === movieData.id),
  };

  useEffect(() => {
    dispatch(loadMovie(movieId));
  }, []);
  return (
    <>
      <h1>{movieData.original_title}</h1>
      <p>{movieData.overview}</p>
      <img className="carousel__img" src={`${baseImgUrl}${movieData.poster_path}`} alt="" />
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
    </>
  );
};

export default Detail;
