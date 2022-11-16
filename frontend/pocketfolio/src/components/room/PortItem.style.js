import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 2rem);
  background-color: #fff4f1;
  border-radius: 0.5rem;
  padding: 1rem;
  padding-top: 0.5rem;
  color: #333333;

  & + & {
    margin-top: 1rem;
  }
`;

export const Title = styled.h3`
  margin: 0.7rem 0;
`;

export const TagBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

export const Tag = styled.p`
  margin: 0;
  font-size: 0.9rem;
  background-color: #ffc7bb;
  padding: 0.5rem;
  border-radius: 0.5rem;

  & + & {
    margin-left: 0.5rem;
  }
`;
