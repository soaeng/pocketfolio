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

const Sidebar = ({sidebar, changeSidebar, edit, roomSeq}) => {
  const controlSide = () => {
    if (sidebar === 'port') return changeSidebar('');
    if (sidebar === 'visit') return changeSidebar('');
    if (sidebar === 'edit') return changeSidebar('');
    if (!sidebar) return changeSidebar('edit');
  };

  return (
    <Container>
      <SideContainer className={sidebar ? 'open' : null}>
        {edit ? null : (
          <CloseBox onClick={controlSide}>
            <CloseIcon />
          </CloseBox>
        )}
        {sidebar === 'port' ? <PortList roomSeq={roomSeq}/> : null}
        {sidebar === 'visit' ? <GuestList roomSeq={roomSeq} /> : null}
        {sidebar === 'edit' ? <ObjectList /> : null}
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
