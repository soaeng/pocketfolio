import {Item, ImgDiv, PlusImg} from './AddPort.style';

const AddPort = () => {
  
  return (
    <Item  >
      <ImgDiv>
        <PlusImg src={process.env.PUBLIC_URL + '/assets/images/plus.png'} />
      </ImgDiv>
    </Item>
  );
};

export default AddPort;
