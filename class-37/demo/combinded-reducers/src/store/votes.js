const initialState = { 
  totalVotes: 0
}

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type) {
    case 'INCREMENT':
      return {totalVotes: state.totalVotes + 1}

    default:
      return state;
  }
}

// ACTIONS
export const increment = (name) => {
  return {
    type: 'INCREMENT'
  }
}