import Modal from '../common/Modal';
import {Container, Title, Msg, BtnBox, Btn} from './DelUserModal.style';

const DelUserModal = ({modal, toggleModal, deleteUser}) => {
  return (
    <Container className={modal ? 'open' : ''}>
      <Modal>
        <Title>정말 탈퇴하시겠습니까?</Title>
        <Msg>
          확인을 누를 경우, 작성하신 포트폴리오 및 정보는 모두 초기화됩니다.
        </Msg>
        <BtnBox>
          <Btn
            onClick={() => {
              deleteUser();
              toggleModal();
            }}
          >
            확인
          </Btn>
          <Btn onClick={toggleModal} className="ok">
            취소
          </Btn>
        </BtnBox>
      </Modal>
    </Container>
  );
};

export default DelUserModal;
