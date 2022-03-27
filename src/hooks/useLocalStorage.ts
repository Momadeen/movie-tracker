import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const useLocalStorage = () => {
  let navigate = useNavigate();
  const moviesList: any = useMemo(() => JSON.parse(localStorage.getItem('movies') || '[]'), []);

  const addMovieToList = useCallback(
    movie => {
      moviesList.push(movie);
      localStorage.setItem('movies', JSON.stringify(moviesList));
    },
    [moviesList]
  );

  const deleteMovieInList = useCallback(
    ({ id }: { id?: string }) => {
      const getNewList = moviesList?.filter((movie: { id: string }) => movie?.id !== id);
      localStorage.setItem('movies', JSON.stringify(getNewList));
      navigate('/');
    },
    [moviesList, navigate]
  );

  const updateMovie = useCallback(
    ({ id, movie }) => {
      const getNewList = moviesList?.filter((movie: { id: string }) => movie?.id !== id);
      getNewList.push(movie);
      localStorage.setItem('movies', JSON.stringify(getNewList));
    },
    [moviesList]
  );

  return { addMovieToList, deleteMovieInList, updateMovie };
};

export default useLocalStorage;
