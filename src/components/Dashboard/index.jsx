import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from '../../redux/actions/actionCreators';
import Carousel from '../Carousel';

const Dashboard = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.moviesReducer);

  const categories = ['upcoming', 'top_rated', 'popular'];

  useEffect(() => {
    categories.forEach((category) => dispatch(loadMovies(category)));
  }, []);

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
