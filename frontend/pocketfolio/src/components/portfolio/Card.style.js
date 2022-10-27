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
  font-family: bold;
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.3);
`;

export const Title = styled.div`
  margin-left: 1rem;
`;

export const LikeDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  justify-content: space-around;
  margin: auto;
`;

export const LikeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40%;
`;

export const Img = styled.img`
  &.deleteBtn {
    margin: 1rem 1rem 0 0;
    width: 30px;
    cursor: pointer;
  }

  &.hearteye {
    height: 15px;
    width: 15px;
  }
`;

export const Count = styled.span`

`