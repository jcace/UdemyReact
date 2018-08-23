import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0 } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {

    case 'ADD_EXPENSE':
      return [
        // ES6 spread operator, takes the existing thing and puts it in the new array, one by one
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => (id != action.id));
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          /// Spread out existing expense object...
          // Spread out new Updates object, overwriting whatever has changed!
          return {
            ...expense,
            ...action.updates
          }
        }
        else {
          return expense;
        }
      })
    default:
      return state;
  }
}

// Filters Reducer
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    default:
      return state;
  }
}

// Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

/**
 * Does the following everytime the state changes
 */
store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: "Remt", amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: "coffee", amount: 300 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 800 }));

store.dispatch(setTextFilter('Remt'));
store.dispatch(setTextFilter());


console.log(expenseOne);

const demoState = {
  expenses: [{
    id: 'asdfgaeg',
    description: 'January Rent',
    note: 'This was the final payment for the address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // Date or Amount
    startDate: undefined,
    endDate: undefined
  }
};