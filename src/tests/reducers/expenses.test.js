import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, {'type': '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Baloon',
    note: '',
    amount: 100,
    createdAt: 0
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const expense = {
    id: '2',
    description: 'Baloon',
    note: '',
    amount: 100,
    createdAt: 0
  };
  const action = {
    type: 'EDIT_EXPENSE',
    updates: expense,
    id: expense.id
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe('Baloon');
});

test('should not edit an expense if not found', () => {
  const expense = {
    id: '6',
    description: 'Baloon',
    note: '',
    amount: 100,
    createdAt: 0
  };
  const action = {
    type: 'EDIT_EXPENSE',
    updates: expense,
    id: expense.id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
