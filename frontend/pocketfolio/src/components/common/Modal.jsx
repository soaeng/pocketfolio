import {Container, Box} from './Modal.style';

const Modal = ({children}) => {
  return (
    <Container>
      <Box>{children}</Box>
    </Container>
  );
};

export default Modal;
