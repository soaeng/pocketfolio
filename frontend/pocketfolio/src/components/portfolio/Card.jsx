import {React, useState} from 'react';
import {
  Wrapper,
  Item,
  ImgDiv,
  TitleDiv,
  Title,
  LikeDiv,
  LikeContent,
  Thumbnail,
  Img,
  Count,
  Button,
} from './Card.style';
import DeleteModal from './DeleteModal';

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <Wrapper>
      <Item>
        <Button 
        onClick={openModal}
        src={process.env.PUBLIC_URL + '/assets/images/minus.png'}></Button>
        <ImgDiv>
          <Thumbnail src={process.env.PUBLIC_URL + '/assets/images/room.png'} />
        </ImgDiv>
        <TitleDiv>
          <Title>아이링크</Title>
        </TitleDiv>
        <LikeDiv>
          <LikeContent>
            <Img
              className="hearteye"
              src={process.env.PUBLIC_URL + '/assets/images/heart.png'}
            />
            <Count>20</Count>
          </LikeContent>
          <LikeContent>
            <Img
              className="hearteye"
              src={process.env.PUBLIC_URL + '/assets/images/eye.png'}
            />
            <Count>13</Count>
          </LikeContent>
        </LikeDiv>
      </Item>
      {/* <Img
        className="deleteBtn"
        onClick={openModal}
        src={process.env.PUBLIC_URL + '/assets/images/trashcan.png'}
      /> */}

      {isOpen && (
        <DeleteModal
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </Wrapper>
  );
};

export default Card;
