import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const disabled = this.props.score!==undefined
    return (
      <tr className={`RuleRow RuleRow-${this.props.score===undefined?'active':'disabled'} `} onClick={this.props.score===undefined?this.props.doScore:null} >
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{disabled?this.props.score:this.props.description}</td>
      </tr>
    )
  }
}

export default RuleRow;