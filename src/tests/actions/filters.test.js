import {
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount,
  setTextFilter } from '../../actions/filters';
import moment from 'moment';

test('should generate setStartDate action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate setEndDate action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generate SORT_BY_DATE action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should generate SORT_BY_AMOUNT action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should generate SET_TEXT_FILTER action object', () => {
  const action = setTextFilter('new text');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'new text'
  });
});

test('should generate SET_TEXT_FILTER action object with no text', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});
