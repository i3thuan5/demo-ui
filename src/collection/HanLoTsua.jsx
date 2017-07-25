import React from "react";
import PropTypes from "prop-types";
import API from "../api/意傳服務";
import { 
  HanLoSu, 
  PlayButton, 
  TextBlock, 
  DownloadButton
} from "../";

class HanLoTsua extends React.Component {

  render() {
    const { 
      羅馬字, 
      漢字, 
      是否合音,
      src
    } = this.props;
    const playBtn = 是否合音 ? 
      <PlayButton src={src}/> : null;
    const downloadBtn = 是否合音 ? 
      <DownloadButton src={src}/> : null;
    const 漢字陣列 = 漢字.split(" ");
    const 臺羅陣列 = [].concat(羅馬字.replace(/--/g, " --").split(" "));
    const 詞陣列 = 漢字陣列.map((字, k) => (
        <HanLoSu key={k}
        漢字={字}
        羅馬字={臺羅陣列[k]} />
    ));
    return (
      <TextBlock>
        {downloadBtn}
        {playBtn}
        {詞陣列}
      </TextBlock>
    );
  }
}

HanLoTsua.propTypes = {
  羅馬字: PropTypes.string.isRequired,
  漢字: PropTypes.string.isRequired,
  src: PropTypes.string,
  是否合音: PropTypes.bool,
};

HanLoTsua.defaultProps = {
  src: '',
  是否合音: true,
};

export default HanLoTsua;
