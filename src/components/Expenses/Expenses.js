import './Expenses.css'
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import { useState } from 'react/cjs/react.development';

function Expenses(props) {
  const expenses = props.data

  const [selectedDate, setSelectedDate] = useState('2021');

  const filterChangeHandler = (filterDate) => {
    setSelectedDate(filterDate);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedDate} onFilterChange={filterChangeHandler} />
        {expenses.map(expense => <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount} />)}
      </Card>
    </div>
  );
}

export default Expenses;