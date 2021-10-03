import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const todaysDate = new Date();
  const dateString = todaysDate.toISOString().slice(0 ,10);
  const [enteredDate, setEnteredDate] = useState(dateString);

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
  }

  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value)
  }

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value)
  }

  const submitHandler = event => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} value={enteredTitle} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' onChange={amountChangeHandler} value={enteredAmount} min='0.01' step='0.01' />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' onChange={dateChangeHandler} value={enteredDate} min='2019-01-01' step='2022-12-31' />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expenses</button>
      </div>
    </form>
  )
}

export default ExpenseForm;