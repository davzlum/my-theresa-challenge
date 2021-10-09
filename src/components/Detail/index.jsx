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
    <main style={{ backgroundImage: `url(${baseImgUrl}${movieData.backdrop_path})` }} className="main">
      <div className={category === 'popular' ? 'detail-container-yellow' : category === 'upcoming' ? 'detail-container-red' : 'detail-container-violet'}>
        <div className="detail-container__top">
          <img className="detail-img" src={`${baseImgUrl}${movieData.poster_path}`} alt="" />
          <div className="info-container">
            <div className="info-container__top">
              <WishlistButton movieData={movieData} style={category} />
              <div className="circle-rate">
                <div className="circle-text">{movieData.vote_average}</div>
              </div>
            </div>
            <h3 className="movie-title">{movieData.original_title}</h3>
            <p className="movie-description">{movieData.overview}</p>
          </div>
        </div>
        <div className="detail-container__bottom">
          <div className="additional-info-container">
            <div className="info-item">
              Duration:
              {' '}
              {movieData.runtime}
            </div>
            <div className="info-item">
              Language:
              {' '}
              {movieData.original_language}
            </div>
            <div className="info-item">
              Release Date:
              {' '}
              {movieData.release_date}
            </div>
            <div className="info-item">
              Budget:
              {' '}
              {movieData.budget}
            </div>
            <div className="info-item">
              Revenue:
              {' '}
              {movieData.revenue}
            </div>
          </div>
          <div className="additional-info-container">
            <div className="info-title">
              Genres:
              {movieData?.genres?.map((genre) => (
                <div className="info-item">
                  -
                  {' '}
                  {genre?.name}
                </div>
              ))}
            </div>
          </div>
          <div className="additional-info-container">
            <div className="info-title">
              Production:
              {movieData.production_companies?.length
                ? movieData.production_companies.map((company) => (
                  <div className="info-item">
                    <p>
                      -
                      {' '}
                      {company?.name}
                      {' '}
                      {company?.origin_country}
                    </p>
                  </div>
                )) : ''}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Detail;
