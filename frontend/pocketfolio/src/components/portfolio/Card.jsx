import {React, useState} from 'react';
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
import DeleteModal from './DeleteModal';

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <Wrapper>
      <Item>
        <ImgDiv>
          <Thumbnail src={process.env.PUBLIC_URL + '/assets/images/room.png'} />
        </ImgDiv>
        <TitleDiv>아이링크</TitleDiv>
        <LikeDiv>
          
          <LikeContent>좋아요 13</LikeContent>
          <LikeContent>방문자 13</LikeContent>
        </LikeDiv>
      </Item>
      <DeleteBtn
      onClick={openModal} 
      src={process.env.PUBLIC_URL + '/assets/images/trashcan.png'} />

      {isOpen && (
        <DeleteModal
        onClose={() => {
          setIsOpen(false);
        }}/>
      )}

    </Wrapper>
  );
};

export default Card;
