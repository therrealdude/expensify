import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(<ExpenseListFilters
    filters={filters}
    setTextFilter={setTextFilter}
    sortByDate={sortByDate}
    sortByAmount={sortByAmount}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
    />)
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters alt filters correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const text = { target: { value: 'date' }};
  wrapper.find('input').prop('onChange')(text);
  expect(setTextFilter).toHaveBeenLastCalledWith(text.target.value);
});

test('should sort by date', () => {
  wrapper.setProps({
    filters: altFilters
  });
  const sortChange = { target: { value: 'date' }};
  wrapper.find('select').prop('onChange')(sortChange);
  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
  const sortChange = { target: { value: 'amount' }};
  wrapper.find('select').prop('onChange')(sortChange);
  expect(sortByAmount).toHaveBeenCalled();
});

// test('should handle date changes', () => {
//   const startDate = moment(0);
//   const endDate = moment(0).add(3, 'days');
//   wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
//   expect(setStartDate).toHaveBeenLastCalledWith(startDate);
//   expect(setEndDate).toHaveBeenLastCalledWith(endDate);
// });
//
// test('should handle date focus changes', () => {
//   wrapper.find('DateRangePicker').prop('onFocusChange')(true);
//   expect(wrapper.state.calendarFocused).toBe(true);
// });
