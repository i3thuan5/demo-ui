import React from 'react';
import PropTypes from 'prop-types';

const FooterItem = ({ url, title }) => (
  <a  className='item'
      target="_blank"
      href={url}
  >
  {title}
  </a>
);

FooterItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};

export default FooterItem;
