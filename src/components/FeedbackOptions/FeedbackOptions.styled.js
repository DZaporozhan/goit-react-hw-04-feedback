import styled from 'styled-components';

export const Button = styled.button`
  background: #d7d7d7;
  color: #000;
  border-radius: 7px;
  padding: 20px;
  margin: 10px;
  font-size: 16px;
  :disabled {
    opacity: 0.4;
  }
  :hover {
    background: #327af1de;
    box-shadow: 0 0 10px yellow;
  }
`;
