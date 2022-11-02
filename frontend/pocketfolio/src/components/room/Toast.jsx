import {useEffect} from 'react';
import {Container, ToastDiv, ToastText} from './Toast.style';

const Toast = ({toast}) => {
  useEffect(() => {
    console.log(toast);
  }, [toast]);

  return (
    <Container>
      {toast
        ? toast.map((text, idx) => (
            <ToastDiv className={toast ? 'active' : ''}>
              <ToastText>{text}</ToastText>
            </ToastDiv>
          ))
        : null}
    </Container>
  );
};

export default Toast;
