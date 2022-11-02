import React, {useState} from 'react';
import {
  Wrapper,
  Background,
  Header,
  TitleDiv,
  Title,
  Img,
} from './AddPort.style';
import Nav from '../common/nav';
import Editor from './Editor.test';

const AddPort = () => {
  
  // 포트폴리오 제목, 내용 변수
  const [portContent, setPortContent] = useState({
    title: '',
    content: '',
  });

  // 포트폴리오 제목 저장
  const getValue = e => {
    const {name, value} = e.target;
    setPortContent({
      ...portContent,
      [name]: value,
    });
    console.log(portContent);
  };

  return (
    <Background>
      {/* <Nav></Nav> */}
      <Wrapper className="wrapper">
        <Header>포트폴리오 관리하기</Header>
        <TitleDiv>
          <Img src={process.env.PUBLIC_URL + '/assets/images/pencil.png'}></Img>
          <Title
            className="title"
            type="text"
            autoComplete="off"
            placeholder="포트폴리오 제목"
            onChange={getValue}
            name="title"
          ></Title>
        </TitleDiv>
        <Editor portContent={portContent} setPortContent={setPortContent} />
      </Wrapper>
    </Background>
  );
};

export default AddPort;
