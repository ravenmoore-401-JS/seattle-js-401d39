import { connect } from 'react-redux';
import React from 'react';

function Status(props){
  console.log({props})

  let currentWinner = { name:'No winner', votes: 0 }
  props.candidates.forEach(person => {
    if(person.votes > currentWinner.votes){ currentWinner = person }
  });

  return (
    <div id="status">
      <p>{currentWinner.name} is winning with {currentWinner.votes} votes and there are {props.totalVotes.totalVotes} votes cast so far</p>
    </div>
  )
}

const mapStateToProps = state => ({
  totalVotes: state.votes,
  candidates: state.candidates,
});

export default connect(mapStateToProps)(Status);