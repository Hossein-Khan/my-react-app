import { MouseEventHandler, useState } from "react";
import ExpenseItemModel from "../models/ExpenseItemModel";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

interface NewExpenseProps {
  onExpenseAdd: (newExpense: ExpenseItemModel) => void;
}

const NewExpense = function (props: NewExpenseProps) {
  const [showForm, setShowForm] = useState<boolean>(false);
  const formSubmitHandler = function (formData: ExpenseItemModel) {
    props.onExpenseAdd(formData);
    setShowForm((prevState) => !prevState);
  };
  const buttonClickHandler: MouseEventHandler<HTMLButtonElement> = function () {
    setShowForm(!showForm);
  };
  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onFormSubmit={formSubmitHandler}
          onCancel={buttonClickHandler}
        ></ExpenseForm>
      ) : (
        <div>
          <button onClick={buttonClickHandler}>Add New Expense</button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
