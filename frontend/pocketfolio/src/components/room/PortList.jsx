import PortItem from './PortItem';
import {Container, Title, Box, ContentTitle} from './PortList.style';
import {ContentBox} from './PortItem.style';
import {useNavigate} from 'react-router-dom';

const PortList = ({data, openPortDetail}) => {
  const navigate = useNavigate();
  const moveCreatePort = () => {
    navigate('/port/create');
  };
  return (
    <Container>
      <Title>포트폴리오 목록</Title>
      {data.map((item, idx) => (
        <PortItem item={item} key={idx} openPortDetail={openPortDetail} />
      ))}
      {data?.length === 0 && (
        <Box onClick={moveCreatePort}>
          <ContentBox className={'full'}>
            <ContentTitle>
              포트폴리오가 없습니다. 이곳을 클릭해서 포트폴리오를 만드세요.
            </ContentTitle>
          </ContentBox>
        </Box>
      )}
    </Container>
  );
};

export default PortList;
