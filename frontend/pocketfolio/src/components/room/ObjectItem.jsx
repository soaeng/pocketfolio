import {Container, Img} from './ObjectItem.style';

const ObjectItem = ({item, appendArrange}) => {
  const handleClick = e => {
    appendArrange({...item, location: [0, 0, 0], rotation: 0});
  };
  return (
    <Container onClick={handleClick}>
      <Img src={item.image} />
    </Container>
  );
};

export default ObjectItem;
