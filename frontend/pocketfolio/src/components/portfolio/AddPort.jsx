import React, {useState, useCallback, useEffect} from 'react';
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
} from './AddPort.style';
import Nav from '../common/nav';
import Editor from './Editor.test';
import {Body1} from '../../styles/styles.style';
import ReactHtmlParser from 'html-react-parser';

const AddPort = () => {
  const navigate = useNavigate();
  // 포트폴리오 제목, 내용 변수
  const [portContent, setPortContent] = useState({
    title: '',
    content: '',
    hashtag: [],
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
  const onKeyUp = (e) => {
    const {name} = e.target
    
    // 해시태그 배열에 추가 후 입력 창 초기화 (공백값 제외)
    if (e.keyCode === 13 && e.target.value.trim() !== '') {
      setHashArr(hashArr => [...hashArr, hashtag]);
      setPortContent({
        ...portContent,
        [name]: hashArr,
      });
      setHashtag('')
      console.log('엔터 눌렀는데 추가됐냐?',hashArr)
    }
  };

  // 해시태그 삭제
  const deleteHash = e => {
    let selected = e.target.getAttribute('value');
    const result = hashArr.filter(content => content !== selected);
    setHashArr(result);
  };

  // 태그가 적용된 뷰어
  const Viewer = ({content}) => (
    <div
      className="ck-content"
      dangerouslySetInnerHTML={{__html: content}}
    ></div>
  );


  const clickCancel = () =>{
    navigate('/port')
  }
  console.log(hashArr);
  // console.log(portContent);


  
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

        <ContentDiv>
          <Label>해시태그</Label>
          <HashDiv className="HashWrap">
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
        </ContentDiv>
      </Wrapper>
      <BtnDiv>
        <StyledBtn className="cancel">
          <Body1 onClick={clickCancel}>취소</Body1>
        </StyledBtn>
        <StyledBtn className="save">
          <Body1>저장</Body1>
        </StyledBtn>
      </BtnDiv>

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
