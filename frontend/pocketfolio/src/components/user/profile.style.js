import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 5rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 3rem;
  font-weight: bold;
`;

export const Form = styled.form``;

export const Div = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgDiv = styled.div`
  background-color: yellow;
  border-radius: 50%;
  height: 12.5rem;
  aspect-ratio: 1/1;
  margin-right: 1rem;
  overflow: hidden;
`;

export const Img = styled.input`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NickBirth = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NBBox = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 0.5rem;
  }
`;

export const NBLabel = styled.label`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  margin-left: 0.7rem;
`;

export const NBInput = styled.input`
  font-size: 1.4rem;
  padding: 1rem;
  border-radius: 1rem;
  border: 1.4px solid #333333;

  &:focus {
    outline: none;
    outline: 1.5px solid #333333;
  }
`;
