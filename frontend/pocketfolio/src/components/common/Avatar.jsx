import React, {useState, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {getMyInfo} from '../../store/oauthSlice';
import {AvatarImg, AvatarContainer} from './Avatar.style';
import DropDown from './Dropdown';

function Avatar({user}) {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (visible) dispatch(getMyInfo());
  }, [visible]);

  return (
    <AvatarContainer ref={modalRef}>
      {user.profilePic === undefined ? (
        <AvatarImg
          src="./assets/images/user.png"
          onClick={() => {
            setVisible(!visible);
          }}
        />
      ) : (
        <AvatarImg
          src={user.profilePic}
          onClick={() => {
            setVisible(!visible);
          }}
        />
      )}
      {visible && <DropDown user={user} />}
    </AvatarContainer>
  );
}

export default Avatar;
