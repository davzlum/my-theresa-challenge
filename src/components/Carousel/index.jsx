import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './style.scss';

const Carousel = ({ categoryMovies, category }) => {
  const baseImgUrl = 'https://image.tmdb.org/t/p/original';
  return (
    <div className="carousel">
      <h2 className="carousel__title">{`${category} movies`}</h2>
      <div className="carousel__container">
        <ul className="container-list">
          {categoryMovies.map((movie) => (
            <li key={movie.id} className="container-item">
              <Link to={`/${category}/${movie.id}`}>
                <img className="item-img" src={`${baseImgUrl}${movie.poster_path}`} alt={movie.original_title} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  categoryMovies: PropTypes.shape([{
    id: PropTypes.number.isRequired,
    original_title: PropTypes.string.isRequired,
  }]).isRequired,
  category: PropTypes.string.isRequired,
};

export default Carousel;
