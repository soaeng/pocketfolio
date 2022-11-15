import {useEffect} from 'react';
import {useState} from 'react';
import {Container, Name, Btn} from './EditPortItem.style';

const EditPortItem = ({
  item,
  arranges,
  nowIdx,
  isConnected,
  connectPort,
  disconnectPort,
}) => {
  const [can, setCan] = useState(true);

  const check = () => {
    arranges.map((arrange, idx) => {
      if (arrange.portSeq === item.portSeq) setCan(false);
    });
  };

  useEffect(() => {
    setCan(true);
    check();
    console.log(arranges);
  }, [arranges, nowIdx, isConnected]);

  return isConnected ? (
    <Container className={arranges[nowIdx].portSeq !== item.portSeq && 'dark'}>
      <Name>{item.name}</Name>
      <Btn
        className={arranges[nowIdx].portSeq !== item.portSeq && 'none'}
        onClick={() => disconnectPort(item.portSeq)}
      >
        연결해제
      </Btn>
    </Container>
  ) : (
    <Container className={!can && 'dark'}>
      <Name>{item.name}</Name>
      <Btn className={!can && 'none'} onClick={() => connectPort(item.portSeq)}>
        연결
      </Btn>
    </Container>
  );
};

export default EditPortItem;
