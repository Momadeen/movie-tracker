import StarIcon from '../icons/StarIcon';

const StarsRating = ({ rating }: { rating: number }) => (
  <ul className="flex justify-center">
    <li className="flex flex-row gap-2">
      {Array(rating).fill(<StarIcon isCheck />)}
      {Array(5 - rating).fill(<StarIcon />)}
    </li>
  </ul>
);

export default StarsRating;
