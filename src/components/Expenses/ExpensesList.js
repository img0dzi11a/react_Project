import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"

const ExpensesList = (props) =>{

    if(props.items.length === 0)
    {
        return (
        <h2 className="expenses-list__fallback">
            NO ITEMS FOUND!
        </h2>
        );
    }
    else
    {
        return (
            <ul className="expenses-list">
                {
                    props.items.map((expense) => (
                        <ExpenseItem
                          title={expense.title}
                          amount={expense.amount}
                          key={expense.id}
                          date={expense.date}
                        ></ExpenseItem>
                    ))
                }
            </ul> 
        );

    }
   


}

export default ExpensesList;