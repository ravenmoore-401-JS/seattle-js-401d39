// votes reducer

let initialState = {
  candidates: [
  { name: 'Mary', votes: 0 },
  { name: 'Bob', votes: 0 },
  { name: 'Jamie', votes: 0 },
]};

// actions
export const increment = (name) => {
  return {
    type: 'INCREMENT',
    payload: name
  }
}

// export a function that has two parameters, state and action
// action has both type and payload in it
// switch statement to determijne what the type is
// the default return is state

export default (state=initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'INCREMENT':
      // increment the votes for the candidate
      let candidates = state.candidates.map(candidate => {
        // find the candidate who was click on
        if(candidate.name === payload){
          // increment the vote
          return {name:candidate.name, votes: candidate.votes + 1}
        }
        return candidate;
      });

      console.log('inital state', initialState, candidates);
      // initialState.candidates = candidates;
      // return initialState.candidates;
      return candidates;

      // return state;

    default:
      return state;
  }
}