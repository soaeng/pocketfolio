import {useEffect, useState, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
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
import CarouselRec from './CarouselRec';
import {useDispatch, useSelector} from 'react-redux';
import {getMain} from '../../store/roomSlice';
import {useInterval} from '../../hook/hook';

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const portRef = useRef();
  const [h, setH] = useState(0);
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
  const [nowCnt, setNowCnt] = useState(0);
  const [portCnt, setPortCnt] = useState(0);
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

  // 움직이기
  useInterval(() => {
    if (0 <= nowCnt && nowCnt < portCnt) {
      setNowCnt(nowCnt + 1);
    } else {
      setNowCnt(0);
    }

    const port = document.querySelector(`.port${nowCnt}`);
    setH(h + port?.clientHeight);

    portRef.current.style.transition = 'all 3s ease-in-out';

    if (
      nowCnt < portCnt &&
      portRef.current.clientHeight + h < portRef.current.scrollHeight
    ) {
      move(h + port?.clientHeight);
    } else {
      portRef.current.style.transform = `none`;
      setH(0);
      setNowCnt(0);
    }
  }, 3000);

  const move = height => {
    portRef.current.style.transform = `translateY(-${height}px)`;
  };

  // 데이터 불러오기
  async function loadData() {
    const res = await dispatch(getMain());

    if (res.type === 'getMain/fulfilled') {
      setMainRoom(res.payload.mainRoom);
      setColor(
        res.payload.mainRoom
          ? themeColor[res.payload.mainRoom?.theme]
          : '#cbb6f4',
      );
      setCategoryRec(res.payload.categoryRec);
      setPortfolios(res.payload.portfolios);

      if (res.payload.portfolios?.length > 0) {
        setPortCnt(res.payload.portfolios.length - 1);
      }
    }
  }

  useEffect(() => {
    loadData();
    if (!user) {
      setColor('#cbb6f4');
    }
  }, [user]);

  useEffect(() => {
    console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣶⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣦⣄⣀⡀⣠⣾⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⡇⠀⠀⠀⠀
⠀⣶⣿⣦⣜⣿⣿⣿⡟⠻⣿⣿⣿⣿⣿⣿⣿⡿⢿⡏⣴⣺⣦⣙⣿⣷⣄⠀⠀⠀
⠀⣯⡇⣻⣿⣿⣿⣿⣷⣾⣿⣬⣥⣭⣽⣿⣿⣧⣼⡇⣯⣇⣹⣿⣿⣿⣿⣧⠀⠀
⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠸⣿⣿⣿⣿⣿⣿⣿⣷⠀
     ____  ____  ____  ____  ____ 
    ||S ||||S ||||A ||||F ||||Y ||
    ||__||||__||||__||||__||||__||
    |/__|||/__|||/__|||/__|||/__||
    
잠시.....만요.....🐌.......지나.....가겠.......읍니다......🐌잠시.....만요.....🐌........지나.....가겠......읍니다............🐌잠시...만요.......🐌......지나.....가겠.......읍니다......🐌잠시.....만요.....🐌......지나.....가겠......읍니다...🐌잠시.....만요.....🐌......
    `);
  }, []);

  return (
    <Container>
      <Nav />
      <InnerContainer>
        <TopContainer>
          <CanvasWrapper
            color={color}
            user={mainRoom ? true : false}
            onClick={() =>
              mainRoom.roomSeq && navigate(`/room/${mainRoom.roomSeq}`)
            }
          >
            <MainCanvas mainRoom={mainRoom} color={color} />
          </CanvasWrapper>

          <PortContainer color={color} user={mainRoom ? true : false}>
            <PortList ref={portRef}>
              {portfolios &&
                portfolios.map((port, idx) => (
                  <PortItem
                    key={idx}
                    className={`port${idx}`}
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
