import logo from './logo.svg';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Landing from './components/landing/Landing';
import Main from './components/main/main';
import Portfolio from './components/portfolio/Portfolio';
import Room from './components/room/room';
import Search from './components/search/search';
import Login from './components/user/login';
import Profile from './components/user/profile';
import PortfolioEdit from './components/portfolio/PortfolioEdit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/port" element={<Portfolio/>}/>
        <Route path="/port-edit" element={<PortfolioEdit/>}/>
        <Route path="/room" element={<Room/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
