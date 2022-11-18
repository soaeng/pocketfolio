import React, {useState, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getUserInfo} from '../../store/oauthSlice';
import {roomDislike, roomLike} from '../../store/roomSlice';

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
  DislikeIcon,
  IconDiv,
} from './PocketSearch.style';

import UserProfile from '../common/UserProfile';

const PocketSearch = ({data, handleLike, handleDisLike}) => {
  const [userModal, setUserModal] = useState(false); //프로필 모달 보이게 안보이게
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 모달 닫는 함수
  const closeUserModal = (e) => {
    setUserModal(false);
  };

  // 이미지 오류인 경우 기본 이미지 보이게
  const onErrorImg = (e) => {
    e.target.src = '/assets/images/room_01.png'
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

  // 마아포켓 클릭시 이동
  const pocketClickHandler = roomSeq => {
    navigate(`/room/${roomSeq}`);
  };

  const user = useSelector(state => state.oauth.user);

  // 좋아요, 좋아요 취소
  async function handleLikeDislike(e, roomSeq, isLiked) {
    if (user) {
      if (isLiked) {
        const {payload} = await dispatch(roomDislike(roomSeq));
        if (payload) {
          handleDisLike(roomSeq);
        }
      } else {
        const {payload} = await dispatch(roomLike(roomSeq));
        if (payload) {
          handleLike(roomSeq);
        }
      }
    }
  }
  
  // 특정 유저정보 담을 상태
  const [userInfo, setUserInfo] = useState([]);

  // 특정 유저정보 조회 함수
  const bringUserInfo = async userSeq => {
    const {payload} = await dispatch(getUserInfo(userSeq));
    setUserInfo(payload);
    console.log(payload, '특정 유저정보');
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <PocketCard >
        {data.map(it => {
          const {
            categoryName,
            hit,
            name,
            roomSeq,
            thumbnail,
            userName,
            userProfilePic,
            userSeq,
            isLiked,
            like,
          } = it;
          return (
            <PocketItem key={roomSeq} ref={modalRef}>
              {/* 마이포켓 썸네일 */}
              <PocketImgDiv onClick={e => pocketClickHandler(roomSeq)}>
                <PocketThumbnail
                  onError={onErrorImg}
                  src={thumbnail ? thumbnail : '/assets/images/room_01.png'}
                />
              </PocketImgDiv>
              {/* 프로필 컴포넌트 */}
              <PocketUserInfoContainer>
                <PocketUserDiv
                  onClick={e => {
                    setUserModal(roomSeq);
                    bringUserInfo(userSeq);
                  }}
                >
                  {/* 프로필 사진 */}
                  <PocketUserImgContainer>
                    <PocketUserImg
                      src={
                        userProfilePic
                          ? userProfilePic
                          : '/assets/images/user.png'
                      }
                    />
                  </PocketUserImgContainer>
                  {/* 이름 */}
                  <div>{userName}</div>
                </PocketUserDiv>
                {roomSeq === userModal && <UserProfile userInfo={userInfo} closeUserModal={closeUserModal}/>}
                {/* 좋아요, 클릭 컴포넌트 */}
                <LikeShowDiv>
                  <IconDiv
                    onClick={e => handleLikeDislike(e, roomSeq, isLiked)}
                  >
                    {isLiked ? <LikeIcon /> : <DislikeIcon />}
                  </IconDiv>
                  <Item3>{like}</Item3>
                  <ShowIcon />
                  <div>{hit}</div>
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
