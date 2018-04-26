import moment from 'moment';

export const selectExpenses = (expenses, { text, sortBy, startDate, endDate }) =>  expenses.filter((expense) => {
  const createdAtMoment = moment(expense.createdAt);
  const startDateMatch = !!startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
  const endDateMatch = !!endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
  const textMatch = text === undefined || !expense.description || expense.description.toLowerCase().includes(text.toLowerCase());

  return startDateMatch && endDateMatch && textMatch;
}).sort((a, b) => {
  if (sortBy === 'date')
  {
    return a.createdAt < b.createdAt ? 1 : -1;
  }
  else if (sortBy === 'amount'){
    return a.amount < b.amount ? 1 : -1;
  }
});

export const totalExpenses = (expenses) =>
  expenses.map(expense => expense.amount).reduce(
    (a, b) =>
      a + b,
      0);
