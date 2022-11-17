import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {
  Wrapper,
  Item,
  PortDiv,
  ImgDiv,
  TitleDiv,
  Title,
  Thumbnail,
  IconDiv,
  DeleteIcon,
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
        <IconDiv className={isDelete ? 'delete' : ''} onClick={openModal}>
          <DeleteIcon></DeleteIcon>
        </IconDiv>

        <PortDiv onClick={moveMyRoom}>
          <ImgDiv>
            {pocketData.thumbnail === undefined ? (
              <Thumbnail
                src={process.env.PUBLIC_URL + '/assets/images/room_01.png'}
              />
            ) : (
              <Thumbnail src={pocketData.thumbnail} />
            )}
          </ImgDiv>
          <TitleDiv>
            <Title>{pocketData.name}</Title>
          </TitleDiv>
        </PortDiv>
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
