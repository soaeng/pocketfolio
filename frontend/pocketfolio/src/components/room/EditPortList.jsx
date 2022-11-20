import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getMyPort} from '../../store/portSlice';
import {
  Container,
  Title,
  Box,
  ContentBox,
  ContentTitle,
  Warning,
} from './EditPortList.style';
import EditPortItem from './EditPortItem';
import {useNavigate} from 'react-router-dom';

const EditPortList = ({arranges, nowIdx, connectPort, disconnectPort}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [isConnected, setIsConnected] = useState(
    arranges[nowIdx].portSeq ? true : false,
  );
  const navigate = useNavigate();

  // 전체 포트폴리오 목록 불러오기
  async function loadData() {
    const {payload} = await dispatch(getMyPort());
    setData(payload);
  }

  /** 포트폴리오 생성으로 이동 */
  const moveCreatePort = () => {
    navigate('/port/create');
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    setIsConnected(arranges[nowIdx].portSeq ? true : false);
  }, [nowIdx, arranges]);

  return (
    <Container>
      <Title>
        {isConnected
          ? '이미 연결된 포트폴리오가 존재합니다. \n연결을 해제하고 싶다면, "연결해제"버튼을 눌러주세요'
          : '연결하고 싶은 포트폴리오의 "연결" 버튼을 눌러주세요'}
      </Title>
      {data.map((item, idx) => (
        <EditPortItem
          key={idx}
          item={item}
          arranges={arranges}
          nowIdx={nowIdx}
          isConnected={isConnected}
          connectPort={connectPort}
          disconnectPort={disconnectPort}
        />
      ))}
      {data?.length === 0 && (
        <Box onClick={moveCreatePort}>
          <ContentBox className={'full'}>
            <ContentTitle>
              작성된 포트폴리오가 없습니다. 포트폴리오를 작성하고 싶다면, 이
              곳을 눌러주세요.
            </ContentTitle>
            <Warning>* 단, 수정된 내용은 반영되지 않습니다.</Warning>
          </ContentBox>
        </Box>
      )}
    </Container>
  );
};

export default EditPortList;
