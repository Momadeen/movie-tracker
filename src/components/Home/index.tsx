import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useMovieList from '../../hooks/useMovieList';
import { IMovieList } from '../../types/data';
import MovieCard from '../shared/MovieCard';
import { movies } from 'constants/movies';

import Hero from './Hero';

const Home = () => {
  const { moviesList } = useMovieList({});

  // add 3 movies as default if there's no movies

  useEffect(() => {
    if (moviesList?.length) return;
    localStorage.setItem('movies', JSON.stringify(movies));
    window.location.reload();
  }, [moviesList?.length]);
  return (
    <div className="flex flex-col gap-8 h-full w-full">
      <Hero movie={moviesList[0]} />

      <div className="flex h-full w-full px-4 md:px-0 gap-8 flex-wrap container mx-auto">
        {moviesList?.slice(1)?.map((movie: IMovieList) => (
          <Link to={`/${movie?.id}`}>
            <MovieCard key={movie?.title} movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Home;
