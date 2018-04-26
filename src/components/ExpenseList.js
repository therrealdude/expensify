import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import { selectExpenses } from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    { props.expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      <ul>
        {props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} />)}
      </ul>
    )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
}

export default connect(mapStateToProps)(ExpenseList);
