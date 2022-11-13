import {DelIcon, EditIcon, RotateIcon, Wrapper} from './ButtonHtml.style';

const ButtonHtml = ({handleRotate, handleDelBtn}) => {
  return (
    <Wrapper>
      <DelIcon onClick={handleDelBtn} />
      <RotateIcon
        onClick={e => {
          handleRotate(e);
        }}
      />
      <EditIcon />
    </Wrapper>
  );
};

export default ButtonHtml;
