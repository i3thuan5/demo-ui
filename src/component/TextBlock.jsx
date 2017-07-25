import React from 'react';
import PropTypes from 'prop-types';

class TextBlock extends React.PureComponent {
  render() {
    return (
      <div className='app text block'>
        {this.props.children}
      </div>
    );
  }
}


TextBlock.propTypes = {
  children: PropTypes.node,
};

export default TextBlock;