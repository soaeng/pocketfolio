import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate, useLocation} from 'react-router-dom';
import {getportDetail} from '../../store/portSlice';
import toast, {Toaster} from 'react-hot-toast';
import Nav from '../common/Nav';

import {
  Background,
  Container,
  Content,
  Header,
  Summary,
  IconDiv,
  TitleDiv,
  Title,
  HeaderBottom,
  WriteDate,
  BackIcon,
  EditIcon,
  ContentDiv,
  FileContainer,
  ShowFile,
  FileIcon,
  Text,
  FileList,
  FileItem,
  FileName,
  DownBox,
  DownIcon,
  Tags,
  Tag,
} from './PortDetail.style';

const PortDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // portSeq
  const params = useParams();
  const port_id = parseInt(params.port_id);

  // 포트폴리오 내용
  const [portDetail, setPortDetail] = useState({urls: '없음'});
  // 작성일
  const [createDate, setCreateDate] = useState('');

  // 포트폴리오 상세 내용 조회
  useEffect(() => {
    dispatch(getportDetail(port_id))
      .then(res => {
        const data = res.payload;
        setPortDetail(data);
        setCreateDate(data.updated.slice(0, 10));
      })
      .catch(err => {
        alert('목록 불러오기 실패');
      });
  }, []);

  // 수정 페이지로 이동
  const moveEdit = () => {
    navigate(`/port/edit/${portDetail.portSeq}`);
  };

  // 목록으로 이동
  const movePortList = () => {
    navigate('/port');
  };

  const [showFiles, setShowFiles] = useState(false);
  console.log(portDetail);
  return (
    <Background>
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
      <Nav></Nav>
      <Container>
        <Content>
          <Header>
            <IconDiv>
              <BackIcon onClick={movePortList}></BackIcon>
            </IconDiv>
            <TitleDiv>
              <Title>{portDetail.name}</Title>
            </TitleDiv>
            <HeaderBottom>
              <IconDiv onClick={moveEdit} className="edit">
                <EditIcon></EditIcon>
              </IconDiv>
              <WriteDate>수정일 : {createDate}</WriteDate>
            </HeaderBottom>
          </Header>

          <ContentDiv>
            <oembed url="https://youtu.be/tEm9EyEPMYM"></oembed>
            <Summary
              className="summary"
              dangerouslySetInnerHTML={{__html: portDetail.summary}}
            />
            {/* <div>{ReactHtmlParser(portDetail.summary)}</div> */}

            {portDetail.urls && portDetail.urls?.length ? (
              <FileContainer>
                <ShowFile onClick={() => setShowFiles(!showFiles)}>
                  <IconDiv>
                    <FileIcon />
                  </IconDiv>
                  <Text>첨부파일</Text>
                </ShowFile>
                {showFiles && (
                  <FileList>
                    {portDetail.urls.map((url, idx) => (
                      <FileItem key={idx}>
                        <FileName className="name">{url.name}</FileName>
                        <DownBox href={url.url}>
                          <DownIcon />
                        </DownBox>
                      </FileItem>
                    ))}
                  </FileList>
                )}
              </FileContainer>
            ) : null}
          </ContentDiv>

          {portDetail.tags && (
            <Tags>
              {portDetail.tags.map((tag, idx) => (
                <Tag key={idx}>{`# ${tag}`}</Tag>
              ))}
            </Tags>
          )}
        </Content>
      </Container>
    </Background>
  );
};

export default PortDetail;
