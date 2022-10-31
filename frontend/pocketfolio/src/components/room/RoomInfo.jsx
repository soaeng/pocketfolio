import {useState} from 'react';
import {
  Container,
  ImgInfoDiv,
  RoomImgBox,
  RoomImg,
  NameCategoryDiv,
  RoomName,
  RoomCategory,
  IconDiv,
  FollowIcon,
  AlreadyFollowIcon,
  LikeShowFollowContainer,
  LikeShowDiv,
  LikeIcon,
  DislikeIcon,
  ShowIcon,
  ShowState,
} from './RoomInfo.style';

const RoomInfo = () => {
  const [like, setLike] = useState(false);
  const [follow, setFollow] = useState(false);

  // 20자 제한
  const roomName = 'E101님의 마이룸';

  const handleFollow = () => {
    setFollow(!follow);
  };

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <Container>
      <ImgInfoDiv>
        <RoomImgBox>
          <RoomImg
            src={process.env.PUBLIC_URL + '/assets/images/logo_kakao.png'}
          />
        </RoomImgBox>
        <NameCategoryDiv>
          <RoomName>{roomName}</RoomName>
          <RoomCategory>개발</RoomCategory>
        </NameCategoryDiv>
      </ImgInfoDiv>

      <LikeShowFollowContainer>
        <IconDiv className="follow" onClick={handleFollow}>
          {follow ? <AlreadyFollowIcon /> : <FollowIcon />}
        </IconDiv>

        <LikeShowDiv>
          <IconDiv onClick={handleLike}>
            {like ? <LikeIcon /> : <DislikeIcon />}
          </IconDiv>
          <ShowState>101</ShowState>
        </LikeShowDiv>

        <LikeShowDiv>
          <IconDiv>
            <ShowIcon />
          </IconDiv>
          <ShowState>101</ShowState>
        </LikeShowDiv>
      </LikeShowFollowContainer>
    </Container>
  );
};

export default RoomInfo;
