import { useMemo } from 'react';

type Props = {
  id?: string;
};

const useMovieList = ({ id }: Props) => {
  const moviesList = useMemo(() => JSON.parse(localStorage.getItem('movies') || '[]'), []);

  const getMovieByID = useMemo(
    () => moviesList?.find((movie: Props) => movie?.id === id),
    [id, moviesList]
  );


  return { getMovieByID, moviesList };
};

export default useMovieList;
