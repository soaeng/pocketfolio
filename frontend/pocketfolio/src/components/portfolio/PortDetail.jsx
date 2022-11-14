import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {getportDetail} from '../../store/portSlice';
import Nav from '../common/Nav';

import {
  Background,
  Container,
  Content,
  TitleDiv,
  Title,
  WriteDate,
  Summary,
  ThumbDiv,
  ThumbNail,
  HashDiv,
  Hash,
  BottomDiv,
  IconDiv,
  IconWrap,
  EditIcon,
  PortIcon,
  AttachDiv,
  AttachList,
  Attach,
  AttachIcon,
  ToolTip,
  ToolTipText,
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


  
  // 포트폴리오 본문 파싱
  const Viewer = ({content}) => (
    <div>
      <ThumbDiv>
        <ThumbNail src={portDetail.thumbnail}></ThumbNail>
        <p>대표 이미지</p>
      </ThumbDiv>
      <Summary
        className="ck-content"
        dangerouslySetInnerHTML={{__html: content}}
      ></Summary>
      
    </div>
  );

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

  return (
    <Background>
      <Nav></Nav>
      <Container>
        <Content>
          <TitleDiv>
            <Title>{portDetail.name}</Title>
            <WriteDate>수정일 : {createDate}</WriteDate>
          </TitleDiv>
          <div className="뷰어">
            <Viewer content={portDetail.summary}>
              <span>안녕</span>
            </Viewer>
          </div>
          <HashDiv>
            {portDetail.tags !== undefined
              ? portDetail.tags.map((item, idx) => (
                  <Hash key={idx}># {item}</Hash>
                ))
              : null}
          </HashDiv>
          <BottomDiv>
            <AttachDiv>
              <IconDiv>
                <AttachIcon></AttachIcon>
              </IconDiv>
              <AttachList>
                {portDetail.urls !== undefined ? (
                  portDetail.urls.map((item, idx) => (
                    <Attach href={item.url} key={idx}>
                      {item.name}
                    </Attach>
                  ))
                ) : (
                  <Attach>첨부파일 없음</Attach>
                )}
              </AttachList>
            </AttachDiv>
            <IconDiv>
              <IconWrap>
                <PortIcon onClick={movePortList}></PortIcon>
                <ToolTip className="tooltip">
                  <ToolTipText>포트폴리오 목록</ToolTipText>
                </ToolTip>
              </IconWrap>
              <IconWrap>
                <EditIcon onClick={moveEdit}></EditIcon>
                <ToolTip className="tooltip">
                  <ToolTipText>포트폴리오 수정</ToolTipText>
                </ToolTip>
              </IconWrap>
            </IconDiv>
          </BottomDiv>
        </Content>
      </Container>
    </Background>
  );
};

export default PortDetail;
