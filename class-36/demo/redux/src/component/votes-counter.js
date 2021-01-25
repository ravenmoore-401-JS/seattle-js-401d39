import React, {useState} from 'react';
import { connect } from 'react-redux';
import { increment } from '../store/votes';

const mapDispatchToProps = { increment };

// goal: make an app that displays three names and their votes. when a user clicks on someone's name, their vote tally increases

// [
//   { name: 'Mary', votes: 0 },
//   { name: 'Bob', votes: 0 },
//   { name: 'Jamie', votes: 0 },
// ]

function VotesCounter(props){
  console.log(props);
  // const [votes, setVotes] = useState([
  //     { name: 'Mary', votes: 0 },
  //     { name: 'Bob', votes: 0 },
  //     { name: 'Jamie', votes: 0 },
  //   ]);
  const voteForCandidate = (name) => {
    console.log('vote for Candidate', name);
    props.increment(name);
  }

  return(
    <div id="votes-counter">
      {props.banana.candidates.map((candidate, idx) => (
        <div key={idx}>
          <p>Name: {candidate.name} has {candidate.votes}</p>
          <button onClick={() => voteForCandidate(candidate.name)}>vote for this candidate</button>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  banana: state.counter,
})

export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);