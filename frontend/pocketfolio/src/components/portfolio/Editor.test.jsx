import React from 'react';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Nav from '../common/nav';

const Editor = ({portContent, setPortContent}) => {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data=""
        config={{
          placeholder: '내용을 입력하세요.',
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setPortContent({
            ...portContent,
            content: data
          })
          console.log(portContent);
        }}
      />
    </div>
  );
};

export default Editor;
