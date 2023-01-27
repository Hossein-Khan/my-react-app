import "./ExpenseDate.css";

interface ExpenseDateProps {
  date: Date;
}

const ExpenseDate = function (props: ExpenseDateProps) {
  const year = props.date.toLocaleString("fa-IR", { year: "numeric" });
  const month = props.date.toLocaleString("fa-IR", { month: "long" });
  const day = props.date.toLocaleString("fa-IR", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
