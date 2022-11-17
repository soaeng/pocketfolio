import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {getportDetail} from '../../store/portSlice';
import Nav from '../common/Nav';

import {
  Background,
  Container,
  Content,
  Header,
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
  const [portDetail, setPortDetail] = useState({});
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
  console.log(portDetail.summary);
  return (
    <Background>
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
              <IconDiv onClick={moveEdit} className='edit'>
                <EditIcon></EditIcon>
              </IconDiv>
              <WriteDate>수정일 : {createDate}</WriteDate>
            </HeaderBottom>
          </Header>

          <ContentDiv>
            <div dangerouslySetInnerHTML={{__html: portDetail.summary}}></div>
            {portDetail.urls && portDetail.urls.length && (
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
                      <FileItem>
                        <FileName className="name">{url.name}</FileName>
                        <DownBox href={url.url}>
                          <DownIcon />
                        </DownBox>
                      </FileItem>
                    ))}
                  </FileList>
                )}
              </FileContainer>
            )}
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
