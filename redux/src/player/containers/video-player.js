import React, {Component} from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';
import { connect } from 'react-redux';

class VideoPlayer extends Component {

  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
    mute: false,
    savedVolume: 0,
  }

  togglePlay = event => {
    this.setState({
      pause: !this.state.pause
    })
  }

  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    });
  }

  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    });
  }

  handleTimeUpdate = event => {
    this.setState({
      currentTime: this.video.currentTime
    })
  }

  leftPad = number => {
    const pad = '00';
    return pad.substring(0, pad.length - number.length) + number;
  }

  formattedTime = secs => {
    const minutos = parseInt(secs/60, 10);
    const segundos = parseInt(secs%60, 10);

    return `${minutos} : ${this.leftPad(segundos.toString())}`
  }

  handleProgressChange = event => {
    this.video.currentTime = event.target.value;
  }

  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }

  handleSeeked = event => {
    this.setState({
      loading: false 
    })
  }

  handleVolumeChange = event => {
    this.video.volume = event.target.value;
  }

  handleVolumeClick = event => {

    if ("volumeRangeId" !== event.target.id) {

      if(this.state.mute){
        this.video.volume = this.state.savedVolume;      
      } else {
        this.setState({
          savedVolume: this.video.volume
        });
        this.video.volume = 0;
      }

      this.setState({
        mute: (!this.state.mute)
      })

    }

  }

  handleFullScreenClick = event => {
    if(!document.webkitIsFullScreen){
      this.player.webkitRequestFullscreen();
    } else {
      document.webkitExitFullscreen();
    }
  }
  setRef = element => {
    this.player = element;
  }
  
  render(){
    return (
      <VideoPlayerLayout
        setRef={this.setRef}
      > 
        <Title 
          title={this.props.media.get('title')}
        />
        <Controls>
          <PlayPause 
            handleClick={this.togglePlay}
            pause={this.state.pause}
          />
          <ProgressBar 
            duration={this.state.duration}     
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Timer 
            duration={this.formattedTime(this.state.duration)}
            currentTime={this.formattedTime(this.state.currentTime)}
          />
          <Volume 
            handleVolumeChange={this.handleVolumeChange}
            handleVolumeClick={this.handleVolumeClick}
          />
          <FullScreen
            handleFullScreenClick={this.handleFullScreenClick}
          />
        </Controls>
        <Spinner 
          active={this.state.loading}
        /> 
        <Video 
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata = {this.handleLoadedMetadata}
          handleTimeUpdate = {this.handleTimeUpdate}
          handleSeeking = {this.handleSeeking}
          handleSeeked = {this.handleSeeked}
          src={this.props.media.get('src')}        
        />  
      </VideoPlayerLayout>
    )
  }
  
}

function mapStateToProps(state, props) {
  return {
    media: state.get('data').get('entities').get('media').get(props.id)
  }
}

export default connect(mapStateToProps)(VideoPlayer);
