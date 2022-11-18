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
  EditIcon,
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
import {unfollowFunc, followFunc} from '../../store/oauthSlice';
import HitDetail from './HitDetail';
import InfoEdit from './InfoEdit';

// 마이룸 상단 방정보
const RoomInfo = ({data, sidebar, edit, handleReload}) => {
  const user = useSelector(state => state.oauth.user);
  const dispatch = useDispatch();

  const [detail, setDetail] = useState(false);
  const [hitDetail, setHitDetail] = useState(false);
  const [like, setLike] = useState(data.like);
  const [likeCount, setLikeCount] = useState(data.likeCount);
  const [follow, setFollow] = useState(data.follow);
  const [infoEdit, setInfoEdit] = useState(false);

  // 팔로우, 언팔로우
  async function handleFollow() {
    if (user) {
      if (follow) {
        const {payload} = await dispatch(unfollowFunc(data.room.userSeq));
        if (payload) {
          setFollow(false);
        }
      } else {
        const {payload} = await dispatch(followFunc(data.room.userSeq));
        if (payload) {
          setFollow(true);
        }
      }
    }
  }

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

  // user detail
  const toggleDetail = () => {
    setDetail(!detail);
    setHitDetail(false);
  };

  const closeDetail = () => {
    setDetail(false);
    setHitDetail(false);
  };

  // hit Detail
  const togglehit = () => {
    if (user && user.userSeq === data.room.userSeq) {
      setDetail(false);
      setHitDetail(!hitDetail);
    }
  };

  const closeHit = () => {
    setDetail(false);
    setHitDetail(false);
  };

  // info Edit
  const closeInfoEdit = () => {
    setInfoEdit(false);
  };

  return edit ? null : (
    <Container className={sidebar ? 'sidebar' : null}>
      <Box>
        <ImgInfoDiv>
          <RoomImgBox onClick={toggleDetail}>
            <RoomImg
              src={
                data && data.owner.profilePic
                  ? data.owner.profilePic
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
            <IconDiv className="follow" onClick={handleFollow}>
              {follow ? <AlreadyFollowIcon /> : <FollowIcon />}
            </IconDiv>
          )}

          {user && user.userSeq === data.room.userSeq && (
            <IconDiv className="edit" onClick={() => setInfoEdit(true)}>
              <EditIcon />
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
          <LikeShowDiv onClick={togglehit}>
            <IconDiv>
              <ShowIcon />
            </IconDiv>
            <ShowState>{data.hitCount}</ShowState>
          </LikeShowDiv>
        </LikeShowFollowContainer>
      </Box>

      {detail && <RoomDetail closeDetail={closeDetail} data={data} />}
      {hitDetail && <HitDetail closeHit={closeHit} data={data} />}
      {infoEdit && (
        <InfoEdit
          closeInfoEdit={closeInfoEdit}
          data={data}
          handleReload={handleReload}
        />
      )}
    </Container>
  );
};

export default RoomInfo;
