import React, { Component } from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Form } from '../components/Form/Form';

export class CreateCard extends Component {
  render() {
    return (
      <>
        <Header />
        <Form />
        <Footer />
      </>
    );
  }
}
