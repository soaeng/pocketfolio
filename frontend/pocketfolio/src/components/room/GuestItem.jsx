import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {delComment, postComment} from '../../store/guestSlice';
import {
  Container,
  Header,
  NameDiv,
  IconDiv,
  UnlockIcon,
  LockIcon,
  Name,
  Date,
  ImgTextDiv,
  ImgBox,
  Img,
  TextBox,
  BtnDate,
  BtnBox,
  TextBtn,
  CommentList,
  CommentItem,
  CommentText,
  CommentName,
  CommentDate,
  CommentContainer,
  CommentArea,
  CommentBtn,
  CommentL,
  DelIconDiv,
  DelIcon,
} from './GuestItem.style';

const GuestItem = ({item, removeGuest, roomDto, getData}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.oauth.user);
  const [comment, setComment] = useState('');

  // 방명록 댓글 작성
  async function sendComment() {
    if (user && comment.trim()) {
      const {payload} = await dispatch(
        postComment({
          roomSeq: roomDto.room.roomSeq,
          guestbookSeq: item.guestbookSeq,
          content: comment,
          isPublic: item.isPublic,
        }),
      );
      if (payload) {
        getData();
        setComment('');
      }
    }
  }

  // 방명록 댓글 삭제
  async function deleteComment(commentSeq) {
    if (user) {
      const {payload} = await dispatch(delComment(commentSeq));

      if (payload) getData();
    }
  }


  return item.isPublic === 'T' ||
    (item.isPublic === 'F' &&
      (item.userSeq === user.userSeq ||
        roomDto.room.userSeq === user.userSeq)) ? (
    <Container>
      <Header className={item.isPublic === 'T' ? '' : 'secret'}>
        <NameDiv>
          <IconDiv>
            {item.isPublic === 'T' ? <UnlockIcon /> : <LockIcon />}
          </IconDiv>
          <Name>{item.userName} </Name>
        </NameDiv>
        <BtnDate>
          <Date>{item.created.slice(0, 16)}</Date>
          {user && user.userSeq === item.userSeq && (
            <BtnBox>
              <TextBtn
                type="button"
                onClick={() => removeGuest(item.guestbookSeq)}
              >
                삭제
              </TextBtn>
            </BtnBox>
          )}
        </BtnDate>
      </Header>

      <ImgTextDiv>
        <ImgBox>
          <Img
            src={
              item.profile
                ? item.profile
                : process.env.PUBLIC_URL + '/assets/images/logo3.png'
            }
          />
        </ImgBox>
        <TextBox>{item.content}</TextBox>
      </ImgTextDiv>

      {/* 댓글 목록 */}
      {item.commentList.length > 0 && (
        <CommentList>
          {item.commentList.map((comment, idx) => (
            <CommentItem key={idx}>
              <CommentL>
                <CommentName>{roomDto.room.userName}</CommentName>
                <CommentText>{comment.content}</CommentText>
              </CommentL>

              <DelIconDiv className="delete" onClick={() => deleteComment(comment.commentSeq)}>
                <DelIcon />
              </DelIconDiv>

              <CommentDate>{comment.created.slice(0, 16)}</CommentDate>
            </CommentItem>
          ))}
        </CommentList>
      )}

      {/* 댓글 작성 */}
      {user && roomDto.room.userSeq === user.userSeq && (
        <CommentContainer>
          <CommentArea
            className={item.isPublic === 'T' ? '' : 'secret'}
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
          <CommentBtn
            className={item.isPublic === 'T' ? '' : 'secret'}
            onClick={sendComment}
          >
            확인
          </CommentBtn>
        </CommentContainer>
      )}
    </Container>
  ) : null;
};

export default GuestItem;
