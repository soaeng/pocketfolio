import {
  Container,
  UpArrowDiv,
  UpIcon,
  BirthLinkDiv,
  IconDiv,
  BirthIcon,
  BirthLinkTxt,
  Introduction,
  LinkIcon,
} from './RoomDetail.style';

// 마이룸 상세정보
const RoomDetail = ({closeDetail}) => {

  return (
    <Container>
      <UpArrowDiv>
        <IconDiv onClick={closeDetail}>
          <UpIcon/>
        </IconDiv>
      </UpArrowDiv>

      <BirthLinkDiv>
        <IconDiv>
          <BirthIcon />
        </IconDiv>
        <BirthLinkTxt>1999.03.02</BirthLinkTxt>
      </BirthLinkDiv>

      <BirthLinkDiv>
        <IconDiv>
          <LinkIcon />
        </IconDiv>
        <BirthLinkTxt>https://k7e101.p.ssafy.io</BirthLinkTxt>
      </BirthLinkDiv>

      <Introduction>안녕하세요. 저는 마이룸의 주인 개발자입니다.</Introduction>
    </Container>
  );
};

export default RoomDetail;
