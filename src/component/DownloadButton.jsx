import React from 'react';
import PropTypes from 'prop-types';
import API from "../api/意傳服務";
import "../../asset/icon-font/fontello.min.css";

class DownloadButton extends React.Component {

  render() {
    const { 分詞, 腔口 } = this.props;
    const src = API.語音合成({分詞, 腔口});
    return (
        <a download href={src}
          className='ui compact icon massive button'>
          <i className='icon-download-alt'/>
        </a>
    );
  }
}


DownloadButton.propTypes = {
  腔口: PropTypes.string.isRequired,
  分詞: function(props, propName, componentName) {
    if (!/｜/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Should follow 分詞 format.'+
        ' Validation failed.'
      );
    }
  }
};

export default DownloadButton;