import AddReview from 'components/shared/AddReview';
import BackButton from 'components/shared/BackButton';
import StarsRating from 'components/shared/StarsRating';
import useMovieList from 'hooks/useMovieList';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const { getMovieByID: movie } = useMovieList({ id });
  return (
    <div className='flex flex-col gap-8 mt-12 container mx-auto px-4 md:px-0'>
      <div className="flex flex-col gap-8">
        <BackButton href="/" />
        <h2 className="font-kanit font-bold text-white text-4xl">{movie?.title}</h2>
        <div className='w-1/2 h-96'>
          <img className='h-full w-full object-cover' src={movie?.imgUrl} alt="movie img" />
        </div>
        <p className="w-1/2 text-gray-200">{movie?.description}</p>

        <div className="flex gap-4 items-center">
          <h4 className="font-kanit font-light text-white text-lg">Rating:</h4>
          <StarsRating readyOnly rating={movie?.rating} />
        </div>
        <div className="flex gap-4">
          <h4 className="font-kanit font-light text-white text-lg">Release Year:</h4>
          <h4 className="font-kanit font-bold text-white text-lg">{movie?.releaseYear}</h4>
        </div>
      </div>
      <AddReview />
    </div>
  );
};

export default MovieDetails;
