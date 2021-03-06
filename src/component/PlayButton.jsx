import React from 'react';
import PropTypes from 'prop-types';
import API from "../api/意傳服務";
import {分詞格式} from '../vendor/CustomProptype';

class PlayButton extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      isError: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.src === this.props.src) return;
    const 音檔 = this.合成音檔;
    音檔.load();
    this.setState({isPlaying:false});
  }

  play() {
    const 音檔 = this.合成音檔;
    音檔.play();
  }

  handlePlay() {
    this.setState({isPlaying:true});
  }

  handleEnd() {
    this.setState({isPlaying:false});
  }

  handleError(e) {
    this.setState({isError:true});
  }

  btnStyle() {
    let color = '';
    if(this.state.isError){
      color = 'disabled negative'; 
    }else if(this.state.isPlaying){
      color = 'grey'; 
    }
    return `ui compact icon massive button ${color}`;
  }

  iconStyle() {
    if(this.state.isError) {
      return 'icon-attention-alt';
    }
    return 'icon-play';
  }

  render() {
    const { src, children } = this.props;
    return (
        <span>
          <audio ref={(a) => { this.合成音檔 = a; }}
          onPlay={this.handlePlay.bind(this)}
          onEnded={this.handleEnd.bind(this)}
          onError={this.handleError.bind(this)}>
            <source type="audio/wav" src={src}/>
          </audio>
          <button onClick={this.play.bind(this)}
            className={this.btnStyle()}>
            <i className={this.iconStyle()}/>
            {children}
          </button>
        </span>
    );
  }
}


PlayButton.propTypes = {
  src: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default PlayButton;