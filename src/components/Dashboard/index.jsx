import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadMovies from '../../redux/actions/actionCreators';

const Dashboard = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.moviesReducer);
  const categories = ['upcoming', 'top_rated', 'popular'];
  useEffect(() => {
    categories.forEach((categorie) => dispatch(loadMovies(categorie)));
  }, []);
  console.log(movies);
  return (
    <h1>Dashboard</h1>
  );
};

export default Dashboard;
