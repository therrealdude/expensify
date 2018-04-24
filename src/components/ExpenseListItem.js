import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({id, description, amount, createdAt}) => (
  <li>
    <div>
      <p>Description: <Link to={`/edit/${id}`}>{description}</Link></p>
      <p>Amount: {numeral(amount / 100).format('$0,000.00')}</p>
      <p>Created At: {moment(createdAt).format('MMMM Do, YYYY')}</p>
    </div>
  </li>
);

export default ExpenseListItem;
