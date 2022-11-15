import {
  Container,
  ChartContainer,
  ListContainer,
  DateContainer,
  GraphBox,
  KeyFrameBox,
  Graph,
  DateText,
  ValueBox,
  Value,
} from './HitDetail.style';
import {useDispatch} from 'react-redux';
import {getVisitors} from '../../store/roomSlice';
import {useEffect, useState} from 'react';

const HitDetail = ({closeHit, data}) => {
  const dispatch = useDispatch();
  const [visitors, setVisitors] = useState(null);
  const [today, setToday] = useState(0);
  const [hitStat, setHitStat] = useState([]);
  const [max, setMax] = useState(0);

  async function getHitData() {
    const {payload} = await dispatch(getVisitors(data.room.roomSeq));
    setVisitors(payload.guests);
    setToday(payload.today);

    // 객체 데이터를 배열로
    const value = Object.entries(payload.hitStat.hitStat).reverse();
    setHitStat(value);

    // 가장 많이 방문한 날짜
    let map = new Map(value);
    const maxVal = [...map.entries()].reduce((a, b) =>
      a[1] > b[1] ? a : b,
    )[1];
    setMax(maxVal + 1);
  }

  useEffect(() => {
    getHitData();
  }, []);

  return (
    <Container>
      <ChartContainer>
        {hitStat.map((item, idx) => (
          <DateContainer>
            <GraphBox>
              <KeyFrameBox>
                <Graph style={{height: `${(item[1] / max) * 100}%`}}>
                  <ValueBox className={item[1] ? "" : "noShow"}>
                    <Value>{`${item[1]}`}</Value>
                  </ValueBox>
                </Graph>
              </KeyFrameBox>
            </GraphBox>
            <DateText>{`${item[0].slice(8)}`}</DateText>
          </DateContainer>
        ))}
      </ChartContainer>
      <ListContainer></ListContainer>
    </Container>
  );
};

export default HitDetail;
