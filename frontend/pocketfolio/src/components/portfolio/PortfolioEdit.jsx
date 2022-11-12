import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {
  Wrapper,
  Background,
  Label,
  ContentDiv,
  Title,
  BottomBox,
  InputDiv,
  HashInput,
  HashOutter,
  HashList,
  BtnDiv,
  StyledBtn,
  IconDiv,
  ItemList,
  Item,
  Cancel,
  Add,
} from './AddPort.style';
import Nav from '../common/Nav';
import Editor from './Editor';
import {Body1} from '../../styles/styles.style';
import SaveModal from './SaveModal';
import ReactHtmlParser from 'html-react-parser';
import {getportDetail, modifiedPort} from '../../store/portSlice';
import toast, {Toaster} from 'react-hot-toast';

const PortfolioEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const portSeq = useParams();
  const port_id = parseInt(portSeq.port_id);

  const [portDetail, setPortDetail] = useState();

  // 저장 모달 오픈 변수
  const [modalOpen, setModalOpen] = useState(false);
  // 첨부 파일 리스트
  const [attachList, setAttachList] = useState([]);
  // 기존 파일 url
  const [existFile, setExistFile] = useState([]);
  // 새로 추가한 파일
  const [newFile, setNewFile] = useState([]);

  // 포트폴리오 제목, 내용 변수
  const [portContent, setPortContent] = useState({
    name: '포트폴리오 제목',
    summary: '',
  });
  // 해시태그 인풋값
  const [hashtag, setHashtag] = useState('');
  // 등록 된 해시태그
  const [hashArr, setHashArr] = useState([]);
  // 썸네일 변수
  const [thumbNail, setThumbNail] = useState('');

  // 포트폴리오 제목 저장
  const getValue = e => {
    const {name, value} = e.target;
    // console.log(name, value);
    setPortContent({
      ...portContent,
      [name]: value,
    });
  };

  // 랜더링 시 포트폴리오 상세 내용 get
  useEffect(() => {
    dispatch(getportDetail(port_id))
      .then(res => {
        const data = res.payload;
        setHashArr(data.tags);
        setAttachList(data.urls);
        setExistFile(data.urls);
        setPortContent({
          ...portContent,
          name: data.name,
          summary: data.summary,
        });
        setThumbNail(data.thumbnail);
      })
      .catch(err => {
        alert('목록 불러오기 실패');
      });
  }, []);

  // 해시태그 입력
  const onChangeHashtag = e => {
    setHashtag(e.target.value);
  };

  // 해시태그 입력창에서 엔터 눌렀을 때,
  const onKeyUp = e => {
    // 해시태그 배열에 추가 후 입력 창 초기화 (공백값 제외)
    if (e.keyCode === 13 && e.target.value.trim() !== '') {
      setHashArr(hashArr => [...hashArr, hashtag]);

      setHashtag('');
    }
  };

  // 해시태그 삭제
  const deleteHash = e => {
    let selected = e.target.getAttribute('value');
    const result = hashArr.filter(content => content !== selected);
    setHashArr(result);
  };

  // 취소 버튼 클릭 시 /port 로 이동
  const clickCancel = () => {
    navigate('/port');
  };

  // 모달 관련 변수,함수
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  // 파일 첨부 함수
  const fileInput = React.useRef(null);
  const handleButtonClick = e => {
    fileInput.current.click();
  };
  const handleChange = e => {
    if (e.target.files[0] !== undefined) {
      setAttachList(attachList => [...attachList, e.target.files[0]]);
      setNewFile(newFile => [...newFile, e.target.files[0]]);
    }
  };

  // 파일 첨부 취소
  const cancelAttach = e => {
    let selected = e.target.getAttribute('value');
    const result = attachList.filter(content => content.name !== selected);
    const newResult = newFile.filter(content => content.name !== selected);
    const oldResult = existFile.filter(content => content.name !== selected);
    setAttachList(result);
    setExistFile(oldResult);
    setNewFile(newResult);
  };

  // 썸네일 첨부
  const thumbNailInput = React.useRef(null);
  const thumbButtonClick = e => {
    thumbNailInput.current.click();
  };
  const uploadThumbnail = e => {
    const file = e.target.files[0];
    setThumbNail(file);
  };

  // 썸네일 첨부 취소
  const cancelThumb = () => {
    setThumbNail('');
  };

  console.log('썸넬', thumbNail);
  // 포트폴리오 제출 함수
  const savePortFolio = () => {
    const form = new FormData();

    const port = JSON.stringify({
      name: portContent.name,
      summary: portContent.summary,
      tags: hashArr,
    });
    form.append('portfolio', new Blob([port], {type: 'application/json'}));

    const existfile = JSON.stringify(existFile);
    form.append('urls', new Blob([existfile], {type: 'application/json'}));

    let files = newFile;
    for (let i = 0; i < files.length; i++) {
      form.append('files', files[i]);
    }
    form.append('thumbnail', thumbNail);

    dispatch(modifiedPort({form, port_id}))
      .unwrap()
      .then(res => {
        closeModal();
        toast.success('포트폴리오가 수정 되었습니다.');
        const move = setTimeout(() => {
          navigate(`/port/${port_id}`);
        }, 1500);
        move();
      });
  };

  console.log('썸네일', thumbNail);
  return (
    <Background>
      <Nav></Nav>
      <Toaster
        position="top-center"
        containerStyle={{
          position: 'absolute',
        }}
        toastOptions={{
          duration: 3000,
          style: {
            background: '#fff',
            color: '#333333',
            fontSize: '0.85rem',
          },
        }}
      />
      <Wrapper className="wrapper">
        <ContentDiv>
          <Label>제목</Label>
          <Title
            autoComplete="off"
            placeholder={portContent.name}
            onChange={getValue}
            name="name"
          ></Title>
        </ContentDiv>

        <ContentDiv>
          <Label>본문</Label>
          <Editor portContent={portContent} setPortContent={setPortContent} />
        </ContentDiv>

        <ContentDiv className="bottom">
          <BottomBox className="hashWrap">
            <Label>해시태그</Label>
            <InputDiv>
              {/* <HashIcon /> */}
              <HashInput
                className="HashInput"
                name="hashtag"
                value={hashtag}
                onChange={onChangeHashtag}
                onKeyUp={onKeyUp}
                placeholder=" # 포켓폴리오"
              />
            </InputDiv>
            <HashList>
              {hashArr.map((item, idx) => (
                <HashOutter key={idx} value={item} onClick={deleteHash}>
                  # {item}
                </HashOutter>
              ))}
            </HashList>
          </BottomBox>

          <BottomBox className="attachWrap">
            <Label className="attachLabel">파일첨부</Label>
            <IconDiv className="file">
              <Add onClick={handleButtonClick}></Add>
            </IconDiv>
            <input
              type="file"
              ref={fileInput}
              onChange={handleChange}
              multiple="multiple"
              style={{display: 'none'}}
            />
            <ItemList>
              {attachList.map((item, idx) => (
                <Item key={idx}>
                  {item.name}
                  <IconDiv>
                    <Cancel onClick={e => cancelAttach(e)} value={item.name} />
                  </IconDiv>
                </Item>
              ))}
            </ItemList>
          </BottomBox>

          <BottomBox>
            <Label>썸네일</Label>
            <IconDiv>
              <Add onClick={thumbButtonClick}></Add>
            </IconDiv>
            <input
              type="file"
              ref={thumbNailInput}
              accept="image/*"
              onChange={uploadThumbnail}
              style={{display: 'none'}}
            />
            {thumbNail.length !== 0 ? (
              <Item>
                {thumbNail.name}
                <IconDiv>
                  <Cancel onClick={cancelThumb} />
                </IconDiv>
              </Item>
            ) : null}
          </BottomBox>
        </ContentDiv>
      </Wrapper>
      <BtnDiv>
        <StyledBtn className="cancel" onClick={clickCancel}>
          <Body1>취소</Body1>
        </StyledBtn>
        <StyledBtn className="save" onClick={openModal}>
          <Body1>저장</Body1>
        </StyledBtn>
      </BtnDiv>

      <SaveModal
        open={modalOpen}
        close={closeModal}
        save={savePortFolio}
      ></SaveModal>

      {/* 포트폴리오 로우 데이터 */}
      {/* <div>
        {portContent.title}
        {ReactHtmlParser(portContent.content)}
      </div> */}

      {/* 유저에게 보여져야 할 포트폴리오 */}
      {/* <Viewer content={portContent.content} /> */}
    </Background>
  );
};

export default PortfolioEdit;
