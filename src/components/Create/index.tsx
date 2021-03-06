import BackButton from 'components/shared/BackButton';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { FaRandom } from 'react-icons/fa';

import useLocalStorage from '../../hooks/useLocalStorage';

import useRandomFill from '../../hooks/useRandomFill';
import { IFormTypes } from '../../types/form';
import { IInputArrayTypes } from '../../types/input';
import Button from '../shared/Button';
import Input from '../shared/Input';
import MovieCard from 'components/shared/MovieCard';

const inputs: IInputArrayTypes<IFormTypes> = [
  { name: 'imgUrl', type: 'text', inputType: 'text', placeholder: 'Image url' },
  { name: 'title', type: 'text', inputType: 'text', placeholder: 'Title' },
  {
    name: 'releaseYear',
    type: 'number',
    inputType: 'text',
    placeholder: 'Release Year'
  },
  {
    name: 'description',
    type: 'text',
    inputType: '',
    placeholder: 'Description'
  }
];

const CreateForm = () => {
  const { randomData, getRandomData } = useRandomFill();
  const { addMovieToList } = useLocalStorage();

  const [movieDetails, setFields] = useState<IFormTypes>({
    imgUrl:
      'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png',
    title: '',
    releaseYear: 0,
    description: '',
    id: uuid(),
    rating: 0,
    createdAt: new Date().getTime(),
    reviews: []
  });

  useEffect(() => getRandomData(), [getRandomData]);

  const onClickRandomBtn = useCallback(async () => {
    await getRandomData();
    setFields(prev => ({
      ...prev,
      id: randomData?._id || uuid(),
      title: randomData?.name || 'N/A',
      imgUrl: movieDetails?.imgUrl,
      releaseYear: randomData?.releaseYear || 2021,
      description: randomData?.overview || 'N/A',
      rating: (randomData?.imdbRating && Math.floor(randomData?.imdbRating / 2)) || 0
    }));
  }, [getRandomData, movieDetails?.imgUrl, randomData]);

  const handleChange = useCallback(e => {
    setFields(prev => ({ ...prev, [e?.target?.name]: e?.target?.value }));
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      addMovieToList(movieDetails);
    },
    [addMovieToList, movieDetails]
  );

  const disabled = useMemo(
    () => !movieDetails?.title || !movieDetails?.description || !movieDetails?.releaseYear,
    [movieDetails]
  );

  return (
    <div className="flex flex-col gap-8 mt-12 container mx-auto">
      <BackButton href="/" />
      <h2 className="text-gray-400 text-2xl font-kanit">Create New Movie</h2>
      <div className="flex gap-12 justify-between flex-col md:flex-row">
        <form className="flex flex-col gap-8 lg:w-1/2 w-3/4" onSubmit={onSubmit}>
          {inputs?.map(input => (
            <Input
              key={input?.name}
              name={input?.name}
              type={input?.type}
              placeholder={input?.placeholder}
              inputType={input?.inputType}
              value={movieDetails[input?.name]}
              onChange={handleChange}
            />
          ))}

          <div className="flex gap-4">
            <Button onClick={onClickRandomBtn} type="button">
              <p className="flex flex-row gap-2 items-center">
                Random fill <FaRandom />
              </p>
            </Button>
            <Button disabled={disabled} buttonType="primary" type="submit">
              Create
            </Button>
          </div>
        </form>
        {movieDetails?.title !== '' && <MovieCard className="h-96 w-96" movie={movieDetails} />}
      </div>
    </div>
  );
};

export default CreateForm;
