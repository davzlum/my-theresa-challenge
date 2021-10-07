import React from 'react';
import { useSelector } from 'react-redux';

function Wishlist() {
  const wishlist = useSelector((store) => store.wishlistReducer);
  const baseImgUrl = 'https://image.tmdb.org/t/p/original';

  return (
    <>
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
