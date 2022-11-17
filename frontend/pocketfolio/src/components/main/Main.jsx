import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {
  Container,
  InnerContainer,
  TopContainer,
  CanvasWrapper,
  PortContainer,
  PortList,
  PortItem,
  Num,
  Name,
  SearchContainer,
  SearchInput,
  SearchIcon,
  SearchDiv,
} from './Main.style';
import MainCanvas from './MainCanvas';
import Nav from '../common/Nav';
import {getMain} from '../../store/roomSlice';
import {useEffect, useState} from 'react';

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.oauth.user);

  const [mainRoom, setMainRoom] = useState({});
  const [categoryRec, setCategoryRec] = useState([]);
  const [portfolios, setPortfolios] = useState([]);
  const [color, setColor] = useState('');

  // 검색어
  const [word, setWord] = useState('');

  // 입력창 변화 감지
  const onChange = e => {
    setWord(e.target.value);
  };

  // 검색어 창 입력
  const onSubmit = async e => {
    e.preventDefault();
    navigate('/search', {
      state: {
        search: word,
        sort: 1,
        category: 2047,
        size: 20,
        page: 1,
      },
    });
    setWord(''); //submit 후 창 비우기
  };

  // 검색어 창 엔터시 입력
  const keyDownHandler = event => {
    if (event.key === 'Enter') {
      //아무것도 입력하지 않은 경우 submit 방지
      if (word.length !== 0) {
        setWord(word);
        onSubmit(event);
      }
    }
  };

  // 데이터 불러오기
  async function loadData() {
    const {payload} = await dispatch(getMain());

    if (payload) {
      setMainRoom(payload.mainRoom);
      setCategoryRec(payload.categoryRec);
      setPortfolios(payload.portfolios);

      const theme = payload.mainRoom.theme.split('_');

      const name = theme[0];
      const num = theme[1];

      // 테마에 따른 배경색
      if (name === 'room') {
        if (num === '01') {
          setColor('#fff4f1');
        } else if (num === '02') {
          setColor('#eaf3d9');
        } else if (num === '03') {
          setColor('#f3e9d9');
        } else if (num === '04') {
          setColor('#ffe4de');
        } else if (num === '05') {
          setColor('#dfffc8');
        }
      } else if (name === 'island') {
        setColor('#cee7ff');
      } else if (name === 'apartment') {
        const num = theme[1];
        if (num === '01') {
          setColor('#fef0dd');
        } else if (num === '02') {
          setColor('#fbebcd');
        } else if (num === '03') {
          setColor('#d8e6fd');
        }
      }
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Nav />
      <InnerContainer>
        <TopContainer>
          <CanvasWrapper color={color}>
            <MainCanvas mainRoom={mainRoom} color={color} />
          </CanvasWrapper>

          <PortContainer color={color}>
            <PortList>
              {portfolios.map((port, idx) => (
                <PortItem
                  color={color}
                  onClick={() => navigate(`/port/${port.portSeq}`)}
                >
                  <Num color={color}>
                    {idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`}
                  </Num>
                  <Name>{port.name}</Name>
                </PortItem>
              ))}
            </PortList>
          </PortContainer>
        </TopContainer>
        
        <SearchDiv>
          <SearchContainer>
            <SearchIcon />
            <SearchInput
              placeholder="검색어를 입력해주세요"
              onKeyDown={keyDownHandler}
              onChange={onChange}
              value={word}
            />
          </SearchContainer>
        </SearchDiv>
      </InnerContainer>
    </Container>
  );
};

export default Main;
