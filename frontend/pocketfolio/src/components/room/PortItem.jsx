import {
  Container,
  ContentBox,
  Title,
  TagBox,
  Tag,
  ImgBox,
  Img,
} from './PortItem.style';

const PortItem = ({item, idx}) => {
  console.log(item.thumbnail);
  return (
    <Container>
      {item.thumbnail && (
        <ImgBox>
          <Img src={item.thumbnail} />
        </ImgBox>
      )}
      <ContentBox className={!item.thumbnail && "full"}>
        <Title>{`${item.name}`}</Title>
        <TagBox>
          {item.tags.map((tag, idx) => (
            <Tag>{`# ${tag}`}</Tag>
          ))}
        </TagBox>
      </ContentBox>
    </Container>
  );
};

export default PortItem;
