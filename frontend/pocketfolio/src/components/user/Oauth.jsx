import {useEffect} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {saveToken, saveRefreshToken, saveExpire, deleteAllToken} from '../../api/jwt';
import {useDispatch} from 'react-redux';
import {getMyInfo} from '../../store/oauthSlice';

const Oauth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    deleteAllToken();
    
    // save token at session storage
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');
    saveToken(accessToken);
    saveRefreshToken(refreshToken);
    saveExpire();
    dispatch(getMyInfo());
    navigate('/main');
  }, []);

  return;
};

export default Oauth;
