import React from 'react';
import { totalExpenses, selectExpenses } from '../selectors/expenses';
import numeral from 'numeral';
import { connect } from 'react-redux';

export const ExpenseSummary = (props) => (
  <div>
    <p>Viewing {props.expenses.length} expense{ props.expenses.length === 1 ? '' : 's'} totaling {numeral(totalExpenses(props.expenses) / 100).format('$0,000.00')}</p>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
}

export default connect(mapStateToProps)(ExpenseSummary);
