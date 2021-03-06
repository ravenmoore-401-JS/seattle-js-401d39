import React from 'react';
import './modal.scss';
import List from './list';

class Modal extends React.Component{
  constructor(props){
    console.log('in the constructor')
    super(props);
    this.state={
      method:'',
      results: []
    }
  }

  componentDidMount = () => {
    console.log('the component did mount')
  }

  getPokemon = async e => {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    var poke = await fetch(url, {method: this.state.method || 'GET', mode: 'cors'});
    let data = await poke.json();
    const results = data.results;
    this.setState({ results });
  }

  handleClick = idx => {
    
  }

  render(){
    console.log('in the render')
    return(
      <div id="modal">
        <h3>Modal</h3>
        <button data-testId="poke-button" onClick={this.getPokemon}>Go Pokemon Hunting</button>


        <h3>Results!</h3>
        <List>
        {this.state.results.length ? this.state.results.map((value, idx) => (
          <li onClick={() => this.handleClick(idx)} key={idx}>
            <span>name: {value.name}</span>
            <span>url: {value.url}</span>
          </li>
        ))
        : 
        'no results yet'
        }
        </List>
      </div>
    )
  }
}

export default Modal;