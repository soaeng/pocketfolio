import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {getRoomCategory, updateRoom} from '../../store/roomSlice';
import Modal from '../common/Modal';
import {
  Container,
  CancelBox,
  CancelIcon,
  Title,
  DivContainer,
  Div,
  Name,
  NameInput,
  SelectBox,
  Selected,
  SelectOption,
  IconDiv,
  ShowIcon,
  NoshowIcon,
  TFBox,
  TIcon,
  FIcon,
  Btn,
} from './InfoEdit.style';

const InfoEdit = ({closeInfoEdit, data, handleReload}) => {
  const dispatch = useDispatch();

  // 포켓 정보
  const [categorys, setCategorys] = useState([]);
  const [name, setName] = useState(data.room.name);
  const [category, setCategory] = useState(data.room.category);
  const [isMain, setIsMain] = useState(data.room.isMain === 'T' ? true : false);
  const [privacy, setPrivacy] = useState(
    data.room.privacy === 'O' ? true : false,
  );

  const [open, setOpen] = useState(false);

  // 포켓 카테고리 불러오기
  async function loadCategory() {
    const {payload} = await dispatch(getRoomCategory());
    setCategorys(payload);
  }

  // 변경될 정보 보내기
  async function sendData() {
    const form = new FormData();

    const json = JSON.stringify({
      name,
      category: category.categorySeq,
      theme: data.room.theme,
      isMain: isMain ? 'T' : 'F',
      privacy: privacy ? 'O' : 'C',
    });

    form.append('room', new Blob([json], {type: 'application/json'}));

    const {payload} = await dispatch(
      updateRoom({
        roomSeq: data.room.roomSeq,
        data: form,
      }),
    );

    if (payload) handleReload();
  }

  useEffect(() => {
    loadCategory();
  }, []);

  return (
    <Modal>
      <Container>
        <CancelBox onClick={closeInfoEdit}>
          <CancelIcon />
        </CancelBox>
        <Title>포켓 정보 수정</Title>

        <DivContainer>
          <Div>
            <Name>포켓이름</Name>
            <NameInput
              type="text"
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
            />
          </Div>

          <Div className={open && 'open'}>
            <Name>카테고리</Name>
            <SelectBox className={open && 'open'}>
              <Selected
                onClick={() => setOpen(!open)}
                className={open && 'open'}
              >
                <SelectOption className="selected">
                  {category.name}
                </SelectOption>
                <IconDiv>{open ? <NoshowIcon /> : <ShowIcon />}</IconDiv>
              </Selected>

              {categorys.map(
                (item, idx) =>
                  item.categorySeq !== category.categorySeq && (
                    <SelectOption
                      key={idx}
                      className={!open && 'close'}
                      onClick={() => {
                        setCategory(item);
                        setOpen(!open);
                      }}
                    >
                      {item.name}
                    </SelectOption>
                  ),
              )}
            </SelectBox>
          </Div>

          <Div className="tf">
            <Name>메인 설정</Name>
            <TFBox onClick={() => setIsMain(!isMain)}>
              {isMain ? <TIcon /> : <FIcon />}
            </TFBox>

            <Name className="privacy">공개 설정</Name>
            <TFBox onClick={() => setPrivacy(!privacy)}>
              {privacy ? <TIcon /> : <FIcon />}
            </TFBox>
          </Div>

          <Div className="save">
            <Btn onClick={sendData}>저장</Btn>
          </Div>
        </DivContainer>
      </Container>
    </Modal>
  );
};

export default InfoEdit;
