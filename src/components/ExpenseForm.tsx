import {
  ChangeEventHandler,
  FormEventHandler,
  MouseEventHandler,
  useState,
} from "react";
import ExpenseItemModel from "../models/ExpenseItemModel";
import "./ExpenseForm.css";

interface ExpenseFormProps {
  onFormSubmit: (formData: ExpenseItemModel) => void;
  onCancel: MouseEventHandler<HTMLButtonElement>;
}

function formatDate(date: Date) {
  const d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  return [year, month.padStart(2, "0"), day.padStart(2, "0")].join("-");
}

const ExpenseForm = function (props: ExpenseFormProps) {
  //   const fd: newExpense = { title: "", amount: "", date: "" };
  //   const [titleText, setTitleText] = useState("");
  //   const [amountText, setAmountText] = useState("");
  //   const [dateText, setDateText] = useState("");
  const [formData, setFormData] = useState<ExpenseItemModel>({
    title: "",
    amount: 0,
    date: new Date(Date.now()),
  });
  const formSubmitHandler: FormEventHandler<HTMLFormElement> = function (
    event
  ) {
    event.preventDefault();
    console.log(formData);
    props.onFormSubmit(formData);
    setFormData((prevState) => {
      return { title: "", amount: 0, date: new Date(Date.now()) };
    });
  };
  const titleChangeHandler: ChangeEventHandler<HTMLInputElement> = function (
    event
  ) {
    setFormData((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const amountChangeHandler: ChangeEventHandler<HTMLInputElement> = function (
    event
  ) {
    setFormData((prevState) => {
      return { ...prevState, amount: parseFloat(event.target.value) };
    });
  };
  const dateChangeHandler: ChangeEventHandler<HTMLInputElement> = function (
    event
  ) {
    setFormData((prevState) => {
      console.log(event.target.value);
      return { ...prevState, date: new Date(event.target.value) };
    });
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            onChange={titleChangeHandler}
            value={formData.title}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={formData.amount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            name="date"
            type="date"
            min="2022-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={formatDate(formData.date)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="reset" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
