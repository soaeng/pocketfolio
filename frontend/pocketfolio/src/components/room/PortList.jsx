import PortItem from './PortItem';
import {Container, Title} from './PortList.style';

const PortList = ({data, openPortDetail}) => {
  console.log(data);
  return (
    <Container>
      <Title>포트폴리오 목록</Title>

      {data.map((item, idx) => (
        <PortItem item={item} key={idx} openPortDetail={openPortDetail} />
      ))}
    </Container>
  );
};

export default PortList;
