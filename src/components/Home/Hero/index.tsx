import Button from 'components/shared/Button';
import StarsRating from 'components/shared/StarsRating';
import { Link } from 'react-router-dom';
import { BiMoviePlay } from 'react-icons/bi';
import { IMovieList } from 'types/data';

const Hero = ({ movie }: { movie: IMovieList }) => (
  <Link to={`/${movie?.id}`}>
    <div
      style={{ backgroundImage: `url(${movie?.imgUrl})` }}
      className="bg-gray-100 px-6 bg-center bg-no-repeat bg-cover w-full h-[300px] md:h-[500px] text-white relative shadow-2xl "
    >
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent" />
      <div className="container mx-auto bg-transparent w-full z-20 h-full relative">
        <div className="flex flex-col md:flex-row md:items-end items-center justify-evenly w-full mx-auto h-full py-8 absolute">
          <div className="flex flex-col gap-4 w-full min-w-[200px]">
            <h4 className="font-kanit font-bold text-2xl md:text-6xl">{movie?.title}</h4>
            <p className="font-kanit text-xl">{movie?.releaseYear}</p>
            <p className="text-sm w-1/2 hidden md:block">{movie?.description}</p>
            <div>
              <StarsRating readyOnly rating={movie?.rating || 0} />
            </div>
          </div>
          <div className="mb-8 md:min-w-[300px]">
            <Link to="/create">
              <Button buttonType="primary">
                <p className="flex items-center gap-2">
                  Create movie <BiMoviePlay />
                </p>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default Hero;
