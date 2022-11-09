// import React, {useState} from 'react';
// import {CKEditor} from '@ckeditor/ckeditor5-react';
// import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';


// export default function PortEdit({portContent, setPortContent}) {
//   const [imgUrl, setImgUrl] = useState('');
//   const [newContent, setNewContent] = useState('')

//   console.log('에디터 테스트',portContent)
//   // 이미지 업로드 함수
//   function uploadAdapter(loader) {
//     return {
//       upload: () => {
//         return new Promise((resolve, reject) => {
//           const body = new FormData();
//           // 이미지 경로
//           setImgUrl(loader._reader._data);
//           loader.file.then(file => {
//             body.append('files', file);

//             // let headers = new Headers();
//             // headers.append("Origin", "http://localhost:3000");
//             // fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
//             //   method: 'post',
//             //   body: body,
//             //   // mode: "no-cors"
//             // })
//             //   .then(res => res.json())
//             //   .then(res => {
//             //     resolve({
//             //       default: `${API_URL}/${res.filename}`,
//             //     });
//             //   })
//             //   .catch(err => {
//             //     reject(err);
//             //   });
//           });
//         });
//       },
//     };
//   }

//   // 이미지 업로드 플러그인
//   function uploadPlugin(editor) {
//     editor.plugins.get('FileRepository').createUploadAdapter = loader => {
//       console.log('로더', loader);
//       return uploadAdapter(loader);
//     };
//   }

//   return (
//     <div className="Editor">
//       <CKEditor
//         data={portContent.summary}
//         editor={DecoupledEditor}
//         onReady={editor => {
//           editor.ui
//             .getEditableElement()
//             .parentElement.insertBefore(
//               editor.ui.view.toolbar.element,
//               editor.ui.getEditableElement(),
//             );

//           // this.editor = editor;
//         }}
//         config={{
//           extraPlugins: [uploadPlugin],
//           fontSize: {
//             options: [
//               14,
//               15,
//               16,
//               17,
//               18,
//               19,
//               'default',
//               21,
//               22,
//               23,
//               24,
//               25,
//               26,
//               27,
//               28,
//             ],
//           },
//         }}
//         onChange={(event, editor) => {
//           const data = editor.getData();
//           setNewContent({
//             ...newContent,
//             summary: data,
//           });
//         }}
//       />
//       {/* <img src={imgUrl}></img> */}
//     </div>
//   );
// }
