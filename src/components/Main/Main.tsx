import React, { Component, PropsWithChildren } from 'react';
import { Product } from './Product';
import { Flex } from '../../styles/Flex';
import { IProduct } from '../../interfaces/IProduct';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';

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
    const getProducts = async () => {
      await fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json: IProduct[]) => this.setState({ products: json }));
    };

    getProducts();
    return (
      <Paper elevation={0}>
        <Flex direction={'column'} gap={'50px'}>
          <h2>Main</h2>
          <Flex direction={'row'} style={{ 'flex-wrap': 'wrap' }} gap={'50px'}>
            {this.state.products ? (
              this.state.products.map((product: IProduct, index: number) => {
                return <Product key={index} product={product} />;
              })
            ) : (
              <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>
            )}
          </Flex>
        </Flex>
      </Paper>
    );
  }
}
