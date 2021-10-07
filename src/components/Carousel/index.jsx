import React from 'react';
import { PropTypes } from 'prop-types';

const Carousel = ({ categoryMovies, category }) => {
  console.log(categoryMovies);
  const baseImgUrl = 'https://image.tmdb.org/t/p/original';
  return (
    <>
      <h2>{category}</h2>
      <div className="carousel-container">
        <button type="button" className="carousel-previous">prev</button>
        <figure className="carousel">
          <ul>
            {categoryMovies.map((movie) => <li><img className="slider__image" key={movie.id} src={`${baseImgUrl}${movie.backdrop_path}`} alt="" /></li>)}
          </ul>
        </figure>
        <button type="button" className="carousel-advance">Next</button>
      </div>
    </>
  );
};

Carousel.propTypes = {
  categoryMovies: PropTypes.shape([]).isRequired,
  category: PropTypes.string.isRequired,
};

export default Carousel;
