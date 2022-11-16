import PortList from './PortList';
import GuestList from './GuestList';
import ObjectList from './ObjectList';
import {
  Container,
  SideContainer,
  CloseBox,
  BackIcon,
  CloseIcon,
  ToggleBox,
  ToggleIconBox,
  ToggleCloseIcon1,
  ToggleCloseIcon2,
  ToggleOpenIcon1,
  ToggleOpenIcon2,
} from './Sidebar.style';
import EditPortList from './EditPortList';
import PortDetail from './PortDetail';

const Sidebar = ({
  sidebar,
  changeSidebar,
  edit,
  roomSeq,
  data,
  appendArrange,
  arranges,
  nowIdx,
  connectPort,
  disconnectPort,
  openPortDetail,
  nowPort,
}) => {
  const controlSide = () => {
    if (sidebar === 'port') return changeSidebar('');
    if (sidebar === 'guest') return changeSidebar('');
    if (sidebar === 'edit') return changeSidebar('');
    if (sidebar === 'portDetail') return changeSidebar('port');
    if (!sidebar) return changeSidebar('edit');
  };

  return (
    <Container>
      <SideContainer className={sidebar ? 'open' : null}>
        {!edit && (
          <CloseBox onClick={controlSide}>
            {sidebar !== 'portDetail' ? <CloseIcon /> : <BackIcon />}
          </CloseBox>
        )}
        {!edit && sidebar === 'port' && (
          <PortList data={data.portfolios} openPortDetail={openPortDetail} />
        )}
        {!edit && sidebar === 'portDetail' && <PortDetail nowPort={nowPort}/>}
        {edit && sidebar === 'port' && (
          <EditPortList
            arranges={arranges}
            nowIdx={nowIdx}
            connectPort={connectPort}
            disconnectPort={disconnectPort}
          />
        )}
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
