import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
const PortDetail = () => {
  const params = useParams();
  const port_id = parseInt(params.port_id);
  console.log(port_id)

  useEffect(()=> {
    
  })
  return <>PortDetail</>;
};

export default PortDetail;
