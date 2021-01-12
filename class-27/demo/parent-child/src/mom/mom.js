import React from 'react';
import Child from '../child/child';
import Results from '../results/results';

class Mom extends React.Component{
  constructor(props){
    super(props);
    this.state={
      money:100, 
      name:'Carol',
      childName: 'Marsha',
      marshaMoney: 20,
      pokemon: []
    }
  }

  goToWork = e => {
    e.preventDefault();
    this.setState({ money: this.state.money + 100 });
  }

  giveMarsha20bucks = e => {
    // 1. reduce mom's money by $20
    this.setState({ money: this.state.money - 20 });

    // 2. update the money that she is sending to Marsha
    this.setState({ marshaMoney: this.state.marshaMoney + 20 });
  }

  getPoke = (pokemon) => {
    this.setState({ pokemon });
  }

  render(){
    console.log(this.state);
    return(
      <div id="mom">
        <h2>Mom</h2>
        <p>Hi my name is {this.state.name} and I have <span data-testId='money'>{this.state.money}</span> dollars</p>


        <form onSubmit={this.goToWork}>
          <button>Go to work</button>
        </form>

        <Child 
          name={this.state.childName}
          money={this.state.marshaMoney}
          askForMoney={this.giveMarsha20bucks}
          url={'https://pokeapi.co/api/v2/pokemon'}
          giveMomPoke={this.getPoke}
        />

        <Results
          pokemon={this.state.pokemon}
        />

      </div>
    )
  }
}

export default Mom;