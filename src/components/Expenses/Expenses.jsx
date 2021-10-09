import "./Expenses.css"
import Card from "../UI/Card"

import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"
import { useState } from "react"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"

function Expenses(props) {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toLocaleDateString().slice(0, 4)
  )

  const filterChangeHandler = (filterDate) => {
    setSelectedDate(filterDate)
  }

  const filteredExpenses = props.data.filter(
    (expense) => expense.date.getFullYear().toString() === selectedDate
  )

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={selectedDate}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
