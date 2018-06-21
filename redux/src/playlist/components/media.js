import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './media.css';


//setTimeout(function(){document.getElementById("test").addEventListener('click', function(){console.log('testi');});}, 50);

class Media extends PureComponent {

  //constructor(props) {
  //  super(props);
  //  this.state = {
  //    author: props.author
  //  }
  //  this.handleClick = this.handleClick.bind(this);
  //}

  state = {
    author: this.props.author
  }

  handleClick = (event) => {
    this.props.openModal(this.props.id);
  }

  render() {
    const styles = {
      container: {
        color: '#44546b',
        cursor: 'pointer',
        width: 260,
        border: "1px solid red"
      }
    }

    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img 
            className="Media-image" 
            src={this.props.cover} 
            alt="" 
            width={260} 
            height={160}/>
        </div>
        <h3 className="Media-title">{this.props.title}</h3>
        <div className="Media-author">{this.props.author}</div>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;
