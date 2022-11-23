import React, {useState, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {getUserInfo} from '../../store/oauthSlice';

import {
  PortCard,
  PortItem,
  PortImgDiv,
  PortThumbnail,
  PortSearchButton,
  HoverDiv,
  PortUserImgContainer,
  PortUserDiv,
  PortUserInfoContainer,
  PortUserImg,
  PortUserName,
  LikeIcon,
  LikeShowDiv,
  Item3,
  ShowIcon,
  Shadow,
} from './PortSearch.style';

import UserProfile from '../common/UserProfile';

const PortSearch = ({data}) => {
  const [userModal, setUserModal] = useState(false); //프로필 모달 보이게 안보이게
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 모달 닫는 함수
  const closeUserModal = (e) => {
    setUserModal(false);
  };

  // 이미지 오류인 경우 기본 이미지 보이게
  const onErrorImg = (e) => {
    e.target.src = '/assets/images/logo3.png'
  }

  // dropdown 외부 클릭시 dropdown창 꺼지게 하기(modal 같은 기능 구현)
  const modalRef = useRef(null);

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = event => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setUserModal(false);
      }
    };
    // 이벤트 핸들러 등록
    document.addEventListener('mousedown', handler);
    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener('mousedown', handler);
    };
    });

  // pocket 클릭시 이동
  const pocketClickHandler = roomSeq => {
    navigate(`/room/${roomSeq}`);
  };

  // port 클릭시 이동
  const portClickHandler = portSeq => {
    navigate(`/port/${portSeq}`);
  };

  // 특정 유저정보 담을 상태
  const [userInfo, setUserInfo] = useState([]);

  // 특정 유저정보 조회 함수
  const bringUserInfo = async userSeq => {
    const {payload} = await dispatch(getUserInfo(userSeq));
    setUserInfo(payload);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <PortCard>
        {data.map(it => {
          const {portSeq, name, roomSeq, roomThumbnail, userSeq, userProfilePic, like, hit} = it;
          return (
            <PortItem key={portSeq} ref={modalRef}>
              {/* 마이포켓 썸네일 */}
              <PortImgDiv>
                <PortThumbnail
                  onError={onErrorImg}
                  src={roomThumbnail ? roomThumbnail : '/assets/images/room_01.PNG'}
                />
                {/* 호버시 보이는 버튼 */}
                <HoverDiv>
                  <PortSearchButton onClick={e => pocketClickHandler(roomSeq)}>
                    마이포켓 가기
                  </PortSearchButton>
                  <PortSearchButton onClick={e => portClickHandler(portSeq)}>
                    포트폴리오 보기
                  </PortSearchButton>
                  <Shadow className="shadow" />
                </HoverDiv>
              </PortImgDiv>
              {/* 프로필 컴포넌트 */}
              <PortUserInfoContainer>
                <PortUserDiv
                  onClick={e => {
                    setUserModal(roomSeq);
                    bringUserInfo(userSeq);
                  }}
                >
                  {/* 프로필 사진 */}
                  <PortUserImgContainer>
                    <PortUserImg
                      src={userProfilePic ? userProfilePic : '/assets/images/user.png'}
                    />
                  </PortUserImgContainer>
                  {/* 이름 */}
                  <PortUserName>{name.length >= 12 ? name.slice(0, 12) : name}</PortUserName>
                </PortUserDiv>
                {roomSeq === userModal && <UserProfile userInfo={userInfo} closeUserModal={closeUserModal}/>}
                {/* 좋아요, 클릭수 컴포넌트 */}
                <LikeShowDiv>
                  <LikeIcon />
                  <Item3>{like ? like : 0}</Item3>
                  <ShowIcon />
                  <div>{hit ? hit : 0}</div>
                </LikeShowDiv>
              </PortUserInfoContainer>
            </PortItem>
          );
        })}
      </PortCard>
    </>
  );
};

export default PortSearch;
