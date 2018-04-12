import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({description, amount, createdAt, id, dispatch}) => (
  <li>
    <div>
      <p>Description: <Link to={`/edit/${id}`}>{description}</Link></p>
      <p>Amount: {amount}</p>
      <p>Created At: {createdAt}</p>
    </div>
  </li>
);

export default connect()(ExpenseListItem);
