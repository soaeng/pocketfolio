import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css';

// pages
import OnError from './components/common/OnError';
import Landing from './components/landing/Landing';
import Main from './components/main/Main';
import Search from './components/search/Search';
import Room from './components/room/Room';
import Login from './components/user/Login';
import Oauth from './components/user/Oauth';
import Profile from './components/user/Profile';
import AddPort from './components/portfolio/AddPort';
import Portfolio from './components/portfolio/Portfolio';
import PortDetail from './components/portfolio/PortDetail';
import PortfolioEdit from './components/portfolio/PortfolioEdit';

function App() {
  console.warn = function no_console() {};
  console.error = function no_console() {};

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/search" element={<Search />} />

        {/* Room */}
        <Route path="/room/:roomSeq" element={<Room />} />

        {/* User */}
        <Route path="/login" element={<Login />} />
        <Route path="/oauth" element={<Oauth />} />
        <Route path="/profile" element={<Profile />} />

        {/* Portfolio */}
        <Route path="/port" element={<Portfolio />} />
        <Route path="/port/create" element={<AddPort />} />
        <Route path="/port/:port_id" element={<PortDetail />} />
        <Route path="/port/edit/:port_id" element={<PortfolioEdit />} />

        <Route path="*" element={<OnError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
