import React from 'react';
import { IProduct } from '../../interfaces/IProduct';
import { Flex } from '../../styles/Flex';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  return (
    <Card raised={true} sx={{ bgcolor: 'background.paper' }}>
      <CardContent>
        <Flex
          width={'100%'}
          direction={'column'}
          style={{ width: '25vw' }}
          align={'flex-start'}
          justify={'space-between'}
        >
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>

          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {product.id} {product.category.toUpperCase()}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Description: {product.description}
          </Typography>

          <Typography variant="body1">Rating: {product.rating.rate}</Typography>

          <Typography variant="body2">Rating count:{product.rating.count}</Typography>

          <CardMedia component="img" height="auto" image={product.image} alt={product.title} />

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Price: {product.price}$
          </Typography>
        </Flex>
      </CardContent>
    </Card>
  );
};
