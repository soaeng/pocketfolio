import {Wrapper, Item, ImgDiv, PlusImg} from './AddPort.style';

const AddPort = () => {
  
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

export default AddPort;
