import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css';
import Landing from './components/landing/Landing';
import Main from './components/main/Main';
import Search from './components/search/Search';

// Room
import Room from './components/room/Room';
import RoomEdit from './components/roomEdit/RoomEdit';

// User
import Login from './components/user/Login';
import Profile from './components/user/Profile';

// Portfolio
import AddPort from './components/portfolio/AddPort';
import Portfolio from './components/portfolio/Portfolio';
import PortDetail from './components/portfolio/PortDetail';
import PortfolioEdit from './components/portfolio/PortfolioEdit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/search" element={<Search />} />

        {/* Room */}
        <Route path="/room/:room_id" element={<Room />} />
        <Route path="/room/edit/:room_id" element={<RoomEdit />} />

        {/* User */}
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />

        {/* Portfolio */}
        <Route path="/port" element={<Portfolio />} />
        <Route path="/port/create" element={<AddPort />} />
        <Route path="/port/:port_id" element={<PortDetail />} />
        <Route path="/port/edit/:port_id" element={<PortfolioEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
