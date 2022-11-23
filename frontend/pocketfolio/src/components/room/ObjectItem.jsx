import {Container, Img} from './ObjectItem.style';

const ObjectItem = ({item, appendArrange}) => {

  // 오브젝트 선택 시, 화면에 나타내기
  const handleClick = e => {
    appendArrange({item, location: [0, 0, 0], rotation: 0});
  };
  
  return (
    <Container onClick={handleClick}>
      <Img src={item.image} />
    </Container>
  );
};

export default ObjectItem;
