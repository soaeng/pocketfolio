import styled from 'styled-components';

export const Container = styled.div`
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

export const ImgBox = styled.div`
  width: 5rem;
  margin-right: 1rem;
  aspect-ratio: 1 / 1;
  border-radius: 0.3rem;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContentBox = styled.div`
  width: calc(100% - 6rem);
  display: flex;
  flex-direction: column;

  &.full {
    width: 100%;
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
  margin-top: 0.5rem;

  & + & {
    margin-left: 0.3rem;
  }
`;
