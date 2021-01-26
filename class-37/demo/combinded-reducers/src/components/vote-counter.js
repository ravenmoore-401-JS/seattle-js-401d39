import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../store/candidates';

function VotesCounter(props){
  console.log({props})

  const Vote = (name) => props.increment(name);
  
  return (
    <div id="votes">
      {props.candidates.map((person, i) => (
        <div key={i}>
          <p>Name: {person.name} has {person.votes} votes</p>
          <button onClick={() => Vote(person.name)}>vote for me!!!</button>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  candidates: state.candidates,
  votes: state.votes
});

const mapDispatchToProps = { increment };

export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);