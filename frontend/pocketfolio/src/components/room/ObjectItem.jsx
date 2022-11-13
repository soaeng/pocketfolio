import {Container, Img} from './ObjectItem.style';

const ObjectItem = ({item}) => {
  return (
    <Container>
      <Img src={item.image}/>
    </Container>
  );
};

export default ObjectItem;
