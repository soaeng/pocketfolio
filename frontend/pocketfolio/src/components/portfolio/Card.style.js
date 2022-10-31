import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90%;
  width: 100%;
  
`;

export const Item = styled.div`
  height: 15rem;
  width: 12rem;
  margin-right: 1rem;
  border-radius: 1.5rem;
  background-color: white;
  
`;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 70%;
  border-radius: 1.5rem 1.5rem 0 0;
`;

export const Thumbnail = styled.img`
  height: 90%;
  width: 90%;
`;

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  height: 12%;
  font-family: bold;
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.3);
`;

export const Title = styled.div`
  font-size: 15px;
  margin-left: 1rem;
`;

export const LikeDiv = styled.div`
  display: flex;

  justify-content: center;
  width: 70%;
  justify-content: space-around;

  height: 20%;
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
    width: 1.5rem;
    cursor: pointer;
  }

  &.hearteye {
    height: 1.3rem;
    width: 1.3rem;
  }
`;

export const Count = styled.span``;
