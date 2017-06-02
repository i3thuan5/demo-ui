import React from 'react';
import PropTypes from 'prop-types';

class HanLoSu extends React.Component {
  render() {
    const { 羅馬字, 漢字 } = this.props;
    return (
      <ruby className="app ruby">
      {羅馬字}
      <rt>{漢字}</rt>
      </ruby>
    );
  }
}

HanLoSu.propTypes = {
  漢字: PropTypes.string.isRequired,
  羅馬字: PropTypes.string.isRequired,
};

export default HanLoSu;
