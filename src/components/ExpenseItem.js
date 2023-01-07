import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(expenseInfo){

    return (
        <div className='expense-item'>
            <ExpenseDate date={expenseInfo.date}/>
            <div className='expense-item__description'>
                <h2>{expenseInfo.title}</h2>
                <div className='expense-item__price'>{expenseInfo.amount}</div>
            </div>
            </div>
    );
}

export default ExpenseItem;