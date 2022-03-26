import { useCallback, useMemo } from 'react';

const useLocalStorage = () => {
  const moviesList: any = useMemo(() => JSON.parse(localStorage.getItem('movies') || '[]'), []);

  const addMovieToList = useCallback(
    movie => {
      moviesList.push(movie);
      localStorage.setItem('movies', JSON.stringify(moviesList));
    },
    [moviesList]
  );

  // const updateMovieInList
  // const deleteMovieFromList

  return { addMovieToList };
};

export default useLocalStorage;
