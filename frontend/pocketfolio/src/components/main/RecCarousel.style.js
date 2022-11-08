// styled Component
import styled from 'styled-components';
import {H3, Body1, Body2} from '../../styles/styles.style';
import {RiHeart3Line, RiHeart3Fill, RiEyeLine} from 'react-icons/ri';

export const RecCaContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3% 5%;
`;

//추천 포트폴리오 전체 감싼 것
export const Container = styled.div`
  width: 90%;
  display: flex;
  padding-left: 5%;
  padding-right: 5%;
`;

export const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

// 포트폴리오 각각
export const Item = styled.div`
  display: flex;
  width: calc(84% / 4);
  flex-direction: column;
  justify-content: space-between;
  margin: 1%;
  padding: 1%;
  border-radius: 16px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
  flex: none;
`;

export const Ui = styled.div`
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  display: flex;
  width: 90%;
  justify-content: space-between;
  z-index: 100;

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #999;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
    border: 0;
    transition: all 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);

    &:hover {
      background: #666;
    }

    &:focus {
      outline: none;
      border: 1px solid rgba(255, 255, 255, 1);
    }
  }
`;

export const Item2 = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Item3 = styled.div`
  padding-right: 0.5rem;
`;

export const LikeIcon = styled(RiHeart3Fill)`
  width: 100%;
  height: 100%;
`;

export const DislikeIcon = styled(RiHeart3Line)`
  width: 100%;
  height: 100%;
`;

export const ShowIcon = styled(RiEyeLine)`
  width: 100%;
  height: 100%;
  cursor: default;
`;

export const LikeShowDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const RecCarImgDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 70%;
`;

export const RecCarThumbnail = styled.img`
  width: 90%;
`;

// 글자 component 스타일
export const RecCaTitle = styled(Body1)`
  padding: 10px;
`;
