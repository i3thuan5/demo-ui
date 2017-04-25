import React from 'react';
import PropTypes from 'prop-types';

const MainSection = ({ children }) => (
  <div className='app main block'>
    <div className='ui grid text container'>
    <div className='sixteen column'>
      {children}
    </div>
    </div>
  </div>
);

MainSection.propTypes = {
  children: PropTypes.node,
};

export default MainSection;
