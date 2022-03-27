import { useCallback, useEffect, useState } from 'react';
import { IRandomData } from '../types/data';

const useRandomFill = () => {
  const [randomData, setRandomData] = useState<IRandomData>();

  const getRandomData = useCallback(() => {
    fetch('https://k2maan-moviehut.herokuapp.com/api/random')
      .then(res => res?.json())
      .then(data => setRandomData(data));
  }, []);

  return {
    randomData,
    getRandomData
  };
};

export default useRandomFill;
