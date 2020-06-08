import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numWords : ["one","two","three","four","five","six"],
    val : 5
  };
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.props.handleClick(this.props.idx)
  }
  render() {
   let classes = `Die fas fa-dice-${this.props.numWords[this.props.val - 1]} fa-5x ` 
   if(this.props.locked) classes+= ' Die-locked ';
    if(this.props.rolling && !this.props.locked)classes+= ' Die-rolling'
   console.log(classes)
    return (
      <i
        className={classes}
        // style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleClick} 
        disabled = {this.props.disabled}
      >
        
      </i>
    );
  }
}

export default Die;
