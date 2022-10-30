import React, {Component} from 'react';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {Wrapper, Background} from './PortfolioEdit.style';
import Nav from '../common/nav';
import Editor from './Editor';


const PortfolioEdit = () => {
  return (
      <Background>
        <Wrapper className="wrapper">
          <Editor/>
        </Wrapper>
      </Background>
  );
};

export default PortfolioEdit;