import {useEffect} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';

const Oauth = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');
    window.localStorage.setItem('access-Token', accessToken);
    window.localStorage.setItem('refresh-Token', refreshToken);
    const token = window.localStorage.getItem('access-Token');
    console.log(token)
    navigate('/');
  }, []);

  return;
};

export default Oauth;
