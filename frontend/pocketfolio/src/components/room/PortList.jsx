import PortItem from './PortItem';
import {Container, Title, BtnBox, IconBox, AddIcon} from './PortList.style';

const PortList = () => {

  return (
    <Container>
      <Title>포트폴리오 목록</Title>
      <BtnBox>
        <IconBox><AddIcon /></IconBox>
      </BtnBox>
      <PortItem />
      <PortItem />
      <PortItem />
    </Container>
  );
};

export default PortList;
