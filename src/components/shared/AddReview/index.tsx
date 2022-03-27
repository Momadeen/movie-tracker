import { useState } from 'react';
import { useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import { IInputArrayTypes } from 'types/input';
import Input from '../Input';
import { IFormTypes } from 'types/form';
import StarsRating from '../StarsRating';
import Button from '../Button';
import { useMemo } from 'react';
import { useEffect } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';

const inputs: IInputArrayTypes = [
  { name: 'title', type: 'text', inputType: 'text', placeholder: 'Title' },
  {
    name: 'description',
    type: 'text',
    inputType: '',
    placeholder: 'Description'
  }
];

const AddReview = ({ id, movie }: { id?: string; movie: any }) => {
  const { updateMovie } = useLocalStorage();
  const [rating, setRating] = useState(0);
  const [reviewDetails, setFields] = useState<IFormTypes>({
    title: '',
    id: uuid(),
    rating: rating,
    description: '',
    createdAt: new Date().getTime()
  });
  const handleChange = useCallback(e => {
    setFields(prev => ({ ...prev, [e?.target?.name]: e?.target?.value }));
  }, []);

  const isReadyToSubmit = useMemo(() => {
    if (reviewDetails?.title === '' || rating === 0) return true;
    return false;
  }, [rating, reviewDetails?.title]);

  useEffect(() => setFields(prev => ({ ...prev, rating })), [rating]);

  const onSubmit = useCallback(
    async e => {
      e.preventDefault();
      const review = { ...movie, review: [{ ...reviewDetails }] };
      await updateMovie({ id, movie: review });
      setFields({ title: '', description: '' });
      setRating(0);
      window?.location?.reload();
    },
    [id, movie, reviewDetails, updateMovie]
  );

  return (
    <div className="flex flex-col my-8">
      <h2 className="text-gray-400 text-2xl font-kanit">Add Review</h2>
      <form className="flex flex-col gap-8 lg:w-1/2 w-3/4 mt-8" onSubmit={onSubmit}>
        {inputs?.map(input => (
          <Input
            key={input?.name}
            name={input?.name}
            type={input?.type}
            placeholder={input?.placeholder}
            inputType={input?.inputType}
            value={reviewDetails[input?.name]}
            onChange={handleChange}
          />
        ))}
        <StarsRating rating={rating} setRating={setRating} />
        <div>
          <Button disabled={isReadyToSubmit} buttonType="primary" type="submit">
            Add Review
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
