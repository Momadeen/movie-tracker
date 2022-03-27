import StarsRating from 'components/shared/StarsRating';
import { AiFillFire } from 'react-icons/ai';

type IReviews = {
  reviews: { title?: string; description?: string; rating: number }[];
};

const Reviews = ({ reviews }: IReviews) => (
  <div className="flex flex-col">
    <div className="flex flex-row items-center gap-2 mb-4">
      <h2 className="text-gray-400 text-2xl font-kanit">Reviews</h2>
      <AiFillFire className="fill-orange-500 text-2xl" />
    </div>
    <div className='flex flex-col gap-10'>
      {reviews?.map(review => (
        <div key={review?.title} className="flex flex-col gap-1">
          <h4 className="font-kanit text-white">{review?.title}</h4>
          <p className="text-gray-300">{review?.description}</p>
          <StarsRating readyOnly rating={review?.rating} />
        </div>
      ))}
    </div>
  </div>
);

export default Reviews;
