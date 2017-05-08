import React from 'react';
import PropTypes from 'prop-types';

class HanLoSu extends React.Component {
  render() {
    const { 臺羅閏號調, 漢字詞 } = this.props;
    return (
      <ruby className="app ruby">
      {臺羅閏號調}
      <rt>{漢字詞}</rt>
      </ruby>
    );
  }
}


HanLoSu.propTypes = {
  漢字詞: PropTypes.string.isRequired,
  臺羅閏號調: PropTypes.string.isRequired,
};

export default HanLoSu;
