import React from 'react';
import styled from 'styled-components';
import { Flex } from '../../styles/Flex';
import { Link } from 'react-router-dom';
import { Context } from 'GlobalContext';

const HeaderWrapper = styled(Flex)`
  width: 100%;
  padding: 2rem;
  background: #322e2f;
  justify-content: space-between;
  color: #f3ca20;
  border-bottom: 5px solid #f3ca20;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #f3ca20;
  text-transform: uppercase;
  font-size: 1.5rem;
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
      <header style={{ width: '100%' }}>
        <HeaderWrapper>
          <Context.Consumer>{({ title }) => <h1>{title}</h1>}</Context.Consumer>
          <StyledUl>
            <li>
              <StyledLink to="/">HomePage</StyledLink>
            </li>
            <li>
              <StyledLink to="/about">About</StyledLink>
            </li>
            <li>
              <StyledLink to="/random">Random</StyledLink>
            </li>
            <li>
              <StyledLink to="/card">Create Card</StyledLink>
            </li>
          </StyledUl>
          <h1>Header</h1>
        </HeaderWrapper>
      </header>
    </>
  );
};
