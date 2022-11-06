import PortList from './PortList';
import VisitList from './VisitList';
import {Container, CloseBox, CloseIcon} from './Sidebar.style';

const Sidebar = ({sidebar, changeSidebar}) => {
  const controlSide = () => {
    if (sidebar === 'port') return changeSidebar('');
    if (sidebar === 'visit') return changeSidebar('');
  };

  return (
    <Container className={sidebar ? 'open' : null}>
      <CloseBox onClick={controlSide}>
        <CloseIcon />
      </CloseBox>
      {sidebar === 'port' ? <PortList /> : null}
      {sidebar === 'visit' ? <VisitList /> : null}
    </Container>
  );
};

export default Sidebar;
