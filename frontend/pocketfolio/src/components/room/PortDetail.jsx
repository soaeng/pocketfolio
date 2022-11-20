import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {getportDetail} from '../../store/portSlice';
import {
  Container,
  Header,
  Title,
  Div,
  UserDiv,
  UserImgBox,
  UserImg,
  Name,
  Date,
  ContentDiv,
  Content,
  FileContainer,
  ShowFile,
  IconDiv,
  FileIcon,
  Text,
  Tags,
  Tag,
  FileList,
  FileItem,
  FileName,
  DownBox,
  DownIcon,
} from './PortDetail.style';

const PortDetail = ({nowPort, roomDto}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [showFiles, setShowFiles] = useState(false);

  // 데이터 불러오기
  async function loadData() {
    const {payload} = await dispatch(getportDetail(nowPort));
    setData(payload);
  }

  useEffect(() => {
    loadData();
  }, [nowPort]);

  return (
    data && (
      <Container>
        <Header>
          <Title>{data.name}</Title>
          <Div>
            <UserDiv>
              <UserImgBox>
                <UserImg
                  src={
                    roomDto.owner.profilePic
                      ? roomDto.owner.profilePic
                      : process.env.PUBLIC_URL + '/assets/images/logo3.png'
                  }
                />
              </UserImgBox>
              <Name>{roomDto.owner.name}</Name>
            </UserDiv>
            {data.created && (
              <Date>{`마지막 수정일: ${data.updated.substring(
                0,
                4,
              )}.${data.updated.substring(5, 7)}.${data.updated.substring(
                8,
                10,
              )} ${data.updated.substring(11, 16)}`}</Date>
            )}
          </Div>
        </Header>

        <ContentDiv>
          {data?.summary && (
            <Content dangerouslySetInnerHTML={{__html: data.summary}} />
          )}

          {data.urls && data.urls?.length !== 0 && (
            <FileContainer>
              <ShowFile onClick={() => setShowFiles(!showFiles)}>
                <IconDiv>
                  <FileIcon />
                </IconDiv>
                <Text>첨부파일</Text>
              </ShowFile>
              {showFiles && (
                <FileList>
                  {data.urls.map((url, idx) => (
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
          )}
        </ContentDiv>

        {data.tags && (
          <Tags>
            {data.tags.map((tag, idx) => (
              <Tag key={idx}>{`# ${tag}`}</Tag>
            ))}
          </Tags>
        )}
      </Container>
    )
  );
};

export default PortDetail;
