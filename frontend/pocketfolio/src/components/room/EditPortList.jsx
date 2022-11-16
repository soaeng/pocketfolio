import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getMyPort} from '../../store/portSlice';
import {Container, Title} from './EditPortList.style';
import EditPortItem from './EditPortItem';

const EditPortList = ({arranges, nowIdx, connectPort, disconnectPort}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [isConnected, setIsConnected] = useState(
    arranges[nowIdx].portSeq ? true : false,
  );

  // 전체 포트폴리오 목록 불러오기
  async function loadData() {
    const {payload} = await dispatch(getMyPort());
    setData(payload);
  }

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    setIsConnected(arranges[nowIdx].portSeq ? true : false);
    console.log(nowIdx)
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
    </Container>
  );
};

export default EditPortList;
