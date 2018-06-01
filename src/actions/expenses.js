import uuid from 'uuid';
import database from '../firebase/firebase';

export const addExpense = (expense) => {
  return ({
  type: 'ADD_EXPENSE',
  expense
})};

export const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];
      snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
     });
     dispatch(setExpenses(expenses));
   });
 }
};

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description,
      note,
      amount,
      createdAt
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

export const startRemoveExpense = (id) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove().then((ref) => {
      dispatch(removeExpense({ id }));
    });
  };
};

export const startEditExpense = (id, updates) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).update(updates).then((ref) => {
      dispatch(editExpense(id, updates));
    })
  }
}
