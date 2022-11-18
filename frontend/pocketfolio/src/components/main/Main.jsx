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
import CarouselRec from './CarouselRec';

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.oauth.user);

  const themeColor = {
    room_01: '#fff4f1',
    room_02: '#eaf3d9',
    room_03: '#f3e9d9',
    room_04: '#ffe4de',
    room_05: '#dfffc8',
    island: '#cee7ff',
    apartment_01: '#fef0dd',
    apartment_02: '#fbebcd',
    apartment_03: '#d8e6fd',
  };

  const [mainRoom, setMainRoom] = useState(null);
  const [categoryRec, setCategoryRec] = useState(null);
  const [portfolios, setPortfolios] = useState(null);
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
      setWord(word);
      onSubmit(event);
    }
  };

  // 데이터 불러오기
  async function loadData() {
    const res = await dispatch(getMain());

    if (!res.error) {
      setMainRoom(res.payload.mainRoom);
      setCategoryRec(res.payload.categoryRec);
      setPortfolios(res.payload.portfolios);

      if (res.payload.mainRoom) {
        setColor(themeColor[res.payload.mainRoom.theme]);
      } else {
        setColor('#cbb6f4');
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
          <CanvasWrapper color={color} user={mainRoom ? true : false}>
            <MainCanvas mainRoom={mainRoom} color={color} />
          </CanvasWrapper>

          <PortContainer color={color} user={mainRoom ? true : false}>
            <PortList>
              {portfolios &&
                portfolios.map((port, idx) => (
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

          {categoryRec &&
            categoryRec.map(
              (rec, idx) =>
                rec.recommend.length > 0 && (
                  <CarouselRec key={idx} rec={rec} idx={idx} />
                ),
            )}

      </InnerContainer>
    </Container>
  );
};

export default Main;
