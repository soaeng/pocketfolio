import {Container, Img} from './ObjectItem.style';

const ObjectItem = () => {
  return (
    <Container>
      <Img src={process.env.PUBLIC_URL + '/assets/images/room.png'}/>
    </Container>
  );
};

export default ObjectItem;
