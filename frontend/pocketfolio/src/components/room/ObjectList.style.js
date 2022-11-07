import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Tabs = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Tab = styled.div`
  width: 20%;
  text-align: center;
  padding: 1rem 0rem;
  transition: all 0.2s;
  border-bottom: 3px solid #fffff0;

  &.active {
    border-bottom: 3px solid lightcoral;
  }
`;

export const ScrollBox = styled.div`
  width: 100%;
  height: 90%;
  overflow-y: auto;


`

export const ItemBox = styled.div`
  width: 100%;
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
