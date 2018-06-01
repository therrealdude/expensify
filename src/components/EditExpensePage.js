import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense, startRemoveExpense, startEditExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(expense.id, expense);
    this.props.history.push('/');
  };
  onRemoveExpense = () => {
    this.props.startRemoveExpense(this.props.expense.id);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <ExpenseForm
          onSubmit={this.onSubmit}
          expense={this.props.expense} />
        <button onClick={this.onRemoveExpense}>Remove</button>
      </div>
    );
  }
}

const mapDispathToProps = (dispatch) => ({
    startEditExpense: (id, expense) =>  {
      dispatch(startEditExpense(id, expense))
    },
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
  });

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
};

export default connect(mapStateToProps, mapDispathToProps)(EditExpensePage);
