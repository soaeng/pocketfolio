import {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

const Oauth = () => {
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    console.log(params);
  }, []);

  return ;
};

export default Oauth;
