import {
  Container,
  ChartContainer,
  DateContainer,
  GraphBox,
  KeyFrameBox,
  Graph,
  DateText,
  ValueBox,
  Value,
  ListContainer,
  Title,
  UserItem,
  UserImgBox,
  UserImg,
  UserName,
} from './HitDetail.style';
import {useDispatch} from 'react-redux';
import {getVisitors} from '../../store/roomSlice';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const HitDetail = ({data}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [visitors, setVisitors] = useState([]);
  const [hitStat, setHitStat] = useState([]);
  const [max, setMax] = useState(0);

  async function getHitData() {
    const {payload} = await dispatch(getVisitors(data.room.roomSeq));
    setVisitors(payload.guests);

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
          <DateContainer key={idx}>
            <GraphBox>
              <KeyFrameBox>
                <Graph style={{height: `${(item[1] / max) * 100}%`}}>
                  <ValueBox className={item[1] ? '' : 'noShow'}>
                    <Value>{`${item[1]}`}</Value>
                  </ValueBox>
                </Graph>
              </KeyFrameBox>
            </GraphBox>
            <DateText>{`${item[0].slice(8)}`}</DateText>
          </DateContainer>
        ))}
      </ChartContainer>
      <ListContainer>
        <Title>최근 방문자 목록</Title>
        {visitors.map((visitor, idx) => (
          <UserItem
            onClick={() => navigate(`/room/${visitor.roomSeq}`)}
            key={idx}
          >
            <UserImgBox>
              <UserImg
                src={
                  visitor.userProfile
                    ? visitor.userProfile
                    : process.env.PUBLIC_URL + '/assets/images/logo3.png'
                }
                onError={e => {
                  e.target.src =
                    process.env.PUBLIC_URL + '/assets/images/logo3.png';
                }}
              />
            </UserImgBox>
            <UserName>{visitor.userName}</UserName>
          </UserItem>
        ))}
      </ListContainer>
    </Container>
  );
};

export default HitDetail;
