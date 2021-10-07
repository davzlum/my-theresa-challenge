import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovie } from '../../redux/actions/actionCreators';

const Detail = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const movieData = useSelector((store) => store.movieReducer);
  const baseImgUrl = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    dispatch(loadMovie(movieId));
  }, []);
  return (
    <>
      <h1>{movieData.original_title}</h1>
      <p>{movieData.overview}</p>
      <img className="carousel__img" src={`${baseImgUrl}${movieData.poster_path}`} alt="" />
    </>
  );
};

export default Detail;
