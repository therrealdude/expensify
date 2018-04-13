import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toEqual('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toEqual('date');
});

test('should set text filter', () => {
  const text = 'some text';
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  }
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text)
});

test('should startDate filter', () => {
  const date = moment(0)
  const action = {
    type: 'SET_START_DATE',
    startDate: date
  }
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(date);
});

test('should set text filter', () => {
  const date = moment(0);
  const action = {
    type: 'SET_END_DATE',
    endDate: date
  }
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(date);
});
