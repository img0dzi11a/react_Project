import React, {useState} from "react";
import './newExpenses.css';
import ExpenseForm from "./expenseForm"

const NewExpenses = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const SaveExpenseData = (enteredData) =>{

    
        const expenseData = {
            ...enteredData,
            id: Math.random.toString()
        };
       //console.log(expenseData);
       props.submitHandlerPtr(expenseData);

       //setIsEditing(false);

    }
    const StartEditingHandler = () => {

        setIsEditing(true);
    }

    const StopEditingHandler = () =>{

        setIsEditing(false);
    }


    return <div className="new-expense">
            {
                !isEditing && <button onClick={StartEditingHandler}>Add ExpenseItem</button>
            }
            {
                isEditing && <ExpenseForm onSaveExpenseData = {SaveExpenseData} onStopEditing = {StopEditingHandler}/>
            }
            
            
        </div>
};
export default NewExpenses