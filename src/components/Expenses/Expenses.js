import './Expenses.css'
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import { useState } from 'react/cjs/react.development';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString().slice(0,4));

  const filterChangeHandler = (filterDate) => {
    setSelectedDate(filterDate);
  }

  const filteredExpenses = props.data.filter(expense => {
    return expense.date.getFullYear().toString() === selectedDate;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedDate} onFilterChange={filterChangeHandler} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;