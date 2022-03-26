import { useState } from 'react';
import StarIcon from '../icons/StarIcon';

type Props = {
  rating: number;
  onClick?: () => void;
  readyOnly?: boolean;
};

const StarsRating = ({ readyOnly, rating, onClick }: Props) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((_star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className="star-button"
            onClick={onClick}
            onMouseEnter={() => !readyOnly && setHover(index)}
            onMouseLeave={() => !readyOnly && setHover(rating)}
          >
            <StarIcon isCheck={index <= (hover || rating)} />
          </button>
        );
      })}
    </div>
  );
};

export default StarsRating;
