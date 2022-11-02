import {useState} from 'react';
import {
  Container,
  Box,
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
import RoomDetail from './RoomDetail';

// 마이룸 상단 방정보
const RoomInfo = ({sidebar}) => {
  const [like, setLike] = useState(false);
  const [follow, setFollow] = useState(false);
  const [detail, setDetail] = useState(false);

  // 20자 제한
  const roomName = 'E101님의 마이룸';

  // 팔로우
  const handleFollow = () => {
    setFollow(!follow);
  };

  // 좋아요
  const handleLike = () => {
    setLike(!like);
  };

  // detail Modal
  const toggleDetail = () => {
    setDetail(!detail);
  };

  const closeDetail = () => {
    setDetail(false);
  };

  return (
    <Container className={sidebar? "sidebar" : null}>
      <Box>
        <ImgInfoDiv>
          <RoomImgBox onClick={toggleDetail}>
            <RoomImg
              src={process.env.PUBLIC_URL + '/assets/images/logo_kakao.png'}
            />
          </RoomImgBox>
          <NameCategoryDiv>
            <RoomName onClick={toggleDetail}>{roomName}</RoomName>
            <RoomCategory>개발</RoomCategory>
          </NameCategoryDiv>
        </ImgInfoDiv>

        {/* {detail ? <InfoModal closeDetail={closeDetail} /> : null} */}

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
      </Box>

      {detail ? <RoomDetail closeDetail={closeDetail} /> : null}
    </Container>
  );
};

export default RoomInfo;
