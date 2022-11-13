import {
  Container,
  UserName,
  LinkDiv,
  IconDiv,
  Link,
  Introduction,
  LinkIcon,
  LinkText,
} from './RoomDetail.style';

// 마이룸 상세정보
const RoomDetail = ({closeDetail, data}) => {
  return (
    <Container onClick={closeDetail}>
      <UserName>{data.room.userName}</UserName>
      {data.room.userBlogUrl && (
        <LinkDiv>
          <IconDiv>
            <LinkIcon />
          </IconDiv>
          <Link href={data.room.userBlogUrl} target="_blank">
            <LinkText>{data.room.userBlogUrl}</LinkText>
          </Link>
        </LinkDiv>
      )}
      <Introduction>{data.room.introduction}</Introduction>
    </Container>
  );
};

export default RoomDetail;
