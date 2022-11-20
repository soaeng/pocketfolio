import {useNavigate} from 'react-router-dom';
import {
  Container,
  UserName,
  LinkDiv,
  IconDiv,
  Link,
  Introduction,
  LinkIcon,
  LinkText,
  ExtraContainer,
  ExtraItem,
  ImgBox,
  Img,
  LikeHitBox,
  LikeHitIconDiv,
  HitIcon,
  LikeIcon,
  HitLikeCount,
  ExtraName,
} from './RoomDetail.style';

// 마이룸 상세정보
const RoomDetail = ({closeDetail, data}) => {
  const navigate = useNavigate();

  return (
    <Container onClick={closeDetail}>
      <UserName>{data.owner.name}</UserName>
      {data.owner.blogUrl && (
        <LinkDiv>
          <IconDiv>
            <LinkIcon />
          </IconDiv>
          <Link href={data.owner.blogUrl} target="_blank">
            <LinkText>{data.owner.blogUrl}</LinkText>
          </Link>
        </LinkDiv>
      )}
      <Introduction>{data.owner.describe}</Introduction>

      {data?.owner?.rooms?.length > 0 && (
        <ExtraContainer>
          {data.owner.rooms.map((room, idx) => (
            <ExtraItem
              onClick={() => navigate(`/room/${room.roomSeq}`)}
              key={idx}
            >
              <ImgBox>
                <Img
                  src={
                    room.thumbnail
                      ? room.thumbnail
                      : process.env.PUBLIC_URL + '/assets/images/room_01.PNG'
                  }
                  onError={e => {
                    e.target.src =
                      process.env.PUBLIC_URL + '/assets/images/logo3.png';
                  }}
                />

                <LikeHitBox>
                  <LikeHitIconDiv>
                    <LikeIcon />
                  </LikeHitIconDiv>
                  <HitLikeCount>{room.like}</HitLikeCount>

                  <LikeHitIconDiv>
                    <HitIcon />
                  </LikeHitIconDiv>
                  <HitLikeCount>{room.hit}</HitLikeCount>
                </LikeHitBox>
              </ImgBox>
              <ExtraName>{room.name}</ExtraName>
            </ExtraItem>
          ))}
        </ExtraContainer>
      )}
    </Container>
  );
};

export default RoomDetail;
