import React from 'react';
import PropTypes from 'prop-types';
import API from "../api/意傳服務";

class DownloadButton extends React.Component {

  render() {
    const { src, children } = this.props;
    return (
        <a download href={src}
          className='ui compact icon massive button'>
          <i className='icon-download-alt'/>
          {children}
        </a>
    );
  }
}


DownloadButton.propTypes = {
  src: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default DownloadButton;