import React, {useState, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {getSearch} from '../../store/searchSlice';
import {getUserInfo} from '../../store/oauthSlice';

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
  Select,
  SelectOption,
  FilterDiv,
  DivTest,
  Tabs,
  Tab,
} from './Search.style';

import PocketSearch from './PocketSearch';
import PortSearch from './PortSearch';
import UserSearch from './UserSearch';

// 임시데이터(tag)
const tags = [
  'All',
  '웹기술',
  '미술',
  '웹 디자이너',
  'Python',
  'Django',
  'React',
  '순수미술',
  '작곡',
  '기타',
];

// filter options
const filterOptions = [
  {value: 1, name: '좋아요순'},
  {value: 2, name: '조회순'},
  {value: 3, name: '팔로우순'},
];

// filter component
const Filter = props => {
  const handleChange = e => {
    props.setSort(e.target.value);
  };

  return (
    <Select onChange={handleChange}>
      {props.options.map(option => (
        <SelectOption
          value={option.value}
          defaultValue={props.defaultValue === option.value}
        >
          {option.name}
        </SelectOption>
      ))}
    </Select>
  );
};

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // 카테고리
  const [category, setCategory] = useState(0);
  // 카테고리(3개: 포켓, 포트폴리오, 유저)
  const [searchMode, setSearchMode] = useState('room');
  // 정렬
  const [sort, setSort] = useState(1);
  // 페이지당 보이는 개수
  const size = 20;
  // 검색 결과가 저장되는 상태
  const [data, setData] = useState([]);
  // 검색어
  const [word, setWord] = useState('');
  // 페이지
  const [page, setPage] = useState(1);
  // 특정 유저정보 담을 상태
  const [userInfo, setUserInfo] = useState([]);

  /** params: 이진수 */
  const selectCategory = (e, bin_int) => {
    if (category & bin_int) {
      setCategory(category - bin_int);
    } else {
      setCategory(category + bin_int);
    }
  };

  const selectSearchMode = (e, searchMode) => {
    setSearchMode(searchMode);
  };

  // 검색 요청 함수
  const getData = async () => {
    const params = {
      search: location.state.search,
      sort: location.state.sort,
      // category: location.state.category,
      category: 2047,
      size: size,
      page: location.state.page,
    };
    const {payload} = await dispatch(getSearch({params, searchMode}));
    setData(payload);
  };

  // 특정 유저정보 조회 함수
  // const getUserInfo = async () => {
  //   const {payload} = await dispatch(getUserInfo(userSeq));
  //   setUserInfo(payload);
  //   console.log(payload, '특정 유저정보');
  // };

  // useEffect(() => {
  //   getUserInfo();
  // }, []);

  // 입력창 변화 감지
  const onChange = e => {
    setWord(e.target.value);
  };

  // 검색어 창 입력
  const onSubmit = async event => {
    event.preventDefault();
    navigate('/search', {
      state: {
        search: word,
        sort: sort,
        // category: category,
        category: 2047,
        size: size,
        page: 1,
      },
    });
    getData();
    setWord(''); //submit 후 창 비우기
  };

  // 검색어 창 엔터시 입력
  const keyDownHandler = event => {
    if (event.key === 'Enter') {
      //아무것도 입력하지 않은 경우 submit 방지
      if (word.length !== 0) {
        setWord(word);
        onSubmit(event);
      }
    }
  };

  // 최상단 이동 버튼
  const clickHandlerTop = e => {
    // 이미 최상단일 경우 그냥 return
    if (!window.scrollY) return;

    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  // 스크롤 test
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    // console.log('스크롤 이벤트 발생');

    if (scrollTop + clientHeight >= scrollHeight) {
      // console.log('페이지 끝에 스크롤이 닿았음');
      setPage(prev => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    getData();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

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
        <Container>
          <SearchIcon />
          <SearchInput
            placeholder="검색어를 입력해주세요"
            onKeyDown={keyDownHandler}
            onChange={onChange}
            value={word}
          />
        </Container>
        {/* 카테고리 */}
        {/* <Tabs> */}
        <Tab
          searchMode={searchMode}
          name={'room'}
          onClick={e => selectSearchMode(e, 'room')}
        >
          마이포켓
        </Tab>
        <Tab
          searchMode={searchMode}
          name={'portfolio'}
          onClick={e => selectSearchMode(e, 'portfolio')}
        >
          포트폴리오
        </Tab>
        <Tab
          searchMode={searchMode}
          name={'user'}
          onClick={e => selectSearchMode(e, 'user')}
        >
          유저
        </Tab>
        {/* </Tabs> */}
      </Container1>
      {/* 태그 */}
      {searchMode === 'portfolio' ? null : (
        <TagContainer>
          {tags.map((tag, idx) => {
            return (
              <Tag
                category={category}
                onClick={e => selectCategory(e, 2 ** (tags.length - idx - 1))}
                key={idx}
                style={
                  !!((2 ** (tags.length - idx - 1)) & category)
                    ? {
                        backgroundColor: '#e75452',
                        color: '#fff',
                        border: 'none',
                      }
                    : {
                        backgroundColor: '#fff',
                        color: 'darkgray',
                        border: '1px solid darkgray',
                      }
                }
              >
                {tag}
              </Tag>
            );
          })}
        </TagContainer>
      )}
      <DivTest>
        {/* 필터 */}

        <FilterDiv>
          <Filter options={filterOptions} setSort={setSort} />
        </FilterDiv>
        {/* 검색 리스트 목록 */}
        {searchMode === 'room' ? <PocketSearch /> : null}
        {searchMode === 'portfolio' ? <PortSearch /> : null}
        {searchMode === 'user' ? <UserSearch /> : null}
      </DivTest>
    </>
  );
};

export default Search;
