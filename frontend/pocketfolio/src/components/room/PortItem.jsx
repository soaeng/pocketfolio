import {
  Container,
  ContentBox,
  Title,
  TagBox,
  Tag,
  ImgBox,
  Img,
} from './PortItem.style';

const PortItem = ({item, openPortDetail}) => {
  return (
    <Container onClick={() => openPortDetail(item.portSeq)}>
      {item.thumbnail && (
        <ImgBox>
          <Img src={item.thumbnail} />
        </ImgBox>
      )}
      <ContentBox className={!item.thumbnail && 'full'}>
        <Title>{`${item.name}`}</Title>
        <TagBox>
          {item.tags.map((tag, idx) => (
            <Tag key={idx}>{`# ${tag}`}</Tag>
          ))}
        </TagBox>
      </ContentBox>
    </Container>
  );
};

export default PortItem;
