import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  & + & {
    margin-top: 2rem;
  }
`;

export const Header = styled.div`
  width: calc(100% - 1rem);
  background-color: white;
  padding: 0 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.5rem;
`;

export const Name = styled.p`
  margin: 0;
  margin: 0.3rem 0;
`;

export const ImgTextDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ImgBox = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 0.4rem;
  object-fit: cover;
  background-color: purple;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const TextBox = styled.div`
  margin-left: 1rem;
  padding: 1rem;
  width: calc(100% - 9.25rem);
  min-height: 4.25rem;
  font-size: 0.85rem;

  background-color: aquamarine;
`;
