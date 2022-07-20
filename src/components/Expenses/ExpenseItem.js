import React from 'react';
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate.js";

const ExpenseItem = (props) => {

  const clickHandler = () =>{

    //setTitle('Changed');
    //console.log("Clicked!");
  }


  return (
    <Card className="expense-item">
      <ExpenseDate
        date={props.date}
      ></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
        <button onClick={clickHandler}>Title Change</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;
