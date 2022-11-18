import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
  Overlay,
  ModalWrap,
  Body,
  Contents,
  Box,
  Text,
  Head,
  IconDiv,
  CloseIcon,
  Input,
  DropDiv,
  CheckIcon,
  BlankIcon,
  CheckDiv,
  SelectBox,
  Selected,
  SelectOption,
  ShowIcon,
  NoshowIcon,
  BtnDiv,
  StyledBtn,
} from './AddPocket.style';
import {getRoomCategory, createRoom} from '../../store/roomSlice';

const AddPocket = props => {
  const {open, close, reLander, setReLander} = props;
  const dispatch = useDispatch();
  // 포켓 이름
  const [pocketName, setPocketName] = useState('');
  // 카테고리 리스트
  const [categoryList, setCategoryList] = useState([]);
  // 카테고리 변수
  const [selectedCate, setSelectedCate] = useState('');
  // 공개범위 변수
  const [privacy, setPrivacy] = useState(false);

  // 메인 설정 변수
  const [main, setMain] = useState(false);

  // 드롭다운 개폐 변수
  const [dropdown, setDropdown] = useState(false);

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

  // 데이터 제출
  const createPocket = () => {
    const form = new FormData();
    const pocket = JSON.stringify({
      name: pocketName,
      theme: 'room_01.png',
      category: selectedCate.categorySeq,
      isMain: main ? 'T' : 'F',
      privacy: privacy ? 'O' : 'C',
    });
    form.append('room', new Blob([pocket], {type: 'application/json'}));
    form.append('thumbnail', '');
    // dispatch(createRoom(form)).then(res => {
    //   if (res.payload.status === 201) {
    //     setReLander(!reLander);
    //     close();
    //   }
    // });
  };

  console.log(selectedCate);
  return (
    <Overlay >
      <ModalWrap

       className={open ? 'modal open' : 'modal close'}>
        <Contents>
          <header>
            <Head>포켓 만들기</Head>
            <IconDiv className="close" onClick={close}>
              <CloseIcon></CloseIcon>
            </IconDiv>
          </header>
          <Body>
            {/* 포켓 이름 입력 */}
            <Box className="title">
              <Text>포켓이름</Text>
              <Input
                className="title"
                autoComplete="off"
                onChange={changePocketName}
              />
            </Box>

            {/* 카테고리 */}
            <Box className="dropselect">
              <DropDiv>
                <Text>카테고리</Text>
                <SelectBox className={dropdown && 'open'}>
                  <Selected
                    onClick={() => setDropdown(!dropdown)}
                    className={dropdown && 'open'}
                  >
                    <SelectOption className="selected">
                      {selectedCate.name}
                    </SelectOption>
                    <IconDiv>
                      {dropdown ? <NoshowIcon /> : <ShowIcon />}
                    </IconDiv>
                  </Selected>

                  {categoryList.map(
                    (item, idx) =>
                      item.categorySeq !== selectedCate.categorySeq && (
                        <SelectOption
                          key={idx}
                          className={!dropdown && 'close'}
                          onClick={() => {
                            setSelectedCate(item);
                            setDropdown(!dropdown);
                          }}
                        >
                          {item.name}
                        </SelectOption>
                      ),
                  )}
                </SelectBox>
              </DropDiv>
            </Box>

            <Box className="mainprivacy">
              {/* 메인 & 공개 설정 */}
              <Text>메인 설정</Text>
              <CheckDiv onClick={() => setMain(!main)}>
                {main ? <CheckIcon /> : <BlankIcon />}
              </CheckDiv>

              <Text className="privacy">공개 설정</Text>
              <CheckDiv onClick={() => setPrivacy(!privacy)}>
                {privacy ? <CheckIcon /> : <BlankIcon />}
              </CheckDiv>
            </Box>

            <BtnDiv>
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
