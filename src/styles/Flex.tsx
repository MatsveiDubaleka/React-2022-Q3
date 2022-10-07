import styled from 'styled-components';
import React from 'react';

interface IFlex {
  width?: string;
  display?: string;
  direction?: string;
  align?: string;
  justify?: string;
  gap?: string;
  style?: object;
  wrap?: string;
  children: React.ReactNode;
}

export const StyledFlex = styled.div<IFlex>`
  display: flex;
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
  gap: ${({ gap }) => gap || '0px'};
`;

export const Flex = (props: IFlex) => {
  return <StyledFlex {...props} />;
};
