import styled from 'styled-components';
import {RiHeart3Fill, RiEyeLine} from 'react-icons/ri';
import {HiMinusCircle} from 'react-icons/hi'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 1rem;
`;

export const Item = styled.div`
  position: relative;

  /* 1안 */
  border-radius: 1rem;
  background-color: #fff0f0;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
`;

export const PortDiv = styled.div`
  
`

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  /* height: 9rem;
  width: 12rem; */
  
  padding: 10px;
  overflow: hidden;

  /* 2안 */
  /* border-radius: 1rem;
  background-color: #fff0f0;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25); */
`;

export const Thumbnail = styled.img`
  max-width: 100%;
  aspect-ratio: 1/1;  
  height: auto;
  cursor: pointer;
  background-color: #fef9ff;
  border-radius: 0.5rem ;
`;

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: bold;
`;

export const Title = styled.p`
  font-size: 15px;
  padding: 10px;
  margin: 0;
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

export const IconDiv = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  left: 10.7rem;
  top: -1rem;
  transition: all ease-in-out 0.1s;

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
export const DeleteIcon = styled(HiMinusCircle)`
  font-size: 2.5rem;
  color: #ff3434;
`;