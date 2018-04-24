import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (id, expense) => {
    this.props.editExpense(id, expense);
    this.props.history.push('/');
  };
  onRemoveExpense = (id) => {
    this.props.removeExpense(id);
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
    editExpense: (id, expense) =>  dispatch(editExpense(id, expense)),
    removeExpense: (id) => dispatch(removeExpense({ id }))
  });

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
};

export default connect(mapStateToProps, mapDispathToProps)(EditExpensePage);
