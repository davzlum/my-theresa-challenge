import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { movieId } = useParams();
  console.log(movieId);
  return (
    <h1>Detail</h1>

  );
};

export default Detail;
