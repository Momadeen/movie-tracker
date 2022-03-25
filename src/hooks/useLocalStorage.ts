import { useCallback } from 'react';

const useLocalStorage = () => {
  const addMovieToList = useCallback(movie => {
    const moviesList: any = JSON.parse(localStorage.getItem('movies') || '[]');
    moviesList.push(movie);
    localStorage.setItem('movies', JSON.stringify(moviesList));
  }, []);

  return { addMovieToList };
};

export default useLocalStorage;
