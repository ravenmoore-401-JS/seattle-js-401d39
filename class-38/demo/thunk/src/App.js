import React from 'react';
import { connect } from 'react-redux';
import { get } from './store/pokemon';

function App(props) {
  console.log({props})
  const getPokemon = () => {
    props.get();
  }

  return (
    <div className="App">
      <button onClick={getPokemon}>Get Pokemon</button>
      {props.data.map((pokemon, i) => (
        <div key={i}>
          {pokemon.name}
        </div>
      ))}
    </div>
  );
}

const mapDispatchToProps = { get };
const mapStateToProps = state => ({
  data: state.pokemonThings.results
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
