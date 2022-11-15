import {Container} from './HitDetail.style';
import {useDispatch} from 'react-redux';
import {getVisitors} from '../../store/roomSlice';
import {useEffect, useState} from 'react';

const HitDetail = ({closeHit, data}) => {
  const dispatch = useDispatch();
  const [hitData, setHitData] = useState(null);

  async function getHitData() {
    const {payload} = await dispatch(getVisitors(data.room.roomSeq));
    setHitData(payload);
  }

  useEffect(() => {
    getHitData();
  }, []);

  return (
    <Container>
      <>Hit</>
    </Container>
  );
};

export default HitDetail;