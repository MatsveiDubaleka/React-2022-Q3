import React from 'react';
import { SearchBar } from './SearchBar';
import styled from 'styled-components';
import { Flex } from '../../styles/Flex';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled(Flex)`
  width: 100%;
  padding: 2rem;
  background-color: cadetblue;
  justify-content: space-between;
  color: bisque;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  gap: 15px;
`;

export const Header = () => {
  return (
    <>
      <header>
        <HeaderWrapper>
          <StyledUl>
            <li>
              <Link to="/" style={{ color: 'bisque' }}>
                HomePage
              </Link>
            </li>
            <li>
              <Link to="/about" style={{ color: 'bisque' }}>
                About
              </Link>
            </li>
            <li>
              <Link to="/random" style={{ color: 'bisque' }}>
                Random
              </Link>
            </li>
          </StyledUl>
          <h1>Header</h1>
          <SearchBar />
        </HeaderWrapper>
      </header>
    </>
  );
};
