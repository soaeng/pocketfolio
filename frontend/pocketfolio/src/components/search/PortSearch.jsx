import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getUserInfo} from '../../store/oauthSlice';
import {roomDislike, roomLike} from '../../store/roomSlice';

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
  TagsDiv,
  Tag,
} from './PortSearch.style';

const PortSearch = ({data, handleLike, handleDisLike}) => {
  const [roomModal, setRoomModal] = useState(false); //프로필 모달 보이게 안보이게
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(state => state.oauth.user);

  // 이미지 오류인 경우 기본 이미지 보이게
  const onErrorImg = (e) => {
    e.target.src = '/assets/images/room_01.png'
  }

  // pocket 클릭시 이동 => 수정필요
  const pocketClickHandler = roomSeq => {
    navigate(`/room/${roomSeq}`);
  };

  // port 클릭시 이동 => 수정필요
  const portClickHandler = portSeq => {
    navigate(`/port/${portSeq}`);
  };

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
      <PortCard>
        {data.map(it => {
          const {portSeq, name, roomSeq, roomName, roomThumbnail, userSeq, userName, userProfilePic, like, hit, tags} = it;
          return (
            <PortItem key={portSeq}>
              {/* 마이포켓 썸네일 */}
              <PortImgDiv>
                <PortThumbnail
                  onError={onErrorImg}
                  src={roomThumbnail ? roomThumbnail : '/assets/images/room.png'}
                />
                {/* 호버시 보이는 버튼 */}
                <HoverDiv>
                  <PortSearchButton onClick={e => pocketClickHandler(roomSeq)}>
                    마이포켓 가기
                  </PortSearchButton>
                  <PortSearchButton onClick={e => portClickHandler(portSeq)}>
                    포트폴리오 보기
                  </PortSearchButton>
                </HoverDiv>
              </PortImgDiv>
              {/* 프로필 컴포넌트 */}
              <PortUserInfoContainer>
                <PortUserDiv>
                  {/* 프로필 사진 */}
                  <PortUserImgContainer>
                    <PortUserImg
                      src={userProfilePic ? userProfilePic : '/assets/images/room.png'}
                    />
                  </PortUserImgContainer>
                  {/* 이름 */}
                  <PortUserName>{name}</PortUserName>
                </PortUserDiv>
                {/* 좋아요, 클릭수 컴포넌트 */}
                <LikeShowDiv>
                {/* <IconDiv
                    onClick={e => handleLikeDislike(e, roomSeq, isLiked)}
                  >
                    {isLiked ? <LikeIcon /> : <DislikeIcon />}
                  </IconDiv> */}
                  <LikeIcon/>
                  <Item3>{like}</Item3>
                  <ShowIcon />
                  <div>{hit}</div>
                </LikeShowDiv>
              </PortUserInfoContainer>
              {/* 태그 */}
              {/* <TagsDiv>
                {tags && tags.map(tag => {
                  return (<Tag>{tag}</Tag>)
                })}
              </TagsDiv> */}
            </PortItem>
          );
        })}
      </PortCard>
    </>
  );
};

export default PortSearch;
