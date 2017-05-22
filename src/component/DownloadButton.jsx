import React from 'react';
import PropTypes from 'prop-types';
import API from "../api/意傳服務";
import {分詞格式} from '../vendor/CustomProptype';

class DownloadButton extends React.Component {

  render() {
    const { 分詞, 腔口, children } = this.props;
    const src = API.語音合成({分詞, 腔口});
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
  腔口: PropTypes.string.isRequired,
  分詞: 分詞格式,
  children: PropTypes.node,
};

export default DownloadButton;