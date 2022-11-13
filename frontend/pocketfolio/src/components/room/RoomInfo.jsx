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
import {useDispatch, useSelector} from 'react-redux';
import {roomDislike, roomLike} from '../../store/roomSlice';

// 마이룸 상단 방정보
const RoomInfo = ({data, sidebar, edit}) => {
  const user = useSelector(state => state.oauth.user);
  const dispatch = useDispatch();

  const [detail, setDetail] = useState(false);
  const [like, setLike] = useState(data.like);
  const [likeCount, setLikeCount] = useState(data.likeCount);
  const [follow, setFollow] = useState(data.follow);

  // 팔로우
  const handleFollow = () => {
    setFollow(!follow);
  };

  // 좋아요, 좋아요 취소
  async function handleLike() {
    if (user) {
      if (like) {
        const {payload} = await dispatch(roomDislike(data.room.roomSeq));
        if (payload) {
          setLikeCount(likeCount - 1);
          setLike(false);
        }
      } else {
        const {payload} = await dispatch(roomLike(data.room.roomSeq));
        if (payload) {
          setLikeCount(likeCount + 1);
          setLike(true);
        }
      }
    }
  }

  // detail Modal
  const toggleDetail = () => {
    setDetail(!detail);
  };

  const closeDetail = () => {
    setDetail(false);
  };

  return edit ? null : (
    <Container className={sidebar ? 'sidebar' : null}>
      <Box>
        <ImgInfoDiv>
          <RoomImgBox onClick={toggleDetail}>
            <RoomImg
              src={
                data && data.room.userProfile
                  ? data.room.userProfile
                  : process.env.PUBLIC_URL + '/assets/images/logo3.png'
              }
            />
          </RoomImgBox>
          <NameCategoryDiv>
            <RoomName onClick={toggleDetail}>{data && data.room.name}</RoomName>
            <RoomCategory>{data && data.room.category.name}</RoomCategory>
          </NameCategoryDiv>
        </ImgInfoDiv>

        <LikeShowFollowContainer>
          {/* 팔로우 | 로그인한 상태이고, 방 주인이 아닌 경우 가능 */}
          {user && user.userSeq !== data.room.userSeq && (
            <IconDiv className="follow">
              {follow ? <AlreadyFollowIcon /> : <FollowIcon />}
            </IconDiv>
          )}

          {/* 좋아요 */}
          <LikeShowDiv>
            <IconDiv onClick={handleLike}>
              {like ? <LikeIcon /> : <DislikeIcon />}
            </IconDiv>
            <ShowState>{likeCount}</ShowState>
          </LikeShowDiv>
          
          {/* 방문자 */}
          <LikeShowDiv>
            <IconDiv>
              <ShowIcon />
            </IconDiv>
            <ShowState>{data.hitCount}</ShowState>
          </LikeShowDiv>
        </LikeShowFollowContainer>
      </Box>

      {detail ? <RoomDetail closeDetail={closeDetail} data={data} /> : null}
    </Container>
  );
};

export default RoomInfo;
