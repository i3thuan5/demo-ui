import React from "react";
import PropTypes from "prop-types";
import { HanLoSu, PlayButton, Block } from "../";

class HanLoTsua extends React.Component {

  render() {
    const { 臺羅閏號調, 漢字, 分詞, 是否合音 } = this.props;
    let 合音 = (typeof 是否合音 !== 'undefined') ? 是否合音 : true;
    const playbtn = 合音 ? <PlayButton 分詞={分詞}/> : null;
    const 漢字陣列 = 漢字.split(" ");
    const 臺羅陣列 = 臺羅閏號調.split(" ");
    const 詞陣列 = 漢字陣列.map((字, k) => (
        <HanLoSu key={k}
        漢字={字}
        臺羅閏號調={臺羅陣列[k]} />
    ));
    return (
      <Block>
        {playbtn}
        {詞陣列}
      </Block>
    );
  }
}

HanLoTsua.propTypes = {
  臺羅閏號調: PropTypes.string.isRequired,
  漢字: PropTypes.string.isRequired,
  分詞: PropTypes.string,
  是否合音: PropTypes.bool
};

export default HanLoTsua;
