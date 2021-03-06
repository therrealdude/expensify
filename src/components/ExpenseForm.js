import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100) : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: '',
      id: props.expense ? props.expense.id : undefined
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt){
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChanged = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount){
      this.setState(() => ({error: 'Please provide description and amount'}));
    }
    else{
      this.setState(() => ({error: ''}));
      console.log('state: ' + this.state);
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) *100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
        id: this.state.id
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p className="">{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange} />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
            id="txtAmount"
            />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChanged}
            numberOfMonths={1}
            isOutsideRange={(day) => false}
            id="dpCreatedAt"
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}>
            </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}
