import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

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
              <PocketUserInfoContainer>
                <PocketUserDiv>
                  {/* 프로필 사진 */}
                  <PocketUserImgContainer>
                    <PocketUserImg
                      src={process.env.PUBLIC_URL + '/assets/images/room.png'}
                    />
                  </PocketUserImgContainer>
                  {/* 이름 */}
                  <div>{icon}</div>
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
