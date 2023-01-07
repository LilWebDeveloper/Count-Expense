import './ExpenseDate.css'

function ExpenseDate(expenseInfo){
    const month = expenseInfo.date.toLocaleString('pl-PL', {month: 'long'});
    const year = expenseInfo.date.getFullYear();
    const day = expenseInfo.date.toLocaleString('pl-PL', {day: '2-digit'});

    return (
            <div className='expense-date'>
                <div className='expense-date__month'>{month}</div>
                <div className='expense-date__year'>{year}</div>
                <div className='expense-date__day'>{day}</div>
            </div>
    );
}

export default ExpenseDate;