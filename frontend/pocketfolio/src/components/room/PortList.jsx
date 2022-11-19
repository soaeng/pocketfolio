import PortItem from './PortItem';
import {Container, Title, Box, ContentTitle} from './PortList.style';
import {ContentBox} from './PortItem.style';

const PortList = ({data, openPortDetail}) => {
  return (
    <Container>
      <Title>포트폴리오 목록</Title>
      {data.map((item, idx) => (
        <PortItem item={item} key={idx} openPortDetail={openPortDetail} />
      ))}
      {data?.length === 0 && (
        <Box>
          <ContentBox className={'full'}>
            <ContentTitle>포트폴리오가 없습니다.</ContentTitle>
          </ContentBox>
        </Box>
      )}
    </Container>
  );
};

export default PortList;
