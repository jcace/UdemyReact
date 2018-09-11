const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
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