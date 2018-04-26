import { selectExpenses, totalExpenses } from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';


test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([
    expenses[2],
    expenses[1]
  ]);
});

test('should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});

test('should return 0 if no expenses', () => {
  const total = totalExpenses([]);
  expect(total).toBe(0);
});

test('should correctly add up a single expense', () => {
  const total = totalExpenses([{ amount: 500 }]);
  expect(total).toBe(500);
});

test('should correctly add up multiple expenses', () => {
  const total = totalExpenses(expenses);
  expect(total).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});
