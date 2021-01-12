import React from 'react';

class Child extends React.Component{
  getPokemon = async (e) => {
    const url = this.props.url;

    const poke = await fetch(url, {method: 'GET', mode: 'cors'})
      .then(response => {
        if(response.status !== 200)return;
        
        return response.json();
      });
      
      // console.log('poke', poke.results);
      this.props.giveMomPoke(poke.results);
  }

  render(){
    // console.log('state', this.state, 'props', this.props);
    return(
      <div id="child">
        <h3>Hello I am {this.props.name} and I have <span data-testId="marsha-money">{this.props.money}</span> dollars</h3>

        <button onClick={this.props.askForMoney}>Ask Mom For Money</button>

        <button onClick={this.getPokemon}>Go Pokemon Hunting</button>
      </div>
    )
  }
}

export default Child;