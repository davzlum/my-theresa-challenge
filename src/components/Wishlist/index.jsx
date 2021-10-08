import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WishlistButton from '../WishlistButton';
import './style.scss';

function Wishlist() {
  let wishlist = useSelector((store) => store.wishlistReducer);
  const baseImgUrl = 'https://image.tmdb.org/t/p/original';

  wishlist = wishlist.map((movie) => ({ ...movie, isFavorite: true }));

  return (
    <>
      <ul>
        {wishlist.length
          ? wishlist.map((movie) => (
            <li>
              <Link to={`/movie/${movie.id}`}>
                <img className="wishlist__img" src={`${baseImgUrl}${movie.poster_path}`} alt="" />
              </Link>
              <p>{movie.original_title}</p>
              <WishlistButton movieData={movie} />
            </li>
          ))
          : 'There are not movies in your wishlist'}
      </ul>
    </>
  );
}

export default Wishlist;
