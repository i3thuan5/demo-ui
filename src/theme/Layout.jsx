import React from 'react';
import PropTypes from 'prop-types';
import '../../asset/css/demo-ui.css';
import "../../asset/icon-font/fontello.min.css";

const Layout = ({ children }) => (
  <div className='app background'>
  {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
