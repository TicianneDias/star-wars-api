import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import ListMovies from './ListMovies';
import { Loading } from './styles';

const Movies = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(<ListMovies />);
    }, 3000);
    setLoad(<Loading />);
  }, []);

  return (
    <div>
      <NavBar />
      {load}
    </div>
  );
};

export default Movies;
