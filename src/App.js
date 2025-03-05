import React from 'react';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpensess} from './components/IncomeExpensess';
import { TransactionList } from './components/TransactionList';
import { AddTransaction} from './components/AddTransaction';

import  {GlobalProvider}  from './context/GlobalState.js';



import './App.css';


function App() {
  return (
    <GlobalProvider >
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpensess/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
