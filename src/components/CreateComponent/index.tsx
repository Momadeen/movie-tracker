import { useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';
import useLocalStorage from '../../hooks/useLocalStorage';

import useRandomFill from '../../hooks/useRandomFill';
import { IFormTypes } from '../../types/form';
import { IInputArrayTypes } from '../../types/input';
import Button from '../shared/Button';
import Input from '../shared/Input';

const inputs: IInputArrayTypes = [
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
    imgUrl: '',
    title: '',
    releaseYear: 0,
    description: '',
    id: '',
    imdbRating: 0
  });

  const onClickRandomBtn = useCallback(async () => {
    await getRandomData();
    setFields(prev => ({
      ...prev,
      id: randomData?._id || uuid(),
      title: randomData?.name || 'N/A',
      imgUrl:
        'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png',
      releaseYear: randomData?.releaseYear || 2021,
      description: randomData?.overview || 'N/A',
      imdbRating: randomData?.imdbRating || 0
    }));
  }, [getRandomData, randomData]);

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

  return (
    <div className="flex flex-col gap-12 mt-8">
      <h2 className="text-text-200 text-2xl font-kanit">Create New Movie</h2>
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
          <Button buttonType="primary" type="submit">
            Create
          </Button>
          <Button onClick={onClickRandomBtn} type="button">
            Random fill
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
