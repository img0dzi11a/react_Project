import React, { useState } from "react";
//import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card.js";
import "./ComponentExpenseItem.css";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesList from "./ExpensesList.js";

function ComponentExpenseItem(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const DropDownHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const selectYearHandler = (clickedyear) => {
    props.expenseYearHandler(clickedyear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        dropDownHandlerPtr={DropDownHandler}
        selectYearHandler={selectYearHandler}
      />
      <ExpensesList items = {filteredExpenses}/>
    </Card>
  );
}
export default ComponentExpenseItem;
