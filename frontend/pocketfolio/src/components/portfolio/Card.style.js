import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Item = styled.div`
  height: 15rem;
  width: 13rem;
  margin-right: 1rem;
  border-radius: 1.5rem;
  background-color: white;

  &.Add {
    display: flex;
    height: 15rem;
    width: 13rem;
    border-radius: 1.5rem;
    background-color: #d9d9d9;
    outline: 0;
  }
`;

export const ImgDiv = styled.div`
  height: 70%;
  border-radius: 1.5rem 1.5rem 0 0;
`;

export const Thumbnail = styled.img`
  height: 100%;
  width: 100%;
`;

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  height: 20%;
  margin-left: 0.5rem;
  font-family: bold;
`;

export const LikeDiv = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid gray;
`;

export const LikeContent = styled.div``;

export const DeleteBtn = styled.img`
  margin: 1rem 1rem 0 0;
  width: 30px;
`;
