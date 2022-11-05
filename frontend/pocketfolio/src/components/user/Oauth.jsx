import {useEffect} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';

const Oauth = () => {
  const navigate = useNavigate();
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log(searchParams);
  }, []);

  return;
};

export default Oauth;
