import {Wrapper, Item, ImgDiv, PlusImg} from './AddMyRoom.style';

const AddMyRoom = () => {
  
  return (
    <Wrapper>

    <Item  >
      <ImgDiv>
        <PlusImg src={process.env.PUBLIC_URL + '/assets/images/plus.png'} />
      </ImgDiv>
    </Item>
    </Wrapper>
  );
};

export default AddMyRoom;
