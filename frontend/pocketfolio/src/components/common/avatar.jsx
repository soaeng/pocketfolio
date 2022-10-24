import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function Avatar() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  // 로그아웃
  const logoutClickHandler = () => {
    sessionStorage.clear();
    navigate('/main');
  }

  return (
    <nav>
      <img src="./assets/images/logo.png" class="profile" onClick={() => {
          setVisible(!visible);
        }}/>
      {visible && <ul>
        <li class="sub-item">
          <p>Update Profile</p>
        </li>
        <li class="sub-item" onClick={logoutClickHandler}>
          <p >Logout</p>
        </li>
      </ul>}
    </nav>
  )
}

export default Avatar;
