import React, {useState} from 'react';
import {
  Card,
  Item,
  RecCarImgDiv,
  RecCarThumbnail,
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

  return (
    <>
      <Card>
        {item.map(it => {
          const {icon, copy} = it;
          return (
            <Item>
              <RecCarImgDiv>
                <RecCarThumbnail
                  src={process.env.PUBLIC_URL + '/assets/images/room.png'}
                />
              </RecCarImgDiv>
              <div>{icon}</div>
              <div>{copy}</div>
            </Item>
          );
        })}
      </Card>
    </>
  )
}

export default PocketSearch