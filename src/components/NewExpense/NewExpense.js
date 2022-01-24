import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const SaveExpenseDateHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const isEditingHandler =()=>{
    setIsEditing(!isEditing);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={isEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onCancel={isEditingHandler} onSaveExpenseData={SaveExpenseDateHandler} />}
    </div>
  );
};

export default NewExpense;
