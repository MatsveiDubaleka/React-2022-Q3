import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Main } from '../components/Main/Main';
import styled from 'styled-components';
import { Flex } from 'styles/Flex';

const StyledPage = styled(Flex)`
  width: 100%;
`;

const HomePage = () => {
  return (
    <StyledPage direction="column" align="center" justify="space-between">
      <Header />
      <Main />
      <Footer />
    </StyledPage>
  );
};

export default HomePage;
