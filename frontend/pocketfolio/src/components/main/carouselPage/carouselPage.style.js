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

export const Page1Container = styled(rowDiv)`
  background-color: #b94d4d;
`;

export const Page2Container = styled(rowDiv)`
  background-color: #10468e;
`;

export const TextContainer = styled(columnDiv)`
  padding-left: 7%;
  color: #fff;
`;

export const ImageContainer = styled.img`
  width: 10%;
`;

export const Text = styled.p`
  width: 100%;
  height: fit-content;
  &.concept {
    display: flex;
    align-items: center;
    margin-top: 20%;
    font-size: 1.1em;
    font-family: Pretendard SemiBold;
  }
  &.bold {
    margin-top: 0;
    margin-bottom: 8%;
    font-size: 4em;
    font-family: Strawberry Muffins;
  }
  &.thin {
    font-size: 1.05em;
    font-family: Pretendard Medium;
    line-height: 25px;
    color: rgba(0, 0, 0, 0.65);
  }
  &.light {
    font-size: 0.9em;
    font-family: Pretendard Medium;
    color: rgba(0, 0, 0, 0.6);
  }
  &.light span {
    font-size: 0.88em;
    font-family: Pretendard Light;
    color: rgba(0, 0, 0, 0.5);
  }
`;

// Move to Room Button
export const RoomBotton = styled.button`
  width: 200px;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 16px;
  border: none;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #35297e;
  }

  &:active {
    background-color: #35297e;
    box-shadow: 0.5px 0.5px 0.5px #333;
  }
`;
