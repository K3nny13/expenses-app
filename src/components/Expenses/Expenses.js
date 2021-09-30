import './Expenses.css'
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const expenses = props.data

  return (
    <Card className="expenses">
      <ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount} />
      <ExpenseItem title={expenses[1].title} date={expenses[1].date} amount={expenses[1].amount} />
      <ExpenseItem title={expenses[2].title} date={expenses[2].date} amount={expenses[2].amount} />
    </Card>
  );
}

export default Expenses;