import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

const EditExpensePage = ({dispatch, history, expense}) => (
  <div>
    <ExpenseForm
      onSubmit={(expense) => {
          console.log(editExpense);
          dispatch(editExpense(expense.id, expense));
          history.push('/');
      }}
      expense={expense}
    />
    <button onClick={(e) => {
      dispatch(removeExpense({id : expense.id}));
      history.push('/');
    }}>Remove</button>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
};

export default connect(mapStateToProps)(EditExpensePage);
