import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from '../../redux/actions/actionCreators';
import Carousel from '../Carousel';

const Dashboard = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.moviesReducer);
  const wishlist = useSelector((store) => store.wishlistReducer);
  const categories = ['upcoming', 'top_rated', 'popular'];

  useEffect(() => {
    categories.forEach((category) => dispatch(loadMovies(category)));
  }, []);

  let newMovies = [];
  categories.forEach((category) => {
    newMovies = {
      ...newMovies,
      [category]: movies[category]?.map((movie) => ({
        ...movie,
        isFavorite: wishlist.length ? wishlist.some((fav) => fav.id === movie.id) : false,
      })),
    };
  });

  return (
    <>
      <h1>Dashboard</h1>
      <Carousel categoryMovies={movies.popular} category="popular" />
      <Carousel categoryMovies={movies.upcoming} category="upcoming" />
      <Carousel categoryMovies={movies.top_rated} category="top_rated" />
    </>
  );
};

export default Dashboard;
