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
    <main className="main">
      <ul className="wishlist-container">
        {wishlist.length
          ? wishlist.map((movie) => (
            <li className="wishlist-item">
              <Link to={`/movie/${movie.id}`}>
                <img className="wishlist-img" src={`${baseImgUrl}${movie.poster_path}`} alt="" />
              </Link>
              <WishlistButton movieData={movie} />
            </li>
          ))
          : 'There are not movies in your wishlist'}
      </ul>
    </main>
  );
}

export default Wishlist;
