import React from 'react';
import FooterItem from './FooterItem';
import PropTypes from 'prop-types';

const Footer = ({ sites = [] }) => {
  const items = sites.map((item, i)=>(
      <FooterItem key={i} url={item.url} title={item.title}/>
    ));

  return (
    <footer className='app footer inverted'>
      <div className='ui stackable menu container inverted'>
      {items}
      </div>
    </footer>
  );
};

Footer.propTypes = {
  sites: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
};

export default Footer;
