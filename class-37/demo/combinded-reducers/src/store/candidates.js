const initialState = 
  [
    { name: 'Mary', votes: 0 },
    { name: 'Bob', votes: 0 },
    { name: 'Jamie', votes: 0 },
  ]


export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type) {
    case 'INCREMENT':
      let candidates = state.map(person => {
        if(person.name === payload){
          return {name: person.name, votes: person.votes + 1}
        } else {
          return person
        }
      })
      return candidates

    default:
      return state;
  }
}

// ACTIONS
export const increment = (name) => {
  return {
    type: 'INCREMENT',
    payload: name
  }
}