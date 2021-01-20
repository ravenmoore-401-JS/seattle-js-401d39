import React from 'react';

class Food extends React.Component{
  constructor(props){
    super(props);
    this.state={
      values: {}
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }

  handleChange = e => {
    this.setState({ values: {...this.state.values, [e.target.name]: e.target.value }})
  }

  render(){
    return(
      <div id="food">
        <h2>Class Componenet</h2>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="food" />
          <input onChange={this.handleChange}  type="number" name="calories" />
          <button>Eat The Food</button>
        </form>

        <strong>Here are the values from the state</strong>
        {
          Object.keys(this.state.values).map(keyName => (
            <p key={Math.random()}>{keyName} : {this.state.values[keyName]}</p>
          ))
        }
      </div>
    )
  }
}

export default Food;