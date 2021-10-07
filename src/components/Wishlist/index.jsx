import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WishlistButton from '../WishlistButton';

function Wishlist() {
  const wishlist = useSelector((store) => store.wishlistReducer);
  const baseImgUrl = 'https://image.tmdb.org/t/p/original';

  return (
    <>
      <ul>
        {wishlist.length
          ? wishlist.map((movie) => (
            <li>
              <Link to={`/movie/${movie.id}`}>
                <img className="wishlist__img" src={`${baseImgUrl}${movie.poster_path}`} alt="" />
              </Link>
              <WishlistButton movieData={movie} />
            </li>
          ))
          : ''}
      </ul>
    </>
  );
}

export default Wishlist;
