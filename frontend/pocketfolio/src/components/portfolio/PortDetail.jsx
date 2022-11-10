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
  BtnDiv,
  Btn,
} from './PortDetail.style';

const PortDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // portSeq
  const params = useParams();
  const port_id = parseInt(params.port_id);

  // 포트폴리오 내용
  const [portDetail, setPortDetail] = useState({});

  const [createDate, setCreateDate] = useState('');

  // 포트폴리오 본문 파싱
  const Viewer = ({content}) => (
    <Summary
      className="ck-content"
      dangerouslySetInnerHTML={{__html: content}}
    ></Summary>
  );

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

  const moveEdit = () => {
    navigate(`/port/edit/${portDetail.portSeq}`)
  };
  console.log(portDetail);
  const image =
    'https://yd21.go.kr/_prog/download/index.php?func_gbn_cd=tourist&site_dvs_cd=tour&atch=atch_img&mng_no=57';
  return (
    <Background>
      <Nav></Nav>
      <Container>
        <ThumbDiv>
          <ThumbNail src={image}></ThumbNail>
        </ThumbDiv>
        <Content>
          <TitleDiv>
            <Title>{portDetail.name}</Title>
            <WriteDate>수정일 : {createDate}</WriteDate>
          </TitleDiv>
          <Viewer content={portDetail.summary}></Viewer>
          <HashDiv>
            {portDetail.tags !== undefined
              ? portDetail.tags.map((item, idx) => (
                  <Hash key={idx}># {item}</Hash>
                ))
              : null}
          </HashDiv>
          <BtnDiv>
            <Btn onClick={moveEdit}>글 수정</Btn>
          </BtnDiv>
        </Content>
      </Container>
    </Background>
  );
};

export default PortDetail;
