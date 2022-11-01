import {Container} from './Sidebar.style';

const Sidebar = ({sidebar, closeSidebar}) => {
  return (
    <Container className={sidebar ? 'open' : null} onClick={closeSidebar}>
      Sidebar
    </Container>
  );
};

export default Sidebar;
