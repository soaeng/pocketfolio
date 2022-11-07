import React, {useState, useEffect} from 'react';
import {
  Overlay,
  ModalWrap,
  Contents,
  BtnDiv,
  StyledBtn,
} from './SaveModal.style';
import {H3, Body1} from '../../styles/styles.style';

const SaveModal = props => {
  console.log(props);
  const {open, close, onClose} = props;

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
    // 모달의 open close클래스로 css animation을 구현
    <Overlay>
      <ModalWrap className={open ? 'modal open' : 'modal close'}>
        <Contents>
          <header>
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <Body1>포트폴리오를 저장 하시겠습니까?</Body1>
          <BtnDiv>
            <StyledBtn className="cancel" onClick={close}>
              취소
            </StyledBtn>
            <StyledBtn className="save" onClick={close}>
              저장
            </StyledBtn>
          </BtnDiv>
        </Contents>
      </ModalWrap>
    </Overlay>
  );
};

export default SaveModal;
