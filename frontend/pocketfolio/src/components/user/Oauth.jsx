import {useEffect} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {saveToken, saveRefreshToken} from '../../api/jwt';
import {useDispatch} from 'react-redux';
import { getMyInfo } from '../../store/oauthSlice';

const Oauth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // save token at local storage
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');
    saveToken(accessToken);
    saveRefreshToken(refreshToken);
    dispatch(getMyInfo());
    navigate('/main');
  }, []);

  return;
};

export default Oauth;
