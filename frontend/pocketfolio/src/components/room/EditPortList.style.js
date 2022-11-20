import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h4`
  white-space: pre-wrap;
  text-align: center;
  line-height: 1.5rem;
`;

export const Box = styled.div`
  width: calc(100% - 2rem);
  background-color: #fff4f1;
  border-radius: 0.5rem;
  padding: 1rem;
  color: #333333;

  & + & {
    margin-top: 1rem;
  }

  display: flex;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
`;

export const ContentTitle = styled.h3`
  margin: 0.7rem 0;
`;

export const ContentBox = styled.div`
  width: calc(100% - 6rem);
  display: flex;
  flex-direction: column;

  &.full {
    width: 100%;
  }
`