import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 0.6rem;
  padding: 1rem 0 0.5rem 0;
  width: 100%;

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ChartContainer = styled.div`
  width: calc(60% - 1rem);
  min-width: 300px;
  padding: 0.5rem;
  margin-right: 0.5rem;
  aspect-ratio: 4/3;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border-radius: 5px;
`;

export const DateContainer = styled.div`
  height: 100%;
  width: 13%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const GraphBox = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column-reverse;
`;

export const KeyFrameBox = styled.div`
  overflow: hidden;
  animation: upTo 1s 0s 1 forwards;
  display: flex;
  flex-direction: column-reverse;

  @keyframes upTo {
    0% {
      height: 0;
    }
    100% {
      height: 100%;
    }
  }
`;

export const Graph = styled.div`
  background-color: #e75452;
  width: 0.7rem;
  border-bottom: 2px solid #e75452;

  position: relative;
`;

export const ValueBox = styled.div`
  position: absolute;
  top: -3rem;

  &.noShow {
    display: none;
  }
`;

export const Value = styled.p`
  font-weight: bold;
`;

export const DateText = styled.p`
  margin-bottom: 0.3rem;
`;

export const ListContainer = styled.div`
  border-radius: 5px;
  width: calc(40% - 1rem);
  padding: 0.5rem;
  height: 100%;
  overflow: hidden;
  background-color: #f8e1db;

  @media screen and (max-width: 800px) {
    width: calc(60% - 1rem);
    padding: 0.5rem;
    margin-top: 0.5rem;
    min-width: 300px;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  text-align: center;
  font-size: 0.9rem;
`;

export const UserItem = styled.div`
  width: calc(100% - 1rem);
  height: 3rem;
  padding: 0 0.5rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  & + & {
    margin-top: 0.3rem;
  }

  background-color: #fff4f1;
  border-radius: 5px;
`;

export const UserImgBox = styled.div`
  height: 50%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
`;

export const UserImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UserName = styled.p`
  margin: 0;
  margin-left: 0.5rem;
`;