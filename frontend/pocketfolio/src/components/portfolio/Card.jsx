import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {
  Wrapper,
  Item,
  ImgDiv,
  TitleDiv,
  Title,
  LikeDiv,
  LikeContent,
  Thumbnail,
  Count,
  Button,
  Heart,
  Eye,
} from './Card.style';
import DeleteModal from './DeleteModal';

const Card = ({isDelete}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const openModal = () => {
    setIsOpen(true);
  };
  const moveMyRoom = () => {
    navigate('/room/1');
  };

  return (
    <Wrapper>
      <Item>
        <Button
          className={isDelete ? 'delete' : ''}
          onClick={openModal}
          src={process.env.PUBLIC_URL + '/assets/images/minus.png'}
        ></Button>

        <div onClick={moveMyRoom}>
          <ImgDiv>
            <Thumbnail
              src={process.env.PUBLIC_URL + '/assets/images/room.png'}
            />
          </ImgDiv>
          <TitleDiv>
            <Title>아이링크</Title>
          </TitleDiv>
          <LikeDiv>
            <LikeContent>
              <Heart />
              <Count>20</Count>
            </LikeContent>
            <LikeContent>
              <Eye />
              <Count>13</Count>
            </LikeContent>
          </LikeDiv>
        </div>
      </Item>
      {isOpen && (
        <DeleteModal
          onClose={() => {
            setIsOpen(false);
          }}
          text={'포켓을'}
        />
      )}
    </Wrapper>
  );
};

export default Card;
