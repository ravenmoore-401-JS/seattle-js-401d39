// type of middleware that is going to look at every action that comes in
// if that action has a function, it will turn that action into a function with the arguments of dispatch and getState
// any return value from the inner function will be available as the return value of dispatch itself
// otherwise, it will say move along - next

export default store => next => action => 
  typeof action === 'function' 
  ? action(store.dispatch, store.getState)
  : next(action)

  