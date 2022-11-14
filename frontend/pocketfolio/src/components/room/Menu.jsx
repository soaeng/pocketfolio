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
import {useDispatch, useSelector} from 'react-redux';
import {getRandom} from '../../store/guestSlice';

const Menu = ({roomSeq, changeSidebar, copyURL, onEdit, data}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.oauth.user)

  const [toggle, setToggle] = useState(false);

  // menu toggle
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  // changeRoom
  const changeRoom = async () => {
    const res = await dispatch(getRandom(roomSeq));
    navigate(`/room/${res.payload}`);
  };

  return (
    <Container>
      {data && data.room.userSeq === user.userSeq && (
        <MenuDiv onClick={onEdit} className={toggle ? 'edit' : ''}>
          <EditIcon />
          <ToolTip className="tooltip">
            <ToolTipText>마이룸 수정</ToolTipText>
          </ToolTip>
        </MenuDiv>
      )}

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
        className={toggle ? 'guest' : ''}
        onClick={() => changeSidebar('guest')}
      >
        <VisitIcon />
        <ToolTip className="tooltip">
          <ToolTipText>방명록</ToolTipText>
        </ToolTip>
      </MenuDiv>

      <MenuDiv className={toggle ? 'wave' : ''} onClick={changeRoom}>
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
