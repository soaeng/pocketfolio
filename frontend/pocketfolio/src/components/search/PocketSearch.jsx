import React, {useState, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {getUserInfo} from '../../store/oauthSlice';

import {
  PocketCard,
  PocketItem,
  PocketImgDiv,
  PocketThumbnail,
  PocketUserImgContainer,
  PocketUserImg,
  PocketUserInfoContainer,
  PocketUserDiv,
  LikeShowDiv,
  LikeIcon,
  Item3,
  ShowIcon,
} from './PocketSearch.style';

import UserProfile from '../common/UserProfile';

// 임시데이터(card)
const items = [
  {
    icon: 'face',
    copy: '01. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: 'pets',
    copy: '02. Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    icon: 'stars',
    copy: '03. Consectetur adipiscing elit.',
  },
  {
    icon: 'invert_colors',
    copy: '04. Ut enim ad minim veniam, quis nostrud exercitation.',
  },
  {
    icon: 'psychology',
    copy: '05. Llamco nisi ut aliquip ex ea commodo consequat.',
  },
  {
    icon: 'brightness_7',
    copy: '06. Misi ut aliquip ex ea commodo consequat.',
  },
  {
    icon: 'brightness',
    copy: '07. Misi ut aliquip ex ea commodo consequat.',
  },
  {
    icon: 'brightness',
    copy: '07. Misi ut aliquip ex ea commodo consequat.',
  },
  {
    icon: 'brightness',
    copy: '07. Misi ut aliquip ex ea commodo consequat.',
  },
  {
    icon: 'brightness',
    copy: '07. Misi ut aliquip ex ea commodo consequat.',
  },
  {
    icon: 'brightness',
    copy: '07. Misi ut aliquip ex ea commodo consequat.',
  },
  {
    icon: 'brightness',
    copy: '07. Misi ut aliquip ex ea commodo consequat.',
  },
];

const PocketSearch = () => {
  const [item, setItem] = useState(items);
  const [visible, setVisible] = useState(false); //프로필 모달 보이게 안보이게
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

  const navigate = useNavigate();

  // port 클릭시 이동 => 수정필요
  const pocketClickHandler = () => {
    navigate('/room/1');
  };

  return (
    <>
      <PocketCard>
        {item.map(it => {
          const {icon, copy} = it;
          return (
            <PocketItem>
              {/* 마이포켓 썸네일 */}
              <PocketImgDiv onClick={pocketClickHandler}>
                <PocketThumbnail
                  src={process.env.PUBLIC_URL + '/assets/images/room.png'}
                />
              </PocketImgDiv>
              {/* 프로필 컴포넌트 */}
              <PocketUserInfoContainer ref={modalRef}>
                <PocketUserDiv
                  onClick={() => {
                    setVisible(!visible);
                  }}
                >
                  {/* 프로필 사진 */}
                  <PocketUserImgContainer>
                    <PocketUserImg
                      src={process.env.PUBLIC_URL + '/assets/images/room.png'}
                    />
                  </PocketUserImgContainer>
                  {/* 이름 */}
                  <div>{icon}</div>
                  {visible && <UserProfile />}
                </PocketUserDiv>
                {/* <div>{copy}</div> */}
                {/* 좋아요, 클릭 컴포넌트 */}
                <LikeShowDiv>
                  <LikeIcon />
                  <Item3>2</Item3>
                  <ShowIcon />
                  <div>5</div>
                </LikeShowDiv>
              </PocketUserInfoContainer>
            </PocketItem>
          );
        })}
      </PocketCard>
    </>
  );
};

export default PocketSearch;
