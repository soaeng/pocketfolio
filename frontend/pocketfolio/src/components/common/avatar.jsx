import React, {useState, useEffect, useRef} from 'react';
import {AvatarImg, AvatarContainer} from './avatar.style';
import DropDown from './dropdown';

function Avatar() {
  const [visible, setVisible] = useState(false);

  // dropdown 외부 클릭시 dropdown창 꺼지게 하기(modal 같은 기능 구현)
  const modalRef = useRef(null);

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = event => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setVisible(false);
      }
    };

    // 이벤트 핸들러 등록
    document.addEventListener('mousedown', handler);

    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <AvatarContainer ref={modalRef}>
      <AvatarImg
        src="./assets/images/user.png"
        onClick={() => {
          setVisible(!visible);
        }}
      />
      {visible && <DropDown />}
    </AvatarContainer>
  );
}

export default Avatar;
