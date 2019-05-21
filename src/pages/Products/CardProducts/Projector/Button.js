import React, { Component } from 'react';
import './style.scss' ;

class Button extends Component {
  render() {
    return (
      <div onClick={this.props.handleClick}> {this.props.text}</div> 
    );
  }
}
export default Button;