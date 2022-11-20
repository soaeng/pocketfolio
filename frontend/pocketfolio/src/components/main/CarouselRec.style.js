import styled from 'styled-components';
import {
  RiArrowRightSLine,
  RiArrowLeftSLine,
  RiHeart3Fill,
  RiEyeLine,
} from 'react-icons/ri';

export const Container = styled.div`
  width: 100%;

  & + & {
    margin-top: 3rem;
  }
`;

export const Title = styled.h2`
  @media screen and (max-width: 700px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 410px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 350px) {
    font-size: 1rem;
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  aspect-ratio: 19/5;
  overflow: hidden;

  position: relative;

  &:hover {
    & .navigation {
      display: block;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const ItemList = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  width: fit-content;
`;

export const NextDiv = styled.div`
  position: absolute;
  font-size: 4rem;
  right: -0.5rem;
  color: white;
  height: 100%;
  z-index: 2;
  display: none;

  &:hover {
    transition: all 0.2s;
    background-color: #ffffff41;
  }
`;

export const PrevDiv = styled.div`
  position: absolute;
  font-size: 4rem;
  left: -0.5rem;
  color: white;
  height: 100%;
  z-index: 2;
  display: none;

  &:hover {
    transition: all 0.2s;
    background-color: #ffffff41;
  }
`;

export const NextIcon = styled(RiArrowRightSLine)``;
export const PrevIcon = styled(RiArrowLeftSLine)``;

export const ItemContainer = styled.div`
  height: calc(100% - 2rem);
  aspect-ratio: 5/6;
  padding: 1rem;
  background-color: #ffe4de;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  & + & {
    margin-left: 1rem;
  }

  &:hover .shadow {
    visibility: visible;
  }

  &:hover .icon {
    visibility: visible;
  }
  
  &:hover img {
    scale: 1.1;
    transition: all 0.2s;
  }
`;

export const Shadow = styled.div`
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #ffb9ae41;
`;

export const ImgBox = styled.div`
  width: 100%;
  aspect-ratio: 1/1;

  position: relative;

`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InfoBox = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 0.5rem;
  overflow: hidden;
  font-weight: bold;
  height: 1.2rem;
`;

export const Name = styled.p`
  font-size: 1rem;
  margin: 0;
`;

export const LikeHitDiv = styled.div`
  visibility: hidden;
  position: absolute;
  top: calc(50% - 1.3rem);
  width: 100%;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  color: white;
`;

export const IconDiv = styled.div`
  margin-left: 0.5rem;
  height: 1.3rem;
`;

export const Count = styled.p`
  margin: 0;
  margin-left: 0.2rem;
`

export const LikeIcon = styled(RiHeart3Fill)``;
export const HitIcon = styled(RiEyeLine)``;
