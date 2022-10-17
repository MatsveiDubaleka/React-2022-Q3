import React, { Component, PropsWithChildren } from 'react';
import { Product } from './Product';
import { Flex } from '../../styles/Flex';
import { IProduct } from '../../interfaces/IProduct';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import axios from 'axios';

interface IProducts {
  products: IProduct[];
}

export class Main extends Component<PropsWithChildren, IProducts> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = {
      products: [],
    };
  }

  render() {
    const getData = async () => {
      const options = {
        method: 'GET',
        url: 'https://the-one-api.dev/v2/character/?limit=20',
        headers: { Authorization: 'Bearer EYud6UvEvgXhu4FWP7yc' },
      };

      await axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    getData();

    return (
      <Flex>
        <Flex direction={'row'} gap={'50px'} wrap={'wrap'}>
          {this.state.products ? (
            this.state.products.map((product, index: number) => {
              return <Product key={index} />;
            })
          ) : (
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          )}
        </Flex>
      </Flex>
    );
  }
}
