import React, {useState} from 'react';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import {uploadImage} from '../../store/portSlice';
import {useDispatch} from 'react-redux';

export default function MyEditor(props) {
  const dispatch = useDispatch();
  const [imgUrl, setImgUrl] = useState('');
  const [test, setTest] = useState([]);

  const {portContent, setPortContent, addImgHandle} = props;

  // 이미지 업로드 함수
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const imageForm = new FormData();
          // 이미지 경로
          setImgUrl(loader._reader._data);
          loader.file.then(file => {
            imageForm.append('image', file);
            dispatch(uploadImage(imageForm))
              .then(res => {
                const imgData = res.payload.data;
                addImgHandle(imgData.imageSeq, imgData.url);
                resolve({
                  default: `${imgData.url}` ,
                });
              })
              .catch(err => {
                reject(err);
              });
          });
        });
      },
    };
  }

  // 이미지 업로드 플러그인
  function uploadPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = loader => {
      return uploadAdapter(loader);
    };
  }

  return (
    <div className="Editor">
      <CKEditor
        data={portContent.summary}
        editor={DecoupledEditor}
        onReady={editor => {
          editor.ui
            .getEditableElement()
            .parentElement.insertBefore(
              editor.ui.view.toolbar.element,
              editor.ui.getEditableElement(),
            );

          // this.editor = editor;
        }}
        config={{
          extraPlugins: [uploadPlugin],
          fontSize: {
            options: [
              14,
              15,
              16,
              17,
              18,
              19,
              'default',
              21,
              22,
              23,
              24,
              25,
              26,
              27,
              28,
            ],
          },
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setPortContent({
            ...portContent,
            summary: data,
          });
        }}
      />
    </div>
  );
}
