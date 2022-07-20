import React, { useState } from "react";
import NewExpenses from "./components/newExpenses/newExpenses";
import ComponentExpenseItems from "./components/Expenses/ComponentExpenseItems";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpense] = useState(INITIAL_EXPENSES); //when new expense if added manually
  const [expenseYear, setExpenseYear] = useState(INITIAL_EXPENSES); //when a year is selected from drop down

  const expenseYearHandler = (expense) => {
    setExpenseYear(expense);
    console.log(expenseYear);
  };

  const ExpenseSubmitHandler = (expense) => {
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    /*setExpenseYear(() => {
      return [
        INITIAL_EXPENSES.filter((expense) => {
          return [expense.date === expenseYear];
        }),
      ];
    });*/
  };

  return (
    <div>
      <NewExpenses submitHandlerPtr={ExpenseSubmitHandler} />
      <ComponentExpenseItems
        expenses={expenses}
        expenseYear={expenseYear}
        expenseYearHandler={expenseYearHandler}
      ></ComponentExpenseItems>
    </div>
  );
}

export default App;
