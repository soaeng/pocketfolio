import {useEffect} from 'react';
import {useState} from 'react';
import ObjectItem from './ObjectItem';
import {
  Container,
  Tabs,
  Tab,
  ItemBox,
  ScrollBox,
  PageContainer,
  IconBox,
  LeftIcon,
  RightIcon,
} from './ObjectList.style';
import {useDispatch} from 'react-redux';
import {getItemCategory, getItemList} from '../../store/itemSlice';

const ObjectList = ({appendArrange}) => {
  const dispatch = useDispatch();

  // 카테고리 목록, 현재 카테고리 위치, 현재 페이지
  const [categoryList, setCategoryList] = useState([]);
  const [nowCategory, setNowCategory] = useState(1);
  const [totalPage, setTotalPage] = useState([1]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  // 아이템 데이터
  const [data, setData] = useState([]);

  // 카테고리 변경
  const changeCategory = state => {
    const total = Array.from({length: state.lastPage}, (v, i) => i + 1);

    setNowCategory(state.itemCategorySeq);
    setTotalPage(total);
    setLastPage(state.lastPage);
    setPage(1);
  };

  // 아이템 카테고리 조회
  const getCategoryList = async () => {
    const {payload} = await dispatch(getItemCategory());
    setCategoryList(payload);

    const total = Array.from({length: payload['0'].lastPage}, (v, i) => i + 1);
    setLastPage(payload['0'].lastPage);
    setTotalPage(total);
  };

  // 아이템 목록 조회
  const getData = async () => {
    const {payload} = await dispatch(
      getItemList({
        category: nowCategory,
        page,
      }),
    );
    setData(payload);
  };

  // 로딩 시, 아이템 카테고리 불러오기
  useEffect(() => {
    getCategoryList();
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [nowCategory, page]);

  return (
    <Container>
      <Tabs>
        {categoryList.map((item, idx) => (
          <Tab
            onClick={() => changeCategory(item)}
            className={nowCategory === item.itemCategorySeq && 'active'}
            key={idx}
          >
            {item.nameKor}
          </Tab>
        ))}
      </Tabs>

      <ScrollBox>
        <ItemBox>
          {data.map((item, idx) => (
            <ObjectItem item={item} key={idx} appendArrange={appendArrange} />
          ))}
        </ItemBox>
        <PageContainer>
          <IconBox
            className={page === 1 && 'disappear'}
            onClick={() => {
              setPage(page - 1);
            }}
          >
            <LeftIcon />
          </IconBox>
          {totalPage.map(item => (
            <IconBox
              key={item}
              className={page === item && 'active'}
              onClick={e => setPage(parseInt(e.target.innerText))}
            >
              {item}
            </IconBox>
          ))}
          <IconBox
            className={page === lastPage && 'disappear'}
            onClick={() => {
              setPage(page + 1);
            }}
          >
            <RightIcon />
          </IconBox>
        </PageContainer>
      </ScrollBox>
    </Container>
  );
};

export default ObjectList;