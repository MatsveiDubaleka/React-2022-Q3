import React from 'react';
import { IProduct } from '../../interfaces/IProduct';
import { Flex } from '../../styles/Flex';

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  return (
    <Flex direction={'column'} style={{ width: '25vw' }}>
      <span>{product.id}</span>
      <p>{product.title}</p>
      <h3>{product.category}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.rating.rate}</p>
      <p>{product.rating.count}</p>
      <img src={product.image} alt={product.title} style={{ width: '10vw' }} />
    </Flex>
  );
};
