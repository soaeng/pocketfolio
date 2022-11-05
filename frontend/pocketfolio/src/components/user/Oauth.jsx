import {useEffect} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';

const Oauth = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {

    // save token at local storage
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');
    window.localStorage.setItem('access-Token', accessToken);
    window.localStorage.setItem('refresh-Token', refreshToken);

    navigate('/');
  }, []);

  return;
};

export default Oauth;
