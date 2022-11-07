import {useState} from 'react';
import VisitItem from './VisitItem';
import {
  Container,
  ImgTextDiv,
  WriteForm,
  TextArea,
  ImgBox,
  Img,
  BottomBox,
  LockIconDiv,
  LockIcon,
  UnlockIcon,
  LockText,
  Btn,
} from './VisitList.style';

const VisitList = () => {
  const [lock, setLock] = useState(false);

  return (
    <Container>
      <WriteForm>
        <ImgTextDiv>
          <ImgBox>
            <Img />
          </ImgBox>
          <TextArea />
        </ImgTextDiv>
        <BottomBox>
          <LockIconDiv onClick={() => setLock(!lock)}>
            {lock ? <LockIcon /> : <UnlockIcon />}
            <LockText>{lock ? '비밀글' : '공개글'}</LockText>
          </LockIconDiv>
          <Btn type="submit">확인</Btn>
        </BottomBox>
      </WriteForm>
      <VisitItem />
      <VisitItem />
      <VisitItem />
    </Container>
  );
};

export default VisitList;
