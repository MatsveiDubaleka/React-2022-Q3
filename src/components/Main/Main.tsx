import React, { useEffect, useState } from 'react';
import { Flex } from '../../styles/Flex';
import { ICard } from '../../interfaces/ICard';
import axios from 'axios';
import { SearchBar } from './SearchBar';
import CircularProgress from '@mui/material/CircularProgress';
import Product from './Product';

export const Main: React.FC = () => {
  const [products, setProducts] = useState<ICard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getData = async (regularProp: string | void = '') => {
    let baseUrl = 'https://the-one-api.dev/v2/character/?limit=20';

    !regularProp
      ? baseUrl
      : (baseUrl = `https://the-one-api.dev/v2/character/?name=/${regularProp}/i`);

    const options = {
      method: 'GET',
      url: baseUrl,
      headers: { Authorization: 'Bearer EYud6UvEvgXhu4FWP7yc' },
    };
    const response = await axios.request(options);
    setProducts(response.data.docs);
    setLoading(true);
    return response.data.docs;
  };

  useEffect(() => {
    const result = Promise.resolve(getData());
    console.log('Effect Main Render');
    result.then((json: ICard[]) => {
      console.log(json);
    });
  }, []);

  return (
    <Flex direction={'column'} style={{ paddingBottom: '50px' }}>
      <SearchBar getData={getData} />

      {!loading ? (
        <CircularProgress color="success" />
      ) : (
        <Flex direction={'row'} gap={'50px'} wrap={'wrap'}>
          {products.map((card: ICard) => (
            <Product key={card._id} {...card} />
          ))}
        </Flex>
      )}
    </Flex>
  );
};
