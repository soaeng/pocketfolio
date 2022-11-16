import {Container, Title, TagBox, Tag} from './PortItem.style';

const PortItem = ({item, idx}) => {
  return (
    <Container>
      <Title>{`${item.name}`}</Title>
      <TagBox>
        {item.tags.map((tag, idx) => (
          <Tag>{`# ${tag}`}</Tag>
        ))}
      </TagBox>
    </Container>
  );
};

export default PortItem;
