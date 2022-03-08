import { VFC } from 'react';
import styled from 'styled-components';
import { BaseStyle, ButtonProps } from './BaseButton';

export const PrimaryButton: VFC<ButtonProps> = ({ children, size }) => {
  return <PrimaryStyled size={size}>{children}</PrimaryStyled>;
};

const PrimaryStyled = styled(BaseStyle)`
  background-color: #10b981;
  :hover {
    background-color: #059669;
  }
  :focus {
    background-color: #059669;
    outline: 3px solid #6ee7b7;
  }
`;
