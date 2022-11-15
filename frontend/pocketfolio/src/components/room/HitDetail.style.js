import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 0.6rem;
  padding: 1rem 0 0.5rem 0;
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const ChartContainer = styled.div`
  width: calc(60% - 1rem);
  padding: 0.5rem;
  aspect-ratio: 4/3;

  display: flex;
  align-items: center;
  justify-content: space-around;
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

`

export const ListContainer = styled.div`
  background-color: yellow;
  width: calc(40% - 1rem);
  padding: 0.5rem;
`;

