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

const Card = props => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const {isDelete, pocketData} = props;
  const openModal = () => {
    setIsOpen(true);
  };
  const moveMyRoom = () => {
    navigate(`/room/${pocketData.roomSeq}`);
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
            <Title>{pocketData.name}</Title>
          </TitleDiv>
          <LikeDiv>
            <LikeContent>
              <Heart />
              <Count>{pocketData.like}</Count>
            </LikeContent>
            <LikeContent>
              <Eye />
              <Count>{pocketData.hit}</Count>
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
