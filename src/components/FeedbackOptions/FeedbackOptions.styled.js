import styled from 'styled-components';

export const Tittle = styled.h1`
  font-weight: normal;
  font-family: 'Merriweather', serif;
  position: relative;
  display: inline-block;
  margin: 0;
  line-height: 1;
  color: #f7844e;
  font-size: 40px;
  padding: 0.4em 1em 0.55em;
`;

export const Button = styled.button`
  background: #f7844e;
  color: #fff;
  border-radius: 7px;
  padding: 20px;
  margin: 10px;
  font-size: 16px;
  :disabled {
    opacity: 0.4;
  }
  :hover {
    box-shadow: 0 0 10px yellow;
  }
`;
