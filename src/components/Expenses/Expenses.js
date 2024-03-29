import { useState } from 'react';

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter 
          selectedYear={filteredYear} 
          onFilterChange={filterChangeHandler} 
        />
        {filteredExpenses.map((expense) => 
          (<ExpenseItem
            key={expense.id}
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date} 
          />)
        )}
      </Card>
    </div>
  );
};

export default Expenses;