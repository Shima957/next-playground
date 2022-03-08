import styled from 'styled-components';

export const Input = () => {
  return <InputStyle />;
};

const InputStyle = styled.input`
  border: 1px solid #eee;
  border-radius: 0.25rem;
  padding: 0.75rem 0.5rem;
  font-size: 1rem;
  outline: none;
  :focus {
    outline: 3px solid #10b981;
    outline-offset: 3px;
  }
`;
