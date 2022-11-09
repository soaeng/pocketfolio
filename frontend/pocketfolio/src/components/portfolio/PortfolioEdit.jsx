import React, {useState} from 'react';
import MyEditor from './Editor';
import {Background} from './PortfolioEdit.style';
import AddPort from './AddPort';
const PortfolioEdit = props => {
  const [portContent, setPortContent] = useState({
    name: '',
    summary: '',
  });

  return (
    <AddPort>
      
    </AddPort>
  );
};

export default PortfolioEdit;
