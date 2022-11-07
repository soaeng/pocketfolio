import React, {useState, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';

import Nav from '../common/nav';
import {
  SearchInput,
  Container,
  Card,
  Item,
  Tag,
  TagContainer,
  RecCarImgDiv,
  RecCarThumbnail,
} from './Search.style';

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
  {
    icon: 'brightness',
    copy: '07. Misi ut aliquip ex ea commodo consequat.',
  },
];

// 임시데이터(tag)
const tags = [
  '웹기술',
  '미술',
  '웹 디자이너',
  'Python',
  'Django',
  'React',
  '순수미술',
  '작곡',
];

const Search = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState(items);
  const carousel = useRef(null);

  // 검색어
  const [word, setWord] = useState('');

  // 검색어 창 입력
  const onSubmit = async e => {
    e.preventDefault();
    navigate('/search', {
      state: {
        search: word,
      },
    });
    setWord(''); //submit 후 창 비우기
  };

  // 검색어 창 엔터시 입력
  const keyDownHandler = event => {
    if (event.key === 'Enter') {
      setWord(word);
      onSubmit(event);
    }
  };

  const [page, setPage] = useState(1);

  // 스크롤 test
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    console.log('스크롤 이벤트 발생');

    if (scrollTop + clientHeight >= scrollHeight) {
      console.log('페이지 끝에 스크롤이 닿았음');
      setPage(prev => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* 네브바 */}
      <Nav />
      {/* 검색창 */}
      <Container>
        <SearchInput
          placeholder="검색어를 입력해주세요"
          onKeyDown={keyDownHandler}
        />
      </Container>
      <TagContainer>
        {tags.map(tag => {
          return <Tag>{tag}</Tag>;
        })}
      </TagContainer>
      {/* 검색 리스트 목록 */}
      <Card ref={carousel}>
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
  );
};

export default Search;
