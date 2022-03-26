import { useMemo } from 'react';

type Props = {
  id?: string;
};

const useMovieList = ({ id }: Props) => {
  const moviesList = useMemo(
    () =>
      JSON.parse(localStorage.getItem('movies') || '[]').sort(
        (x: { createdAt: number; }, y: { createdAt: number; }) => y?.createdAt - x?.createdAt
      ),
    []
  );

  const getMovieByID = useMemo(
    () => moviesList?.find((movie: Props) => movie?.id === id),
    [id, moviesList]
  );


  return { getMovieByID, moviesList };
};

export default useMovieList;
