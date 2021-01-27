import superagent from 'superagent';
let initialState = { results: [] }

// actions
// export const get = () => {
//   // use superagent to go get information from pokemont and then return my object
//   superagent.get('https://pokeapi.co/api/v2/pokemon')
//     .then(results => {
//       return{
//         type: 'GET',
//         payload: results.body
//       }
//     })
// }

export const get = () => dispatch => {
  return superagent.get('https://pokeapi.co/api/v2/pokemon')
    .then(response => {
      dispatch(getAction(response.body))
    })
  }
export const getAction = payload => {
  return{
    type: 'GET',
    payload: payload
  }
}

// this is exactly the same as the function above but more drawn out so that you can see step by step what is happening

// export const get = () => {
//   return function (dispatch) {
//     return superagent.get('https://pokeapi.co/api/v2/pokemon')
//     .then(response => {
//       dispatch(getAction(response.body))
//     })
//   }
// }

export const deletePoke = (id) => dispatch => {
  return superagent.delete(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => {
      dispatch(deleteAction(response.body))
    })
}

export const deleteAction = payload => {
  return{
    type: 'DELETE',
    payload: payload
  }
}
// reducer
export default (state=initialState, action) => {
  let {type, payload} = action;
  switch(type) {
    case 'GET':
      return payload;
    case 'DELETE':
      return payload;
    default:
      return state;
  }
}

