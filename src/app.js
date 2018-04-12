import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';

const store = configureStore();

store.subscribe(()=> {
});

store.dispatch(addExpense({ description: 'Water Bill', amount:300 }));
store.dispatch(addExpense({ description: 'Gas bill', amount:500, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount:1500 }));
store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('water'));

setTimeout(() => {
  store.dispatch(setTextFilter('gas'));
}, 3000);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
