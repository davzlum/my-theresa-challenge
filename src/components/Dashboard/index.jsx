import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from '../../redux/actions/actionCreators';
import Carousel from '../Carousel';
import './style.scss';

const Dashboard = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.moviesReducer);

  const categories = ['upcoming', 'top_rated', 'popular'];

  useEffect(() => {
    categories.forEach((category) => dispatch(loadMovies(category)));
  }, []);

  return (
    <main className="main">
      <Carousel categoryMovies={movies.popular} category="popular" />
      <Carousel categoryMovies={movies.upcoming} category="upcoming" />
      <Carousel categoryMovies={movies.top_rated} category="top_rated" />
    </main>
  );
};

export default Dashboard;
