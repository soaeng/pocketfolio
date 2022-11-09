import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {
  Wrapper,
  Background,
  Label,
  ContentDiv,
  Title,
  Img,
  HashDiv,
  InputDiv,
  HashInput,
  HashOutter,
  HashList,
  BtnDiv,
  StyledBtn,
  HashIcon,
  FileAttach,
  FileIcon,
  Form,
} from './AddPort.style';
import Nav from '../common/Nav';
import Editor from './Editor.test';
import {Body1} from '../../styles/styles.style';
import SaveModal from './SaveModal';
import ReactHtmlParser from 'html-react-parser';
import {registPortfolio} from '../../store/portSlice';

const AddPort = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // 저장 모달 오픈 변수
  const [isOpen, setIsOpen] = useState(false);

  // 첨부 파일 리스트
  const [attachList, setAttachList] = useState([]);

  // 포트폴리오 제목, 내용 변수
  const [portContent, setPortContent] = useState({
    name: '',
    summary: '',
  });

  // 해시태그 인풋값
  const [hashtag, setHashtag] = useState('');
  // 등록 된 해시태그
  const [hashArr, setHashArr] = useState([]);

  // 포트폴리오 제목 저장
  const getValue = e => {
    const {name, value} = e.target;
    setPortContent({
      ...portContent,
      [name]: value,
    });
  };

  // 해시태그 입력
  const onChangeHashtag = e => {
    setHashtag(e.target.value);
  };

  // 해시태그 입력창에서 엔터 눌렀을 때,
  const onKeyUp = e => {
    const {name} = e.target;

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

  // 저장 버튼 클릭 시 모달 open
  const saveClick = () => {
    setIsOpen(true);
  };

  // 추가
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  // 파일 첨부
  const fileInput = React.useRef(null);
  const handleButtonClick = e => {
    fileInput.current.click();
  };

  const handleChange = e => {
    setAttachList(attachList => [...attachList, e.target.files[0]]);
    // const formData = new FormData()
    // formData.append('file', e.target.files[0])
    // for (let value of formData.values()) {
    //   console.log(value);
    // }
  };

  // 포트폴리오 제출 함수
  const savePortFolio = () => {
    const formData = new FormData();
    let files = attachList;
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    // 폼 데이터 value 확인
    for (let key of formData.values()) {
      console.log(key);
    }

    const data = {
      portfolio: {
        name: portContent.name,
        summary: portContent.summary,
        tags: hashArr,
      },
      thumbnail: 'string',
      files: formData,
    };

    dispatch(registPortfolio(data))
      .unwrap()
      .then(res => {
        console.log(res);
      });

    // 폼데이터는 헤더 설정 해줘야 함.
    // axios({
    //   method: "post",
    //   url: STREAMING_COMMENT_URL,
    //   data: formData,
    //   headers: { "Content-Type": "multipart/form-data", Authorization: localStorage.getItem("access_token") }
    // });
  };

  // 태그가 적용된 뷰어
  const Viewer = ({content}) => (
    <div
      className="ck-content"
      dangerouslySetInnerHTML={{__html: content}}
    ></div>
  );

  return (
    <Background>
      <Nav></Nav>
      <Wrapper className="wrapper">
        <ContentDiv>
          <Label>제목</Label>
          <Title
            className="title"
            autoComplete="off"
            placeholder="포트폴리오 제목"
            onBlur={getValue}
            name="title"
          ></Title>
        </ContentDiv>

        <ContentDiv>
          <Label>본문</Label>

          <Editor portContent={portContent} setPortContent={setPortContent} />
        </ContentDiv>

        <ContentDiv className="hash">
          <HashDiv className="HashWrap">
            <Label>해시태그</Label>
            <InputDiv>
              <HashIcon />
              <HashInput
                className="HashInput"
                name="hashtag"
                value={hashtag}
                onChange={onChangeHashtag}
                onKeyUp={onKeyUp}
                placeholder="# 해시태그 입력"
              />
            </InputDiv>
            <HashList>
              {hashArr.map((item, idx) => (
                <HashOutter key={idx} value={item} onClick={deleteHash}>
                  # {item}
                </HashOutter>
              ))}
            </HashList>
          </HashDiv>

          <FileAttach>
            <Label>파일첨부</Label>

            <FileIcon onClick={handleButtonClick}>파일 업로드</FileIcon>
            <Form>
              <input
                type="file"
                name="port_files"
                ref={fileInput}
                onChange={handleChange}
                multiple="multiple"
                style={{display: 'none'}}
              />
            </Form>
          </FileAttach>
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
        onClose={() => {
          setIsOpen(false);
        }}
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

export default AddPort;
