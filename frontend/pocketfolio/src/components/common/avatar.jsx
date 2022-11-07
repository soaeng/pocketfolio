import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../store/oauthSlice';
import {AvatarImg, AvatarContainer} from './avatar.style';
import DropDown from './dropdown';
import {deleteAllToken} from '../../api/jwt';

function Avatar() {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.oauth.user);

  return (
    <AvatarContainer>
      <AvatarImg
        src="./assets/images/user.png"
        onClick={() => {
          setVisible(!visible);
        }}
      />
      {visible && <DropDown />}
    </AvatarContainer>
  );
}

export default Avatar;
