import React from 'react';
import PropTypes from 'prop-types';

class ButtonStack extends React.Component {
  getLiteralNum() {
    const len = React.Children
      .toArray(this.props.children).length;
    switch(len){
      case 0:case 1:
      return 'one';
      case 2:return 'two';
      case 3:return 'three';
      case 4:return 'four';
      case 5:return 'five';
      case 6:return 'six';
      case 7:return 'seven';
      case 8:return 'eight';
      case 9:return 'nine';
      case 10:return 'ten';
      case 11:return 'eleven';
      case 12:return 'twelve';
      default:return 'one';
    }
  }

  render() {
    const num = this.getLiteralNum();
    return (
      <div className={`app ui stackable ${num} large teal buttons`}>
        {this.props.children}
      </div>
    );
  }
}


ButtonStack.propTypes = {
  children: PropTypes.node
};

export default ButtonStack;