import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  z-index: 1;
`;

export const Item = styled.div`
  position: relative;
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
  height: 3rem;
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
  padding-top: 0.5rem;
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

export const Button = styled.img`
  position: absolute;
  width: 35px;
  height: 35px;
  left: 10.7rem;
  top: -1rem;
  z-index: 9999;
  cursor: pointer;
`;
