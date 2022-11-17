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
import {getportDetail, modifiedPort} from '../../store/portSlice';
import toast, {Toaster} from 'react-hot-toast';

const PortfolioEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const portSeq = useParams();
  const port_id = parseInt(portSeq.port_id);

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
  // 썸네일 이미지 파일을 담을 변수
  const [thumbNail, setThumbNail] = useState('');
  // 썸네일 이름, 미리보기 표기 변수
  const [thumbData, setThumbData] = useState({
    url: '',
    name: '',
  });
  // 썸네일 변화 감지 변수
  const [isChangeThumb, setIsChangeThumb] = useState(false);

  // 업로드 기록 (seq, url)
  const [uploadHistory, setUploadHisory] = useState([]);
  // 업로드 한 이미지 (post)
  const [uploadImg, setUploadImg] = useState([]);
  // 최종 등록할 이미지 (post)
  const [resultImg, setResultImg] = useState([]);

  // 포트폴리오 제목 저장
  const getValue = e => {
    const {name, value} = e.target;
    setPortContent({
      ...portContent,
      [name]: value,
    });
  };

  // 랜더링 시 기존 포트폴리오 상세 내용 get
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
        setThumbData({
          url: data.thumbnail,
          name: data.thumbnailName,
        });
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
    const hashInput = e.target.value;

    /// 해시태그 배열에 추가 후 입력 창 초기화
    // 빈문자, 공백, 특수문자 입력 불가
    if (e.keyCode === 13 && hashInput.trim() !== '') {
      // 특수문자, 공백 정규식
      const special = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
      const space = /\s/g;
      
      if (special.test(hashInput) || space.test(hashInput)) {
 
        toast.error('공백 및 특수문자 입력 불가', {
          position: 'bottom-left',
          duration: 2000,
        });
       
      } else {
        setHashArr(hashArr => [...hashArr, hashtag]);
        setHashtag('');
      }
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

  // 모달 오픈 함수
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

    // 기존 파일, 새로 추가한 파일 구분
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
    setIsChangeThumb(true);
    // 썸네일 미리보기
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    return new Promise(resolve => {
      reader.onload = () => {
        resolve();
        setThumbData({
          url: reader.result,
          name: file.name,
        });
      };
    });
  };

  // 썸네일 첨부 취소
  const cancelThumb = () => {
    setThumbNail('');
    setThumbData({
      name: null,
      url: null,
    });
    setIsChangeThumb(false)
  };

  // Editor에서 이미지 추가 시 실행
  const addImgHandle = (seq, url) => {
    setUploadHisory(uploadHistory => [
      ...uploadHistory,
      {
        id: seq,
        imgurl: url,
      },
    ]);
    setUploadImg(uploadImg => [...uploadImg, seq]);
  };

  // 최종적으로 제출할 imgSeq 찾기
  const compareImgList = () => {
    // 포폴 내용
    const content = portContent.summary;
    // src 추출용 정규식
    const imgSrcReg = /(<img[^>]*src\s*=\s*[\"']?([^>\"']+)[\"']?[^>]*>)/g;

    while (imgSrcReg.test(content)) {
      // summary 안의 src 값들을 하나씩 추출
      let src = RegExp.$2.trim();
      uploadHistory.forEach(function (val, idx) {
        if (src === val.imgurl) {
          setResultImg(resultImg => [...resultImg, val.id]);
          const newHistory = uploadHistory.splice(idx);
          setUploadHisory(newHistory);
          return false;
        }
      });
    }
  };


  // 포트폴리오 제출 함수
  const savePortFolio = () => {
    const form = new FormData();

    // 썸네일이 변경 되었을 때,
    if (isChangeThumb) {
      const port = JSON.stringify({
        name: portContent.name,
        summary: portContent.summary,
        tags: hashArr,
      });
      form.append('portfolio', new Blob([port], {type: 'application/json'}));
      form.append('thumbnail', thumbNail);
      // 썸네일 변경 없을 때,
    } else {
      const port = JSON.stringify({
        name: portContent.name,
        summary: portContent.summary,
        tags: hashArr,
        thumbnail: thumbData.url,
        thumbnailName: thumbData.name,
      });
      form.append('portfolio', new Blob([port], {type: 'application/json'}));
    }

    const uploadImage = JSON.stringify(uploadImg);
    const resultImage = JSON.stringify(resultImg);
    const existfile = JSON.stringify(existFile);

    form.append(
      'uploadImg',
      new Blob([uploadImage], {type: 'application/json'}),
    );
    form.append(
      'resultImg',
      new Blob([resultImage], {type: 'application/json'}),
    );

    form.append('urls', new Blob([existfile], {type: 'application/json'}));

    let files = newFile;
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        form.append('files', files[i]);
      }
    }
    compareImgList();
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
          <Editor
            portContent={portContent}
            setPortContent={setPortContent}
            addImgHandle={addImgHandle}
          />
        </ContentDiv>

        <ContentDiv className="bottom">
          <BottomBox className="hashWrap">
            <Label>해시태그</Label>
            <InputDiv>
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
            {thumbData.name !== undefined && thumbData.name !== null ? (
              <Item>
                {thumbData.name}
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
    </Background>
  );
};

export default PortfolioEdit;
