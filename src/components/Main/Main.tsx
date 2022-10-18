import React, { Component, PropsWithChildren } from 'react';
import { Flex } from '../../styles/Flex';
import { ICard } from './../../interfaces/ICard';
import axios from 'axios';
import { SearchBar } from './SearchBar';
import CircularProgress from '@mui/material/CircularProgress';
import Product from './Product';

interface ICardProps {
  products: ICard[];
  isLoaded: boolean;
}

export class Main extends Component<PropsWithChildren, ICardProps> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = {
      products: [],
      isLoaded: false,
    };
  }

  getData = async (regex = '') => {
    let baseUrl = 'https://the-one-api.dev/v2/character/?limit=20';
    !regex ? baseUrl : (baseUrl = `https://the-one-api.dev/v2/character/?name=/${regex}/i`);
    const options = {
      method: 'GET',
      url: baseUrl,
      headers: { Authorization: 'Bearer EYud6UvEvgXhu4FWP7yc' },
    };

    try {
      const response = await axios.request(options);
      this.setState({ products: response.data.docs, isLoaded: true });
      console.log(response.data.docs[0]);
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    setTimeout(() => {
      this.getData();
    }, 1000);
  }

  render() {
    return (
      <Flex direction={'column'}>
        <SearchBar getData={this.getData} />

        {!this.state.isLoaded ? (
          <CircularProgress color="success" />
        ) : (
          <Flex direction={'row'} gap={'50px'} wrap={'wrap'}>
            {this.state.products.map((card: ICard) => (
              <Product key={card._id} {...card} />
            ))}
          </Flex>
        )}
      </Flex>
    );
  }
}
