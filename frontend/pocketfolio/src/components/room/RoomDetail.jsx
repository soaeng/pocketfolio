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
} from './RoomDetail.style';

// 마이룸 상세정보
const RoomDetail = ({closeDetail, data}) => {
  console.log(data);
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

      {data.owner.rooms.length > 0 && (
        <ExtraContainer>
          {data.owner.rooms.map((room, idx) => (
            <ExtraItem>
              <ImgBox>{/* <Img src={room.}/> */}</ImgBox>
            </ExtraItem>
          ))}
        </ExtraContainer>
      )}
    </Container>
  );
};

export default RoomDetail;
