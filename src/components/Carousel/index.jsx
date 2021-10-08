import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './style.scss';

const Carousel = ({ categoryMovies, category }) => {
  const baseImgUrl = 'https://image.tmdb.org/t/p/original';
  return (
    <>
      <h2>{category}</h2>
      <div className="carousel-container">
        <figure>
          <ul className="carousel">
            {categoryMovies.map((movie) => (
              <li key={movie.id} className="carousel__item">
                <Link to={`/${category}/${movie.id}`}>
                  <img className="carousel__img" src={`${baseImgUrl}${movie.poster_path}`} alt="" />
                </Link>
              </li>
            ))}
          </ul>
        </figure>
      </div>
    </>
  );
};

Carousel.propTypes = {
  categoryMovies: PropTypes.shape([]).isRequired,
  category: PropTypes.string.isRequired,
};

export default Carousel;
