import {
  Container,
  MenuButton,
  Bar,
  MenuDiv,
  EditIcon,
  PortIcon,
  VisitIcon,
  WaveIcon,
  ShareIcon,
  ToolTip,
  ToolTipText,
} from './Menu.style';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Menu = ({roomSeq, changeSidebar, copyURL, onEdit}) => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  // menu toggle
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const activeEdit = () => {
    onEdit();
    changeSidebar('edit');
  };

  return (
    <Container>
      <MenuDiv onClick={activeEdit} className={toggle ? 'edit' : ''}>
        <EditIcon />
        <ToolTip className="tooltip">
          <ToolTipText>마이룸 수정</ToolTipText>
        </ToolTip>
      </MenuDiv>

      <MenuDiv
        onClick={() => changeSidebar('port')}
        className={toggle ? 'port' : ''}
      >
        <PortIcon />
        <ToolTip className="tooltip">
          <ToolTipText>포트폴리오 목록</ToolTipText>
        </ToolTip>
      </MenuDiv>

      <MenuDiv
        className={toggle ? 'visit' : ''}
        onClick={() => changeSidebar('visit')}
      >
        <VisitIcon />
        <ToolTip className="tooltip">
          <ToolTipText>방명록</ToolTipText>
        </ToolTip>
      </MenuDiv>

      <MenuDiv className={toggle ? 'wave' : ''}>
        <WaveIcon />
        <ToolTip className="tooltip">
          <ToolTipText>파도타기</ToolTipText>
        </ToolTip>
      </MenuDiv>

      <MenuDiv className={toggle ? 'share' : ''} onClick={copyURL}>
        <ShareIcon />
        <ToolTip className="tooltip">
          <ToolTipText>URL 복사</ToolTipText>
        </ToolTip>
      </MenuDiv>

      <MenuButton
        className={toggle ? 'is-active hamburger' : 'hamburger'}
        onClick={toggleMenu}
      >
        <Bar className="bar" />
        <Bar className="bar" />
        <Bar className="bar" />
      </MenuButton>
    </Container>
  );
};

export default Menu;
