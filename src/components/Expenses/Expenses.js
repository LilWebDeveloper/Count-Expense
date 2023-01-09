import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import React, {useState} from "react";
import './Expenses.css';

const Expense = (expenseInfo) => {
const [filterYear, setFilteredYear] = useState('2020');

const filterChangeHandler = selectedYear => {
  setFilteredYear(selectedYear);
};

    return (
        <Card className='expenses'>
        <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
        <ExpenseItem
          title={expenseInfo.items[0].title}
          amount={expenseInfo.items[0].amount}
          date={expenseInfo.items[0].date}
        />
        <ExpenseItem
          title={expenseInfo.items[1].title}
          amount={expenseInfo.items[1].amount}
          date={expenseInfo.items[1].date}
        />
        <ExpenseItem
          title={expenseInfo.items[2].title}
          amount={expenseInfo.items[2].amount}
          date={expenseInfo.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenseInfo.items[3].title}
          amount={expenseInfo.items[3].amount}
          date={expenseInfo.items[3].date}
        />
      </Card>
    );
}

export default Expense;