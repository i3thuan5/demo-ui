import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div className='app background'>
  {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
