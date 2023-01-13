import ExpensesFilter from "./ExpensesFilter";
import ExepnsesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

import React, { useState } from "react";
import "./Expenses.css";

const Expenses = (expenseInfo) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenseInfo.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExepnsesList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
