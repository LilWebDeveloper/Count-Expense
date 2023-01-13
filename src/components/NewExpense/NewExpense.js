import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [active, setActive] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setActive(false);
  };

  const startActiveHandler = () => {
    setActive(true);
  };

  const stopActiveHandler = () => {
    setActive(false);
  };

  return (
    <div className="new-expense">
      {!active && <button onClick={startActiveHandler}>Add New Expense</button>}
      {active && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancle={stopActiveHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
