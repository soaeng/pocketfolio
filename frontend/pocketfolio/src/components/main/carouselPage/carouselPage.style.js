import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
`;
const rowDiv = styled(Flex)`
  flex-direction: row;
  width: 100%;
`;
const columnDiv = styled(Flex)`
  flex-direction: column;
  width: 100%;
`;

export const MainContainer = styled.div`
  position: relative;
`;

export const Page1Container = styled(rowDiv)`
  position: absolute;
  background-color: #b94d4d;
  width: 70%;
  margin-top: 50px;
  border-radius: 0 0 15% 0;
`;

export const Page2Container = styled(rowDiv)`
  position: absolute;
  background-color: #10468e;
  margin-top: 50px;
  width: 70%;
  border-radius: 0 0 15% 0;
`;

export const TextContainer = styled(columnDiv)`
  padding-left: 7%;
  color: #fff;
`;

export const ImageContainer = styled.img`
  position: absolute;
  /* top: 20px; */
  padding-left: 60%;
  /* width: 25%; */
`;

export const Text = styled.p`
  width: 100%;
  height: fit-content;
`;

// Move to Room Button
export const RoomButton = styled.button`
  width: 200px;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 16px;
  border: none;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    box-shadow: 0.5px 0.5px 0.5px #333;
    color: #000;
  }

  &:active {
    top: 2px;
    box-shadow: 0.5px 0.5px 0.5px #333;
  }
`;
