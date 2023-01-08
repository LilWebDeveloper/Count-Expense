import ExpenseDate from './ExpenseDate';
import Card from './Card';
import React from "react";
import './ExpenseItem.css';

function ExpenseItem(expenseInfo){

    return (
        <Card className='expense-item'>
            <ExpenseDate date={expenseInfo.date}/>
            <div className='expense-item__description'>
                <h2>{expenseInfo.title}</h2>
                <div className='expense-item__price'>{expenseInfo.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;