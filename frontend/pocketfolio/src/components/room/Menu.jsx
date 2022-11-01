import {
  Container,
  MenuButton,
  Bar,
  MenuList,
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

const Menu = ({room_id, openSidebar}) => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  // menu toggle
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const moveToEdit = () => {
    navigate(`/room/edit/${room_id}`);
  };

  const moveToPort = () => {
    navigate('/port');
  };

  return (
    <Container>
      <MenuDiv onClick={moveToEdit} className={toggle ? 'edit' : ''}>
        <EditIcon />
        <ToolTip className="tooltip">
          <ToolTipText>마이룸 수정</ToolTipText>
        </ToolTip>
      </MenuDiv>

      <MenuDiv onClick={moveToPort} className={toggle ? 'port' : ''}>
        <PortIcon />
        <ToolTip className="tooltip">
          <ToolTipText>포트폴리오 목록</ToolTipText>
        </ToolTip>
      </MenuDiv>

      <MenuDiv className={toggle ? 'visit' : ''} onClick={openSidebar}>
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

      <MenuDiv className={toggle ? 'share' : ''}>
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
