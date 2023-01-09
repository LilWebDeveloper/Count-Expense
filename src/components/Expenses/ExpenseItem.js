import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from "react";
import './ExpenseItem.css';

const ExpenseItem = (expenseInfo) => {
    
    const [title, setTitle] = useState(expenseInfo.title);



    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={expenseInfo.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{expenseInfo.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;