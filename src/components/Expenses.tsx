import { useState } from "react";
import ExpenseItemModel from "../models/ExpenseItemModel";
import Card from "./Card";
import ExpenseChart from "./ExpenseChart";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

interface ExpensesProp {
  items: ExpenseItemModel[];
}

const Expenses = function (props: ExpensesProp) {
  const [selectedYear, setSelectedYear] = useState<string>("2020");
  const filteredList = props.items.filter(
    (item) => item.date.getFullYear().toString() === selectedYear
  );
  const filterChangeHandler = function (filteredYear: string) {
    setSelectedYear(filteredYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onFilterChange={filterChangeHandler}
      ></ExpensesFilter>
      <ExpenseChart expenses={filteredList}></ExpenseChart>
      {filteredList.length > 0 ? (
        filteredList.map((filteredItem) => (
          <ExpenseItem
            key={filteredItem.id}
            title={filteredItem.title}
            amount={filteredItem.amount}
            date={filteredItem.date}
          ></ExpenseItem>
        ))
      ) : (
        <h2 style={{ textAlign: "center", color: "white", padding: "50px" }}>
          Nothing Found!
        </h2>
      )}
    </Card>
  );
};

export default Expenses;
