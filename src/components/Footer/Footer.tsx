import React from 'react';

import styled from 'styled-components';
import { Flex } from 'styles/Flex';

const StyledFooter = styled(Flex)`
  width: 100%;
  bottom: 0;
  background: #322e2f;
  height: 10vh;
  color: #fff;
  border-top: 5px solid #f3ca20;
`;

export const Footer = () => {
  return (
    <footer style={{ width: '100%' }}>
      <StyledFooter>
        <h2>Footer</h2>
      </StyledFooter>
    </footer>
  );
};
