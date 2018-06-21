import React, {Component} from 'react';
import Search from '../components/search';
import { connect } from 'react-redux';
import { searchEntities } from '../../actions/index';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';

class SearchContainer extends Component {
  state = {
    value: 'Luis Fonsi'
  }
  handleSubmit = event => {
    event.preventDefault();
    //    fetch(`http://miapi.com/buscar/${this.input.value}`).then((data)=>{})    
    this.props.actions.searchAsynchEntities(this.input.value)
  }
  setInputRef = element => {
    this.input = element;
  }
  handleInputChange = event => {
    this.setState({
      value: event.target.value.replace(' ','-')
    })
  }
  render(){
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      /> 
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SearchContainer);
