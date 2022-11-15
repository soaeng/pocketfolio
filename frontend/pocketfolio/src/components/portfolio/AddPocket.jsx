import {useState, useEffect} from 'react';
import {
  Overlay,
  ModalWrap,
  Body,
  Contents,
  BtnDiv,
  StyledBtn,
  Box,
  Text,
  Head,
  TitleInput,
  ThemeDiv,
  Theme,
  ThemeImg,
  ThemeTitle,
  DropDiv,
} from './AddPocket.style';

const AddPocket = props => {
  const {open, close, save} = props;

  // 테마 종류
  const ThemeList = [
    {
      src: '/assets/images/room_01.png',
      name: 'room_01',
    },
    {
      src: '/assets/images/room_02.png',
      name: 'room_02',
    },
  ];

  // 현재 트랜지션 효과를 보여주고 있는 중이라는 상태 값
  const [animate, setAnimate] = useState(false);
  // 실제 컴포넌트가 사라지는 시점을 지연시키기 위한 값
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    // open 값이 true -> false 가 되는 것을 감지 (즉, 모달창을 닫을 때)
    if (visible && !open) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setAnimate(open);
  }, [visible, open]);

  if (!animate && !visible) return null;

  return (
    <Overlay>
      <ModalWrap className={open ? 'modal open' : 'modal close'}>
        <Contents>
          <header>
            <Head>포켓 만들기</Head>
          </header>

          <Body>
            <Box>
              <Text>포켓이름</Text>
              <TitleInput
                autoComplete="off"
                placeholder="이름을 입력 해주세요"
              />
            </Box>

            <Box>
              <Text>테마</Text>
              <ThemeDiv>
                {ThemeList.map((item, idx) => (
                  <Theme>
                    <ThemeImg
                      src={process.env.PUBLIC_URL + item.src}
                    ></ThemeImg>
                    <ThemeTitle>{item.name}</ThemeTitle>
                  </Theme>
                ))}
                {/* <Theme>
                  <ThemeImg
                    src={process.env.PUBLIC_URL + '/assets/images/room_01.png'}
                  ></ThemeImg>
                  
                </Theme>
                <Theme>
                  <ThemeImg
                    src={process.env.PUBLIC_URL + '/assets/images/room_01.png'}
                  ></ThemeImg>

                </Theme>
                <Theme>
                  <ThemeImg
                    src={process.env.PUBLIC_URL + '/assets/images/room_01.png'}
                  ></ThemeImg>

                </Theme>
                <Theme>
                  <ThemeImg
                    src={process.env.PUBLIC_URL + '/assets/images/room_01.png'}
                  ></ThemeImg>

                </Theme>
                <Theme>
                  <ThemeImg
                    src={process.env.PUBLIC_URL + '/assets/images/room_01.png'}
                  ></ThemeImg>

                </Theme>
                <Theme>
                  <ThemeImg
                    src={process.env.PUBLIC_URL + '/assets/images/room_01.png'}
                  ></ThemeImg>

                </Theme>
                ; */}
              </ThemeDiv>
            </Box>
            <Box className="dropselect">
              <DropDiv>
                <Text>카테고리</Text>
              </DropDiv>
              <DropDiv>
                <Text>공개범위</Text>
              </DropDiv>
            </Box>
          </Body>
          <BtnDiv>
            <StyledBtn className="cancel" onClick={close}>
              취소
            </StyledBtn>
            <StyledBtn className="save" onClick={save}>
              저장
            </StyledBtn>
          </BtnDiv>
        </Contents>
      </ModalWrap>
    </Overlay>
  );
};

export default AddPocket;
