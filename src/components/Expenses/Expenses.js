import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import "./Expenses.css";

const Expense = (expenseInfo) => {
  const [filterYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenseInfo.items.map((expense) => (
        <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
      ))}
    </Card>
  );
};

export default Expense;
