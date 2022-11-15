import {DelIcon, EditIcon, RotateIcon, Wrapper} from './ButtonHtml.style';

const ButtonHtml = ({handleRotate, handleDelBtn, loadConnect, idx}) => {
  return (
    <Wrapper>
      <DelIcon onClick={handleDelBtn} />
      <RotateIcon
        onClick={e => {
          handleRotate(e);
        }}
      />
      <EditIcon onClick={() => loadConnect(idx)} />
    </Wrapper>
  );
};

export default ButtonHtml;
