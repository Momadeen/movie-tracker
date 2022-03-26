import { Link } from 'react-router-dom';
import useMovieList from '../../hooks/useMovieList';
import { IMovieList } from '../../types/data';
import Button from '../shared/Button';
import MovieCard from '../shared/MovieCard';

const Home = () => {
  const { moviesList } = useMovieList({});
  return (
    <div className="flex flex-col gap-8 h-full w-full">
      <div className="flex justify-end">
        <Button buttonType="primary">
          <Link to="/create">Create movie</Link>
        </Button>
      </div>
      <div className="flex h-full w-full gap-8 flex-wrap">
        {moviesList?.map((movie: IMovieList) => (
          <Link to={`/${movie?.id}`}>
            <MovieCard key={movie?.title} movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Home;
