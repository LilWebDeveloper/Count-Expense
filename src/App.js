import React from "react";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e2",
      title: "Burger",
      amount: 35.99,
      date: new Date(2022, 5, 29),
    },
    {
      id: "e3",
      title: "Petrol",
      amount: 102.46,
      date: new Date(2023, 1, 6),
    },
    {
      id: "e4",
      title: "Gifts",
      amount: 294.67,
      date: new Date(2022, 12, 28),
    },
  ];

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, {items: expenses})
    
    
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
