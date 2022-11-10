import styled from 'styled-components';
import {H2, Body1} from '../../styles/styles.style';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  /* position: relative; */
  p {
    /* margin: 0; */
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 3rem auto;
  width: 80vw;

  .ck-content {
    margin: 0;
  }
`;

export const Content = styled.div`
  width: 70%;
  padding-left: 2rem;
`;

export const TitleDiv = styled.div`
  display: flex;
  border-bottom: 1px solid #b9b9b9;
  justify-content: space-between;
`;
export const Title = styled(H2)`
  display: flex;
  align-items: flex-end;
  margin: 0;
`;

export const Summary = styled(Body1)`
  height: fit-content;
  padding-top: 1rem;
  width: 100%;
  overflow: auto;
  
`;

export const WriteDate = styled.p`
  margin: 0;
  display: flex;
  align-items: flex-end;
`;

export const ThumbDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  padding-bottom: 5rem;
  overflow: hidden;

`;
export const ThumbNail = styled.img`
  max-width: 100%;
  height: auto;
`;

export const HashDiv = styled.div`
  display: flex;
  margin-bottom: 1rem;
  width: 50%;
  flex-wrap: wrap;
  
`;

export const Hash = styled.div`
  padding: 10px;
  margin-right: 1rem;
  font-weight: bold;
  border-radius: 10px;
  background-color: #0091f7;
  color: #fff;
`;


export const BtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  /* padding-bottom: 1rem; */
  margin-bottom: 1rem;
`
export const Btn = styled.div`
  padding: 15px 30px;
  background-color: #e75452;
  color: #ffffff;
  border-radius: 0.5rem;
  text-transform: uppercase;
  font-family: sans-serif;
  transition: all 0.4s;
  font-weight: bold;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #ca3c3a;
    cursor: pointer;
    box-shadow: 2;
  }

`