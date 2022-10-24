import React from 'react';
import {
  Wrapper,
  Item,
  ImgDiv,
  TitleDiv,
  LikeDiv,
  LikeContent,
  Thumbnail,
  DeleteBtn,
} from './Card.style';

const Card = () => {
  return (
    <Wrapper>
      <Item>
        <ImgDiv>
          <Thumbnail
            src={process.env.PUBLIC_URL + '/assets/images/room.png'}
          ></Thumbnail>
        </ImgDiv>
        <TitleDiv>아이링크</TitleDiv>
        <LikeDiv>
          <LikeContent>좋아요 13</LikeContent>
          <LikeContent>방문자 13</LikeContent>
        </LikeDiv>
      </Item>
      <DeleteBtn
        src={process.env.PUBLIC_URL + '/assets/images/trashcan.png'}
      ></DeleteBtn>
    </Wrapper>
  );
};

export default Card;
