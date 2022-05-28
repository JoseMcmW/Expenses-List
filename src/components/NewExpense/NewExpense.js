import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from '../NewExpense/ExpenseForm';

const NewExpense = (props) => {
    //State to open Expense Bar, to add Expense.
    const [isEditing, setIsEditing] = useState();

    //Save new expense to the list.
    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };


    return <div className="new-expense">
        {!isEditing && <button 
        onClick={startEditingHandler}>Add New Expense</button>
        }
        {isEditing && <ExpenseForm 
        onSaveExpenseData={SaveExpenseDataHandler} 
        onCancel={stopEditingHandler}/>
        }
    </div>
};

export default NewExpense;

