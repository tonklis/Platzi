import React, {Component} from 'react';
import RegularError from '../components/regular-error.js';

class HandleError extends Component {

  state = {
    handleError: false,
    error: "",
    info: "",
  }

  componentDidCatch(error, info) {
    this.setState({
      handleError: true,
      error: error,
      info: info,
    })
  }

  render(){
    if (this.state.handleError) {
      return(
        <RegularError 
          error={this.state.error} 
          info={this.state.info}
        />
      )
    }
    return this.props.children
  }
}

export default HandleError;
