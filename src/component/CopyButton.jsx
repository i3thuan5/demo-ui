import React from 'react';
import PropTypes from 'prop-types';

class CopyButton extends React.PureComponent {

  copy() {
    const { 複製內容 } = this.props;
    const textField = document.createElement("textarea");
    textField.value = 複製內容;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  }

  render() {
    const { 按鈕名 } = this.props;
    return (
      <button onClick={this.copy.bind(this)}
        className='ui icon button'>
        <i className='icon-docs'></i>
        {按鈕名}
      </button>
    );
  }
}

CopyButton.propTypes = {
  複製內容: PropTypes.string.isRequired,
};

export default CopyButton;