import styled from 'styled-components';

export const Background = styled.div`
  background-color: #F7F7F7;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 70%;
`;

export const Header = styled.span`
  font-size: 36px;
  border-bottom: 2px solid;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 170px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  height: 30%;
  width: 100%; 
`;

export const Text = styled.div`
  margin-bottom: 1rem;
`;

export const CardList = styled.div`
  display: flex;
`;


