import React from 'react';
import PropTypes from 'prop-types';
import API from "../api/意傳服務";
import {分詞格式} from '../vendors/CustomPropTypes';
import "../../asset/icon-font/fontello.min.css";

class PlayButton extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.分詞 === this.props.分詞) return;
    const 音檔 = this.refs.合成音檔;
    音檔.load();
    this.setState({isPlaying:false});
  }

  play() {
    const 音檔 = this.refs.合成音檔;
    音檔.play();
  }

  handlePlay() {
    this.setState({isPlaying:true});
  }

  handleEnd() {
    this.setState({isPlaying:false});
  }

  render() {
    const { 分詞, 腔口 } = this.props;
    const src = API.語音合成({分詞, 腔口});
    return (
        <span>
          <audio ref="合成音檔"
          onPlay={this.handlePlay.bind(this)}
          onEnded={this.handleEnd.bind(this)}>
            <source type="audio/wav" src={src}/>
          </audio>
          <button onClick={this.play.bind(this)}
            className={`ui compact icon massive button 
              ${this.state.isPlaying ? ' grey': ''}`}>
            <i className='icon-play'></i>
          </button>
        </span>
    );
  }
}


PlayButton.propTypes = {
  腔口: PropTypes.string.isRequired,
  分詞: 分詞格式,
};

export default PlayButton;