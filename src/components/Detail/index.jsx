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
    <main className="main">
      <h2 className="section-title">{`${category} movies`}</h2>
      <div className={category === 'popular' ? 'detail-container-yellow' : category === 'upcoming' ? 'detail-container-red' : 'detail-container-violet'}>
        <div className="detail-container__top">
          <img className="detail-img" src={`${baseImgUrl}${movieData.poster_path}`} alt="" />
          <div className="info-container">
            <WishlistButton movieData={movieData} style={category} />
            <h3 className="movie-title">{movieData.original_title}</h3>
            <p className="movie-description">{movieData.overview}</p>
          </div>
        </div>
        <div className="detail-container__bottom">
          <h4>Additional information</h4>
        </div>
      </div>
    </main>
  );
};

export default Detail;
