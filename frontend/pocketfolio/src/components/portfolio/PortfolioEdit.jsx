import React, {Component} from 'react';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {Wrapper, Background, Header} from './PortfolioEdit.style';
import Nav from '../common/nav';
import Editor from './Editor.test';


const PortfolioEdit = () => {
  return (
    
      <Background>
        <Wrapper className="wrapper">
        <Header>포트폴리오 관리하기</Header>
          <Editor/>
        </Wrapper>
      </Background>

  );
};

export default PortfolioEdit;