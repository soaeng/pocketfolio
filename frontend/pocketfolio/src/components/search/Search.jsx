import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import Nav from '../common/Nav';
import {
  Container,
  Container1,
  SearchInput,
  SearchIcon,
  Tag,
  TagContainer,
  TopButtonIcon,
  TopButton,
} from './Search.style';

import PocketSearch from './PocketSearch';
import PortSearch from './PortSearch';
import UserSearch from './UserSearch';

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

// select box options
const options = [
	{ value: "pocket", name: "마이포켓" },
	{ value: "portfolio", name: "포트폴리오" },
	{ value: "user", name: "유저" },
];

// select box component
const SelectBox = (props) => {
  const handleChange = (e) => {
		console.log(e.target.value);
	}

	return (
		<select onChange={handleChange}>
			{props.options.map((option) => (
				<option
					value={option.value}
					defaultValue={props.defaultValue === option.value}
				>
					{option.name}
				</option>
			))}
		</select>
	);
};

const Search = () => {
  const navigate = useNavigate();

  // 검색어
  const [word, setWord] = useState('');
  console.log(word, '검색어')

  // 입력창 변화 감지
  const onChange = (e) => {
    setWord(e.target.value);
  };

  // 검색어 창 입력
  const onSubmit = async event => {
    event.preventDefault();
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
    };
  };

  // 최상단 이동 버튼
  const clickHandlerTop = e => {
    // 이미 최상단일 경우 그냥 return
    if (!window.scrollY) return;

    window.scrollTo({top: 0, behavior: 'smooth'});
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
      {/* top 버튼 */}
      <TopButton onClick={clickHandlerTop}>
        <TopButtonIcon />
      </TopButton>
      {/* 검색창 */}
      <Container1>
        <SelectBox options={options} defaultValue="pocket"/>
        <Container>
          <SearchIcon />
          <SearchInput
            placeholder="검색어를 입력해주세요"
            onKeyDown={keyDownHandler}
            onChange={onChange}
            value={word}
          />
        </Container>
      </Container1>
      {/* 태그 */}
      <TagContainer>
        {tags.map(tag => {
          return <Tag>{tag}</Tag>;
        })}
      </TagContainer>
      {/* 검색 리스트 목록 */}
      <PocketSearch/>    
      <PortSearch />
      <UserSearch/>
    </>
  );
};

export default Search;
