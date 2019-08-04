import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import { asyncDecre,asyncIncre,increment,decrement } from "./actions/action.js";  
import {bindActionCreators} from 'redux'
const mapStateToProps=(store)=>{
  return({
    counter:store.counter
  })
}
const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({
    increment,decrement,asyncIncre,asyncDecre
  },dispatch)
}
class App extends React.Component {

  render(){
    return(<div>
      <h2>{this.props.counter}</h2>
      <button onClick={this.props.asyncDecre}>Async -</button>
      <button onClick={this.props.decrement}>-</button>
      <button onClick={this.props.increment}>+</button>
      <button onClick={this.props.asyncIncre}>Async +</button>
    </div>)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
