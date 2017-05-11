import React from 'react';
import PropTypes from 'prop-types';

class Block extends React.Component {
  render() {
    return (
      <div className='app block'>
        {this.props.children}
      </div>
    );
  }
}


Block.propTypes = {
  children: PropTypes.node,
};

export default Block;