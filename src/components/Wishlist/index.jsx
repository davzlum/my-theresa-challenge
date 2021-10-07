import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Wishlist() {
  const wishlist = useSelector((store) => store.wishlistReducer);
  const baseImgUrl = 'https://image.tmdb.org/t/p/original';

  return (
    <>
      <button type="button"><Link to="/">Go to collection</Link></button>
      <ul>
        {wishlist.length
          ? wishlist.map((movie) => (
            <li>
              <img className="wishlist__img" src={`${baseImgUrl}${movie.poster_path}`} alt="" />
            </li>
          ))
          : ''}
      </ul>
    </>
  );
}

export default Wishlist;
