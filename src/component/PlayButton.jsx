import React from 'react';
import PropTypes from 'prop-types';
import API from "../api/意傳服務";
import "../../asset/icon-font/fontello.min.css";

class PlayButton extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.語句 === this.props.語句) return;
    const 音檔 = this.refs.合成音檔;
    音檔.load();
  }

  play() {
    const 音檔 = this.refs.合成音檔;
    音檔.play();
  }

  render() {
    const { 語句 } = this.props;
    const src = API.語音合成({語句: "逐家"});
    return (
        <span>
          <audio ref="合成音檔">
            <source type="audio/wav" src={src}/>
          </audio>
          <button onClick={this.play.bind(this)}
            className='ui compact icon massive button'>
            <i className='icon-play'></i>
          </button>
        </span>
    );
  }
}


PlayButton.propTypes = {
  語句: PropTypes.string.isRequired,
};

export default PlayButton;