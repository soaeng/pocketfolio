import styled from 'styled-components';
import {RiHeart3Fill, RiEyeLine} from 'react-icons/ri';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const Item = styled.div`
  position: relative;
  height: 15rem;
  width: 12rem;
  margin-right: 1rem;
  border-radius: 1.5rem;
  background-color: #ffe8e8;
`;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 9rem;
  width: 12rem;
  overflow: hidden;
  border-radius: 1.5rem 1.5rem 0 0;
`;

export const Thumbnail = styled.img`
  max-width: 100%;
  height: auto;
  cursor: pointer;
`;

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  font-family: bold;
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.3);
`;

export const Title = styled.p`
  font-size: 15px;
  margin-left: 1rem;
  font-family: 'NanumSquareAcr' !important;
  
`;

export const LikeDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  justify-content: space-around;
  margin: 1rem auto;
`;

export const LikeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30%;
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
  /* visibility: hidden; */
  opacity: 0;
  position: absolute;
  left: 10.7rem;
  top: -1rem;
  width: 35px;
  height: 35px;
  transition: all ease-in-out 0.3s;

  &.delete {
    visibility: visible;
    opacity: 1;
    z-index: 99;
    cursor: pointer;
    display: flex;
  }
`;

export const Heart = styled(RiHeart3Fill)``;
export const Eye = styled(RiEyeLine)``;
