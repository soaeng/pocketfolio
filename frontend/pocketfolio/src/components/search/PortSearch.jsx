import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

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
} from './PortSearch.style';

const PortSearch = ({data, handleLike, handleDisLike}) => {
  console.log(data, 123)

  const navigate = useNavigate();

  // pocket 클릭시 이동 => 수정필요
  const pocketClickHandler = roomSeq => {
    navigate(`/room/${roomSeq}`);
  };

  // port 클릭시 이동 => 수정필요
  const portClickHandler = portSeq => {
    navigate(`/portfolios/${portSeq}`);
  };

  return (
    <>
      <PortCard>
        {data.map(it => {
          const {portSeq, name, roomSeq, roomName, roomThumbnail, userSeq, userName, userProfilePic, like, hit, tags} = it;
          return (
            <PortItem key={roomSeq}>
              {/* 마이포켓 썸네일 */}
              <PortImgDiv>
                <PortThumbnail
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
                      src={process.env.PUBLIC_URL + '/assets/images/room.png'}
                    />
                  </PortUserImgContainer>
                  {/* 이름 */}
                  <PortUserName>{name}</PortUserName>
                </PortUserDiv>
                {/* <div>{copy}</div> */}
                {/* 좋아요, 클릭 컴포넌트 */}
                <LikeShowDiv>
                  <LikeIcon />
                  <Item3>2</Item3>
                  <ShowIcon />
                  <div>5</div>
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
