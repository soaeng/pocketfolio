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
];

const PortSearch = () => {
  const [item, setItem] = useState(items);

  const navigate = useNavigate();

  // pocket 클릭시 이동 => 수정필요
  const pocketClickHandler = () => {
    navigate('/room/1');
  };

  // port 클릭시 이동 => 수정필요
  const portClickHandler = () => {
    navigate('/port');
  };

  return (
    <>
      <PortCard>
        {item.map(it => {
          const {icon, copy} = it;
          return (
            <PortItem>
              {/* 마이포켓 썸네일 */}
              <PortImgDiv>
                <PortThumbnail
                  src={process.env.PUBLIC_URL + '/assets/images/room.png'}
                />
                {/* 호버시 보이는 버튼 */}
                <HoverDiv>
                  <PortSearchButton onClick={pocketClickHandler}>
                    마이포켓 가기
                  </PortSearchButton>
                  <PortSearchButton onClick={portClickHandler}>
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
                  <PortUserName>{icon}</PortUserName>
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
