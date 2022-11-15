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
    </Container>
  );
};

export default RoomDetail;
