import Button from 'components/shared/Button';
import StarsRating from 'components/shared/StarsRating';
import { Link } from 'react-router-dom';
import { IMovieList } from 'types/data';

const Hero = ({ movie }: { movie: IMovieList }) => (
  <div className="bg-gray-100 rounded-xl w-full min-h-[500px] text-white relative shadow-2xl group">
    <div className=" absolute top-0 left-0 h-full w-full z-0">
      <img
        src={movie?.imgUrl}
        className="absolute group-hover:scale-125 duration-1000 z-[-1] object-cover w-full h-1/2"
        alt="movie img"
      />
      <div className="bg-gradient-to-t h-full from-black via-black to-transparent" />
    </div>
    <div className="container mx-auto">
      <div className="flex justify-end z-10 absolute  bottom-28 right-12">
        <Button buttonType="primary">
          <Link to="/create">Create movie</Link>
        </Button>
      </div>
      <div className="flex flex-col justify-end absolute z-100 top-0 left-5 h-full w-full bg-transparent p-4">
        <div className="flex flex-col gap-4 ">
          <h4 className="font-kanit font-bold">{movie?.title}</h4>
          <p className="text-sm w-1/2">{movie?.description}</p>
        </div>
        <div>
          <StarsRating rating={movie?.rating} />
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
