import React from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';

const Carousel = ({ categoryMovies, category }) => {
  console.log(categoryMovies);
  const baseImgUrl = 'https://image.tmdb.org/t/p/original';
  return (
    <>
      <h2>{category}</h2>
      <div className="carousel-container">
        <figure>
          <ul className="carousel">
            {categoryMovies.map((movie) => (
              <li className="carousel__item">
                <img className="carousel__img" key={movie.id} src={`${baseImgUrl}${movie.poster_path}`} alt="" />
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
