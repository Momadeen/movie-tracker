import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const useLocalStorage = () => {
  const navigate = useNavigate();

  const moviesList = useMemo(() => JSON.parse(localStorage.getItem('movies') || '[]'), []);

  const addMovieToList = useCallback(
    movie => {
      moviesList.push(movie);
      localStorage.setItem('movies', JSON.stringify(moviesList));
      navigate('/');
    },
    [moviesList, navigate]
  );

  const deleteMovie = useCallback(
    async ({ id }: { id?: string }) => {
      const getNewList = moviesList?.filter((movie: { id: string }) => movie?.id !== id);
      await localStorage.setItem('movies', JSON.stringify(getNewList));
      navigate('/');
    },
    [moviesList, navigate]
  );

  const updateMovie = useCallback(
    ({ id, movie }) => {
      const getNewList = moviesList?.filter((movie: { id: string }) => movie?.id !== id);
      getNewList.push(movie);
      localStorage.setItem('movies', JSON.stringify(getNewList));
      window.location.reload();
    },
    [moviesList]
  );

  return { addMovieToList, deleteMovie, updateMovie };
};

export default useLocalStorage;
