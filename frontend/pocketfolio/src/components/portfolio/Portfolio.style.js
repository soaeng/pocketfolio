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
  margin: auto;
  justify-content: space-evenly;
  height: 90%;
  width: 50rem;
  
`;

export const Header = styled.span`
  font-size: 30px;
  border-bottom: 2px solid;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: max-content;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  height: 35%;
  width: 100%;
`;

export const Text = styled.div`
  margin-bottom: 1rem;

  &.porttitle{
    border-bottom : 1px solid #BABABA;
    padding-bottom: 1rem;
  }
`;

export const CardList = styled.div`
  display: flex;
  align-items: center;

  width: 50rem;
  /* overflow-x: auto; */
  /* overflow-y: visible; */
  /* outline: 1px solid; */
  
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    height: 5%;
    background-color: #3C2E9B;
    border-radius: 2rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #d7dcff;
    border-radius: 2rem;
  }
`;


