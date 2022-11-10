import {useParams} from 'react-router-dom';

const PortDetail = () => {
  const params = useParams();
  const port_id = parseInt(params.port_id);
  console.log(port_id)
  return <>PortDetail</>;
};

export default PortDetail;
