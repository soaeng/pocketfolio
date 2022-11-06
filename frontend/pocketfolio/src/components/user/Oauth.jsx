import {useEffect} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {saveToken, saveRefreshToken} from '../../api/jwt';

const Oauth = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // save token at local storage
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');
    saveToken(accessToken);
    saveRefreshToken(refreshToken);

    navigate('/main');
  }, []);

  return;
};

export default Oauth;
