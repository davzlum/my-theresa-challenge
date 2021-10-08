import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovie } from '../../redux/actions/actionCreators';
import WishlistButton from '../WishlistButton';
import './style.scss';

const Detail = () => {
  const { movieId, category } = useParams();
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
      <WishlistButton movieData={movieData} style={category} />
    </>
  );
};

export default Detail;
