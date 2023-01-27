import "./App.css";
import Expenses from "./components/Expenses";
import ExpenseItemModel from "./models/ExpenseItemModel";
import NewExpense from "./components/NewExpense";
import { useState } from "react";

const initialExpenses: ExpenseItemModel[] = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(Date.now()),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = function () {
  const [expenses, setExpensess] =
    useState<ExpenseItemModel[]>(initialExpenses);

  const expenseAddHandler = function (newExpense: ExpenseItemModel) {
    const newExp: ExpenseItemModel = {
      ...newExpense,
      id: Math.random().toString(),
    };
    setExpensess((prevState) => [...prevState, newExp]);
  };

  return (
    <div>
      <NewExpense onExpenseAdd={expenseAddHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>;
    </div>
  );
};

export default App;
