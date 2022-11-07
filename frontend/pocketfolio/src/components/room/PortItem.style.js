import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 2rem);
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  padding-top: 0.5rem;

  &+& {
    margin-top: 1rem;
  }
`;

export const Title = styled.h3`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
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

  &+& { 
    margin-left: 0.5rem;
  }
`;
