import { IMovieList } from '../../../types/movie';
import StarsRating from '../StarsRating';

const MovieCard = ({ movie, className }: { movie: IMovieList; className?: string }) => (
  <div
    className={`${className} bg-gray-100 rounded-xl overflow-hidden h-40 w-40 md:w-72 md:h-80 text-white relative shadow-2xl group`}
  >
    <div className=" absolute top-0 left-0 h-full w-full z-0">
      <img
        src={movie?.imgUrl}
        className="absolute group-hover:scale-125 duration-300 z-[-1] object-cover w-full h-1/2"
        alt="movie img"
      />
      <div className="bg-gradient-to-t h-full from-black via-black to-transparent" />
    </div>
    <div className="flex flex-col justify-between absolute top-0 left-0 h-full w-full bg-transparent p-4">
      <div className="flex justify-between">
        <StarsRating readyOnly rating={movie?.rating || 0} />
        <p className="font-kanit">{movie?.releaseYear}</p>
      </div>
      <div className="flex flex-col group-hover:pb-2 duration-500">
        <h4 className="font-kanit font-bold">{movie?.title}</h4>
        <p className="truncate text-sm">{movie?.description}</p>
      </div>
    </div>
  </div>
);

export default MovieCard;
