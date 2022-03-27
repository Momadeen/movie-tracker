import AddReview from 'components/shared/AddReview';
import BackButton from 'components/shared/BackButton';
import StarsRating from 'components/shared/StarsRating';
import useMovieList from 'hooks/useMovieList';
import { useParams } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import { ImSpinner3 } from 'react-icons/im';
import Reviews from './Reviews';
import { useCallback, useState } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';

const MovieDetails = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { getMovieByID: movie } = useMovieList({ id });
  const { deleteMovie } = useLocalStorage();

  const onClickDelete = useCallback(() => {
    setLoading(true);
    deleteMovie({ id });
  }, [deleteMovie, id]);
  return (
    <div className="flex flex-col gap-8 mt-12 container mx-auto px-4">
      <BackButton href="/" />
      <div className="flex flex-row gap-6">
        <div className="w-1/2 min-w-[300px] h-96">
          <img className="h-full w-full object-cover" src={movie?.imgUrl} alt="movie img" />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-kanit font-bold text-white text-4xl">{movie?.title}</h2>
          <div className="flex gap-4 items-center">
            <h4 className="font-kanit font-light text-gray-400 text-sm">Rating:</h4>
            <StarsRating readyOnly rating={movie?.rating} />
          </div>
          <div className="flex gap-4">
            <h4 className="font-kanit font-light text-gray-400 text-sm">Release Year:</h4>
            <h4 className="font-kanit font-bold text-white text-sm">{movie?.releaseYear}</h4>
          </div>
          <p className="w-1/2 text-gray-300">{movie?.description}</p>
        </div>
      </div>
      {loading ? (
        <ImSpinner3 className="animate-spin fill-white" />
      ) : (
        <div
          className="text-red-500 hover:text-red-600 cursor-pointer flex items-center gap-2"
          onClick={onClickDelete}
        >
          <p>This Delete Movie</p>
          <AiFillDelete />
        </div>
      )}

      {movie?.review?.length && <Reviews reviews={movie?.review} />}
      <AddReview id={id} movie={movie} />
    </div>
  );
};

export default MovieDetails;
