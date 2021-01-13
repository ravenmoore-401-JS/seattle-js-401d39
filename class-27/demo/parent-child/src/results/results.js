import React from 'react';
import ReactJson from 'react-json-view';

class Results extends React.Component{
  render(){
    return(
      <div id="fridge">
        <h3>fridge</h3>
        {/* <ReactJson src={this.props.pokemon} /> */}
        <p>{this.props.pokemon}</p>
      </div>
    )
  }
}

export default Results;