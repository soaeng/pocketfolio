import {useParams} from 'react-router-dom';

const PortfolioEdit = () => {
  const params = useParams();
  const port_id = parseInt(params.port_id);

  return <>PortDetail</>;
};

export default PortfolioEdit;
