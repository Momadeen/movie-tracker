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

const inputs: IInputArrayTypes = [
  { name: 'title', type: 'text', inputType: 'text', placeholder: 'Title' },
  {
    name: 'description',
    type: 'text',
    inputType: '',
    placeholder: 'Description'
  }
];

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const [reviewDetails, setFields] = useState<IFormTypes>({
    title: '',
    id: uuid(),
    rating: rating,
    createdAt: new Date().getTime()
  });
  const handleChange = useCallback(e => {
    setFields(prev => ({ ...prev, [e?.target?.name]: e?.target?.value }));
  }, []);

  const isReadyToSubmit = useMemo(() => {
    if (reviewDetails?.title === '' || reviewDetails?.description === '') return true;
    return false;
  }, [reviewDetails]);

  useEffect(() => setFields(prev => ({ ...prev, rating })), [rating]);

  const onSubmit = useCallback(
    async e => {
      e.preventDefault();
    },
    []
  );

  return (
    <div className="flex flex-col my-8">
      <h2 className="text-gray-400 text-lg font-kanit">Add Review</h2>
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
        <Button disabled={isReadyToSubmit} buttonType="primary" type="submit">
          Create
        </Button>
      </form>
    </div>
  );
};

export default AddReview;
