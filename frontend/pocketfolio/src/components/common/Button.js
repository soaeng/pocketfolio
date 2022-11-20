import styled from 'styled-components';
import {Body1} from '../../styles/styles.style';

export const Button = styled(Body1)`
  padding: 15px 30px;
  background-color: white;
  color: #7a70bc;
  border-radius: 2em;
  text-transform: uppercase;
  font-family: sans-serif;
  transition: all 0.4s;
  font-weight: bold;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #5d52a4;
    cursor: pointer;
    box-shadow: 2;
  }
`;
