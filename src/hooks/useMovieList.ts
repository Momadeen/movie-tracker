import { useMemo } from 'react';

const useMovieList = () => {
  const moviesList = useMemo(
    () => JSON.parse(localStorage.getItem('movies') || '[]'),
    []
  );

  return moviesList;
};

export default useMovieList;
