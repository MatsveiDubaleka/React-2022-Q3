import React, { Component, PropsWithChildren } from 'react';
import { Product } from './Product';
import { Flex } from '../../styles/Flex';
import { ICard } from './../../interfaces/ICard';
import axios from 'axios';
import { SearchBar } from './SearchBar';

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

    console.log(baseUrl);

    const response = await axios.request(options);

    this.setState({ products: response.data.docs, isLoaded: true });

    console.log(response.data.docs);
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <Flex direction={'column'}>
        <SearchBar getData={this.getData} />

        {!this.state.isLoaded ? (
          <div>Loading...</div>
        ) : (
          <Flex direction={'row'} gap={'50px'} wrap={'wrap'}>
            {this.state.products.map((card: ICard, index: number) => (
              <Product id={card.id} race={card.race} name={card.name} key={index} />
            ))}
          </Flex>
        )}
      </Flex>
    );
  }
}
