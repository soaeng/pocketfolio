import React from 'react';
import {Item, ImgDiv, TitleDiv, LikeDiv, LikeContent, Thumbnail} from './Card.style';

const Card = () => {
  return (
    <Item>
      <ImgDiv >
        <Thumbnail src={process.env.PUBLIC_URL + '/assets/images/room.png'} ></Thumbnail>
      </ImgDiv>
      <TitleDiv>아이링크</TitleDiv>
      <LikeDiv>
        <LikeContent>좋아요</LikeContent>
        <LikeContent>방문자 수</LikeContent>
      </LikeDiv>
    </Item>
  );
};

export default Card;
