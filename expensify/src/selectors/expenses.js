// Get Visible Expenses

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    
    // Just check details / description
    // includes method
    // convert both strings to lowercase
    const textMatch = textMatch || expense.description.toLowerCase().includes(text.toLowerCase());

    return (startDateMatch && endDateMatch && textMatch);
  }).sort((a,b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }

    // sortby -> amount
    // put the ones with a greater amount first.
  });
}
