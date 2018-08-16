import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  // Default happens when store first created.
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof (action.incrementBy) === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementBy = typeof (action.decrementBy) === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.count
      };
    default:
      return state;
  }
});

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
  {
    type: 'INCREMENT',
    incrementBy: 5
  }
);
// Unsubscribe
// unsubscribe();

store.dispatch(
  {
    type: 'RESET'
  }
);

store.dispatch(
  {
    type: 'DECREMENT'
  }
);

store.dispatch(
  {
    type: 'DECREMENT',
    decrementBy: 5
  }
);

store.dispatch(
  {
    type: 'INCREMENT'
  }
);

store.dispatch({
  type: 'SET',
  count: 101
})


