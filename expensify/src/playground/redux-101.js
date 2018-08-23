import { createStore } from 'redux';

// Action Generators - functions that return action objects

// Destructured Arguments to a function
// const add = ({a,b}, c) => {
//   return a + b + c;
// }
// console.log(add({a: 1, b:12}, 1000));

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: `INCREMENT`,
  incrementBy
}); 

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({newCount} = {}) => ({
  type:'SET',
  newCount
});

const resetCount = () => ({
  type:'RESET'
})

// Reducers describe what the application does in response to actions.
// "how do we change state?"

// Reducers
// 1. Reducers are pure functions (Output is only determined by input. Does not set any variables outside of its scope)
// 2. Never change state or action. Return an object with the new values

const countReducer = (state = { count: 0 }, action) => {
  // Default happens when store first created.
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.newCount
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

// Gets called every time the store changes
// Return value - can be called to unsubscribe!
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions - an object that gets sent to the store
// increment, decrement, reset...

// Increment
// type - convention is to use uppercase names & underscores
// MUST have type!
// Runs the "createStore" function when dispatch goes
store.dispatch(
  incrementCount()
);
// Unsubscribe
// unsubscribe();

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(
  resetCount()
);

store.dispatch(
  decrementCount()
);

store.dispatch(
  decrementCount({decrementBy: 10})
);


store.dispatch(setCount({newCount: 1001}));


