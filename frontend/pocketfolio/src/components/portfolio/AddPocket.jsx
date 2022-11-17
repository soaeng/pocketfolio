import React, {useState, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {
  Overlay,
  ModalWrap,
  Body,
  Contents,
  BtnDiv,
  StyledBtn,
  Box,
  TextDiv,
  Text,
  Head,
  IconDiv,
  CloseIcon,
  Input,
  Label,
  ThemeDiv,
  Theme,
  ThemeImg,
  ThemeTitle,
  DropDiv,
  Select,
  Option,
} from './AddPocket.style';
import {getRoomCategory, createRoom} from '../../store/roomSlice';

const AddPocket = props => {
  const {open, close, save, reLander, setReLander} = props;
  const dispatch = useDispatch();
  // 포켓 이름
  const [pocketName, setPocketName] = useState('');
  // 카테고리 리스트
  const [categoryList, setCategoryList] = useState([]);
  // 카테고리 변수
  const [selectedCate, setSelectedCate] = useState(1);
  // 공개범위 변수
  const [selectedRange, setSelectedRange] = useState('O');
  // 테마 변수
  const [selectedTheme, setSelectedTheme] = useState('room_01');
  // 메인 설정 변수
  const [main, setMain] = useState('T');
  // 썸네일 변수
  const [thumbNail, setThumbNail] = useState('');

  // 테마 종류
  const themeList = [
    {
      src: '/assets/images/room_01.png',
      name: 'room_01',
    },
    {
      src: '/assets/images/room_02.png',
      name: 'room_02',
    },
    {
      src: '/assets/images/room_03.png',
      name: 'room_03',
    },
    {
      src: '/assets/images/room_04.png',
      name: 'room_04',
    },
    {
      src: '/assets/images/room_05.png',
      name: 'room_05',
    },
    {
      src: '/assets/images/apartment_01.png',
      name: 'apartment_01',
    },
    {
      src: '/assets/images/apartment_02.png',
      name: 'apartment_02',
    },
    {
      src: '/assets/images/apartment_03.png',
      name: 'apartment_03',
    },
    {
      src: '/assets/images/island.png',
      name: 'island',
    },
  ];

  // 공개, 비공개, 링크 공유
  const publicRange = [
    {
      data: 'O',
      name: '전체 공개',
    },
    {
      data: 'C',
      name: '비공개',
    },
  ];
  // 현재 트랜지션 효과를 보여주고 있는 중이라는 상태 값
  const [animate, setAnimate] = useState(false);
  // 실제 컴포넌트가 사라지는 시점을 지연시키기 위한 값
  const [visible, setVisible] = useState(open);

  // 룸 카테고리 불러오기
  useEffect(() => {
    dispatch(getRoomCategory()).then(res => {
      setCategoryList(res.payload);
    });
  }, []);

  useEffect(() => {
    // open 값이 true -> false 가 되는 것을 감지 (즉, 모달창을 닫을 때)
    if (visible && !open) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setAnimate(open);
  }, [visible, open]);
  if (!animate && !visible) return null;

  // 포켓 이름 변경
  const changePocketName = e => {
    setPocketName(e.target.value);
  };

  // 카테고리 설정
  const changeCategory = e => {
    setSelectedCate(e.target.value);
  };

  // 공개범위 설정
  const changeRange = e => {
    setSelectedRange(e.target.value);
  };

  // 테마 설정
  const changeTheme = e => {
    setSelectedTheme(e.target.value);
  };

  // 썸네일 첨부
  const uploadThumbnail = e => {
    const file = e.target.files[0];
    setThumbNail(file);
  };

  // 메인 설정 여부
  const changeMain = e => {
    if (main === 'T') {
      setMain('F');
    } else {
      setMain('T');
    }
  };

  // 데이터 제출
  const createPocket = () => {
    const form = new FormData();
    const pocket = JSON.stringify({
      name: pocketName,
      theme: selectedTheme,
      category: parseInt(selectedCate),
      isMain: main,
      privacy: selectedRange,
    });
    form.append('room', new Blob([pocket], {type: 'application/json'}));
    form.append('thumbnail', thumbNail);
    dispatch(createRoom(form)).then(res => {
      if (res.payload.status === 201) {
        setReLander(!reLander)
        close();
      }
    });
  };

  return (
    <Overlay>
      <ModalWrap className={open ? 'modal open' : 'modal close'}>
        <Contents>
          <header>
            <Head>포켓 만들기</Head>
            <IconDiv 
              className='close'
              onClick={close}>
              <CloseIcon></CloseIcon>
            </IconDiv>
          </header>
          <Body>
            {/* 포켓 이름 입력 */}
            <Box>
              <Text>포켓이름</Text>
              <Input
                className="title"
                autoComplete="off"
                placeholder="이름을 입력 해주세요"
                onChange={changePocketName}
              />
            </Box>

            {/* 카테고리 & 공개범위 설정 */}
            <Box className="dropselect">
              <DropDiv>
                <Text>카테고리</Text>
                <Select onChange={changeCategory} value={selectedCate}>
                  {categoryList.map((item, idx) => (
                    <Option key={idx} value={item.categorySeq}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </DropDiv>
              <DropDiv>
                <Text>공개범위</Text>
                <Select onChange={changeRange} value={selectedRange}>
                  {publicRange.map((item, idx) => (
                    <Option key={idx} value={item.name}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </DropDiv>
            </Box>

            {/* 테마 선택 */}
            {/* <Box>
              <Text>테마</Text>
              <ThemeDiv>
                {themeList.map((item, idx) => (
                  <Theme key={idx}>
                    <Label>
                      <Input
                        type="radio"
                        className="themeselect"
                        value={item.name}
                        checked={selectedTheme === `${item.name}`}
                        onChange={changeTheme}
                      ></Input>
                      <ThemeImg
                        src={process.env.PUBLIC_URL + item.src}
                      ></ThemeImg>
                    </Label>
                  </Theme>
                ))}
              </ThemeDiv>
            </Box> */}

            <Box className="mainset">
              {/* 메인 설정 */}
              <Text>메인 포켓 설정</Text>
              <Input
                type="checkbox"
                className="maincheck"
                onChange={changeMain}
                checked={main === 'T'}
              ></Input>

              {/* 썸네일 첨부 */}
              {/* <Text>썸네일</Text>
              <Input
                type="file"
                accept="image/*"
                onChange={uploadThumbnail}
                // style={{display: 'none'}}
              /> */}
            </Box>

            <BtnDiv>
              <StyledBtn className="cancel" onClick={close}>
                취소
              </StyledBtn>
              <StyledBtn className="save" onClick={createPocket}>
                저장
              </StyledBtn>
            </BtnDiv>
          </Body>
        </Contents>
      </ModalWrap>
    </Overlay>
  );
};

export default AddPocket;
