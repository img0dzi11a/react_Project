import React, { useState } from "react";

import "./expenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    //handler for title

    setEnteredTitle(event.target.value); //event contains the properties of event that occured where target is the target component and value is the value of that component
  };

  const amountChangeHandler = (event) => {
    //handler for amount

    setEnteredAmount(event.target.value); //event contains the properties of event that occured where target is the target component and value is the value of that component
  };

  const dateChangeHandler = (event) => {
    //handler for date

    setEnteredDate(event.target.value); //event contains the properties of event that occured where target is the target component and value is the value of that component
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const submitData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(submitData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value ={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enteredDate} min="2019-01-01" max=  "2022-12-31" onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                <button onClick={props.onStopEditing}>Cancel</button>
            </div>
        </form>
};
export default ExpenseForm;
