import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export type ButtonProps = {
  size?: 'sm';
  children?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const BaseStyle = styled.button<ButtonProps>`
  border: none;
  border-radius: 0.25rem;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: ${(props) => (props.size === 'sm' ? '1rem' : '1.25rem')};
  font-weight: bold;
  text-align: center;
  padding: 0.25rem 1rem;
`;
