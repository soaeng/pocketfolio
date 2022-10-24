import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Item = styled.div`
  height: 100%;
  width: 200px;
  outline: 1px solid;
  margin-right: 1rem;
  border-radius: 1.5rem;
`;

export const ImgDiv = styled.div`
  height: 70%;
  border-top: 1.5rem;
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
`;

export const LikeDiv = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid gray;
`;

export const LikeContent = styled.div``;

export const DeleteBtn = styled.img`
  margin-right: 1rem;
  width: 20px;
`;
