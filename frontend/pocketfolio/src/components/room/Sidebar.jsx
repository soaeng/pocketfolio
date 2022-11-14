import PortList from './PortList';
import GuestList from './GuestList';
import ObjectList from './ObjectList';
import {
  Container,
  SideContainer,
  CloseBox,
  CloseIcon,
  ToggleBox,
  ToggleIconBox,
  ToggleCloseIcon1,
  ToggleCloseIcon2,
  ToggleOpenIcon1,
  ToggleOpenIcon2,
} from './Sidebar.style';

const Sidebar = ({
  sidebar,
  changeSidebar,
  edit,
  roomSeq,
  data,
  appendArrange,
}) => {
  const controlSide = () => {
    if (sidebar === 'port') return changeSidebar('');
    if (sidebar === 'guest') return changeSidebar('');
    if (sidebar === 'edit') return changeSidebar('');
    if (!sidebar) return changeSidebar('edit');
  };

  return (
    <Container>
      <SideContainer className={sidebar ? 'open' : null}>
        {!edit && (
          <CloseBox onClick={controlSide}>
            <CloseIcon />
          </CloseBox>
        )}
        {sidebar === 'port' && <PortList />}
        {sidebar === 'guest' && <GuestList roomSeq={roomSeq} roomDto={data} />}
        {sidebar === 'edit' && <ObjectList appendArrange={appendArrange} />}
      </SideContainer>
      {edit ? (
        <ToggleBox onClick={controlSide}>
          {sidebar ? (
            <ToggleIconBox>
              <ToggleCloseIcon1 />
              <ToggleCloseIcon2 />
            </ToggleIconBox>
          ) : (
            <ToggleIconBox>
              <ToggleOpenIcon1 />
              <ToggleOpenIcon2 />
            </ToggleIconBox>
          )}
        </ToggleBox>
      ) : null}
    </Container>
  );
};

export default Sidebar;
